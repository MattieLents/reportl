import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeNewClass } from '../../actions/index';

class ClassMaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      teacher_id: '',
      size: '',
    };

    this.onClassNameInputChange = this.onClassNameInputChange.bind(this);
    this.onTeacherIdInputChange = this.onTeacherIdInputChange.bind(this);
    this.onSizeInputChange = this.onSizeInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  onClassNameInputChange(event) {
    this.setState({ name: event });
  }

  onTeacherIdInputChange(event) {
    this.setState({ teacher_id: event });
  }

  onSizeInputChange(event) {
    this.setState({ size: event });
  }

  onFormSubmit() {
    this.setState({
      name: '',
      teacher_id: '',
      description: '',
      size: '',
    });
  }

  render() {
    return (
      <div className="form">
        <h2 className="formTitle">Create Class</h2>
        <div className="label">Class Name</div>
        <input
          className="field"
          value={this.state.name}
          type="text"
          onChange={(event) => {
            this.onClassNameInputChange(event.target.value);
          }}
        />
        <br />
        <div className="label">Teacher ID</div>
        <input
          className="field"
          value={this.state.teacher_id}
          type="number"
          onChange={(event) => {
            this.onTeacherIdInputChange(event.target.value);
          }}
        />
        <br />
        <div className="label">Class Size</div>
        <input
          className="field"
          value={this.state.size}
          type="number"
          onChange={(event) => {
            this.onSizeInputChange(event.target.value);
          }}
        />
        <br />
        <button
          className="formButton"
          type="submit"
          onClick={() => {
            this.props.makeNewClass(this.state);
            this.onFormSubmit();
          }}
        >Submit</button>
      </div>
    );
  }
}

ClassMaker.propTypes = {
  makeNewClass: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ makeNewClass }, dispatch);
}

export default connect(null, mapDispatchToProps)(ClassMaker);
