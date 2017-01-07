import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCalendarEvents } from '../actions/index';
// import SearchCalendar from '../containers/getCalendarDays';
const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const weekDayStyle = {
  display: 'block',
  backgroundColor: 'black',
  color: 'white',
  textAlign: 'center',
  fontSize: 'x-large',
  padding: '5px',
};

const dateStyle = {
  display: 'block',
  textAlign: 'center',
  borderStyle: 'solid',
  borderWidth: 'thin',
};

const dayStyle = {
  display: 'block',
  borderStyle: 'solid',
  backgroundColor: 'white',
  height: '480px',
  width: '220px',
  margin: '10px',
  boxShadow: '10px 10px 5px lightgrey',
  borderWidth: 'thin',
  fontSize: 'large',
};

const meetingStyle = {
  marginTop: '40px',
  marginBottom: '40px',
  display: 'block',
  backgroundColor: 'lightgrey',
  height: '80px',
};

const weekStyle = {
  marginRight: '20px',
  marginLeft: '20px',
};

const buttonStyle = {
  display: 'block',
  backgroundColor: 'lightgrey',
  fontSize: 'medium',
  height: '30px',
  marginTop: '15px',
};


class RenderCalendar extends Component {
  constructor(props) {
    super(props);

    this.state = { startDay: 71, weekOf: ['March', 13] };
  }

  componentWillMount() {
    this.props.getAllCalendarEvents();
  }

  changeWeek(which) {
    if (which === 'next') {
      this.setState({ startDay: this.state.startDay + 7 });
    }

    if (which === 'last') {
      this.setState({ startDay: this.state.startDay - 7 });
    }
  }

  // renderSearchResults() {
  //   return this.props.calendarSearchResult.map(eachResultDay => (
  //     <div>{eachResultDay}</div>
  //   ));
  // }

  renderCalendar() {
    const isThisWeek = ({ dayCount: day }) => {
      if (day >= this.state.startDay && day < this.state.startDay + 5) {
        return true;
      }
      return false;
    };

    const thisWeek = this.props.calendarData.filter(isThisWeek);

    console.log('thisWeek: ', thisWeek);

    if (!thisWeek.length) {
      return false;
    }

    return thisWeek.map(eachDay => (

      <div style={dayStyle} key={eachDay.id}>
        <div style={weekDayStyle}>{`${eachDay.weekDay}`}</div>
        <div style={dateStyle}>{`${eachDay.month} ${eachDay.dayOfMonth}`}</div>
        {eachDay.meetings.map(meeting => (
          <div style={meetingStyle} key={meeting.id}>
            Meeting: {`classId: ${meeting.classId}, start: ${meeting.startTime}, end: ${meeting.endTime}`}
          </div>
        ))}
      </div>
    ));
  }

  render() {
    const isFirstDay = ({ dayCount: day }) => {
      if (day === this.state.startDay) {
        return true;
      }
      return false;
    };

    const firstDay = this.props.calendarData.filter(isFirstDay);

    if (!firstDay.length) {
      return false;
    }
    console.log('RENDER', this.props.calendarData.length);
    console.log('firstDay', firstDay);
    console.log('this.state.startDay', this.state.startDay);
    return (
      <div style={containerStyle}>
        <button style={buttonStyle} onClick={() => this.changeWeek('last')}>Last</button>
        <h3 style={weekStyle}>Week of {firstDay[0].month} {firstDay[0].dayOfMonth}</h3>
        <button style={buttonStyle} onClick={() => this.changeWeek('next')}>Next</button>
        <div style={containerStyle}>
          {this.renderCalendar()}
        </div>
      </div>
    );
  }
}

RenderCalendar.propTypes = {
  getAllCalendarEvents: React.PropTypes.func,
  calendarData: React.PropTypes.arrayOf(React.PropTypes.object),
  // calendarSearchResult: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  return { calendarData: state.calendarData };
}

export default connect(mapStateToProps, { getAllCalendarEvents })(RenderCalendar);
