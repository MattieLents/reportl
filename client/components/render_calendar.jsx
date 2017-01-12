import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { getAllCalendarEvents, getMeetingById, getAllAttendees } from '../actions/index';

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

      <div className="calDay" key={eachDay.id}>
        <div className="calWeekDay">{`${eachDay.weekDay}`}</div>
        <div className="calDate">{`${eachDay.month} ${eachDay.dayOfMonth}`}</div>
        {eachDay.meetings.map(meeting => (
          <div key={meeting.id}>
            <Link to="/lesson">
              <button
                className="calMeeting"
                onClick={() => {
                  this.props.getMeetingById(meeting.id);
                  this.props.getAllAttendees(meeting.id);
                }}
              >
              Meeting: {`classId: ${meeting.classId}, start: ${meeting.startTime}, end: ${meeting.endTime}`}
              </button>
            </Link>
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
      <div className="calContain">
        <button className="calButton" onClick={() => this.changeWeek('last')}>Last</button>
        <h3 className="calWeek">Week of {firstDay[0].month} {firstDay[0].dayOfMonth}</h3>
        <button className="calButton" onClick={() => this.changeWeek('next')}>Next</button>
        <div className="calContain">
          {this.renderCalendar()}
        </div>
      </div>
    );
  }
}

RenderCalendar.propTypes = {
  getAllCalendarEvents: React.PropTypes.func,
  calendarData: React.PropTypes.arrayOf(React.PropTypes.object),
  getMeetingById: React.PropTypes.func,
  getAllAttendees: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getMeetingById,
    getAllCalendarEvents,
    getAllAttendees,
  }, dispatch);
}
function mapStateToProps(state) {
  return { calendarData: state.calendarData };
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderCalendar);
