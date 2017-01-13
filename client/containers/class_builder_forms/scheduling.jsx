import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateClassById } from '../../actions/index';

class ScheduleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start_time: '',
      end_time: '',
      location: '',
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
    };

    this.onStartTimeChange = this.onStartTimeChange.bind(this);
    this.onEndTimeChange = this.onEndTimeChange.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.toggleMonday = this.toggleMonday.bind(this);
    this.toggleTuesday = this.toggleTuesday.bind(this);
    this.toggleWednesday = this.toggleWednesday.bind(this);
    this.toggleThursday = this.toggleThursday.bind(this);
    this.toggleFriday = this.toggleFriday.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  onStartTimeChange(event) {
    this.setState({ start_time: event });
  }

  onEndTimeChange(event) {
    this.setState({ end_time: event });
  }

  onLocationChange(event) {
    this.setState({ location: event });
  }

  onFormSubmit() {
    this.setState({
      start_time: '',
      end_time: '',
      location: '',
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
    });
  }

  toggleMonday() {
    this.setState({ monday: true });
  }

  toggleTuesday() {
    this.setState({ tuesday: true });
  }

  toggleWednesday() {
    this.setState({ wednesday: true });
  }

  toggleThursday() {
    this.setState({ thursday: true });
  }

  toggleFriday() {
    this.setState({ friday: true });
  }

  render() {
    return (
      <div className="form">
        <h2 className="formTitle">{this.props.classes.name} Schedule</h2>
        <div className="label">Start Time</div>
        <input
          className="field"
          value={this.state.start_time}
          type="time"
          onChange={(event) => {
            this.onStartTimeChange(event.target.value);
          }}
        />
        <br />
        <div className="label">End Time</div>
        <input
          className="field"
          value={this.state.end_time}
          type="time"
          onChange={(event) => {
            this.onEndTimeChange(event.target.value);
          }}
        />
        <br />
        <div className="label">Location</div>
        <input
          className="field"
          value={this.state.location}
          type="text"
          onChange={(event) => {
            this.onLocationChange(event.target.value);
          }}
        />
        <br />
        <div className="label">Monday</div>
        <input
          className="radioButton"
          type="checkbox"
          onChange={() => {
            this.toggleMonday();
          }}
        />
        <br />
        <div className="label">Tuesday</div>
        <input
          className="radioButton"
          type="checkbox"
          onChange={() => {
            this.toggleTuesday();
          }}
        />
        <br />
        <div className="label">Wednesday</div>
        <input
          className="radioButton"
          type="checkbox"
          onChange={() => {
            this.toggleWednesday();
          }}
        />
        <br />
        <div className="label">Thursday</div>
        <input
          className="radioButton"
          type="checkbox"
          onChange={() => {
            this.toggleThursday();
          }}
        />
        <br />
        <div className="label">Friday</div>
        <input
          className="radioButton"
          type="checkbox"
          onChange={() => {
            this.toggleFriday();
          }}
        />
        <br />
        <button
          className="formButton"
          type="submit"
          onClick={() => {
            this.props.updateClassById(this.props.classes.id, this.state);
            this.onFormSubmit();
          }}
        >Submit</button>
      </div>
    );
  }
}

ScheduleForm.propTypes = {
  updateClassById: React.PropTypes.func,
  classes: React.PropTypes.obj,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateClassById }, dispatch);
}

function mapStateToProps(state) {
  return {
    classes: state.classes,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleForm);
