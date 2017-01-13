import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addStudentsToClass } from '../../actions/index';

class StudentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student_id: '',
      class_id: this.props.classes.id,
    };

    this.onStudentIdChange = this.onStudentIdChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onStudentIdChange(event) {
    this.setState({ student_id: event });
  }

  onFormSubmit() {
    this.setState({
      student_id: '',
    });
  }

  render() {
    return (
      <div className="form">
        <h2 className="formTitle">Add {this.props.classes.name} Students</h2>
        <div className="label">Student ID</div>
        <input
          className="field"
          value={this.state.student_id}
          type="number"
          onChange={(event) => {
            this.onStudentIdChange(event.target.value);
          }}
        />
        <br />
        <button
          className="formButton"
          type="submit"
          onClick={() => {
            this.props.addStudentsToClass(this.state);
            this.onFormSubmit();
          }}

        >Submit</button>
      </div>
    );
  }
}

StudentForm.propTypes = {
  addStudentsToClass: React.PropTypes.func,
  classes: React.PropTypes.obj,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addStudentsToClass }, dispatch);
}

function mapStateToProps(state) {
  return {
    classes: state.classes,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
