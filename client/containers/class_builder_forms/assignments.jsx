import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeNewClass } from '../../actions/index';

class AssignmentsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      object_name: '',
      type_id: '',
      percent_of_module_grade: 0,
      class_id: this.props.classes.id,
    };

    this.onAssignmentNameChange = this.onAssignmentNameChange.bind(this);
    this.onAssignmentTypeChange = this.onAssignmentTypeChange.bind(this);
    this.onPercentOfModuleGradeChange = this.onPercentOfModuleGradeChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  onAssignmentNameChange(event) {
    this.setState({ object_name: event });
  }

  onAssignmentTypeChange(event) {
    this.setState({ type_id: event });
  }

  onPercentOfModuleGradeChange(event) {
    this.setState({ percent_of_module_grade: event });
  }

  onFormSubmit() {
    this.setState({
      object_name: '',
      type_id: '',
      percent_of_module_grade: '',
    });
  }

  render() {
    return (
      <div className="form">
        <h2>Add {this.props.classes.name} Assignments/Exams</h2>
        <div className="label">Assignment/Exam Name</div>
        <input
          className="field"
          value={this.state.object_name}
          type="text"
          onChange={(event) => {
            this.onAssignmentNameChange(event.target.value);
          }}
        />
        <br />
        <div className="label longLabel">
          <div>Assignment/Exam Type:</div>
          <div>1 - Exam</div>
          <div>2 - Quiz</div>
          <div>3 - Homework</div>
          <div>4 - Essay</div>
          <div>5 - Presentation</div>
        </div>
        <input
          className="field"
          value={this.state.type_id}
          type="number"
          onChange={(event) => {
            this.onAssignmentTypeChange(event.target.value);
          }}
        />
        <br />
        <div className="label">Percent of Module Grade</div>
        <input
          className="field"
          value={this.state.percent_of_module_grade}
          type="number"
          onChange={(event) => {
            this.onPercentOfModuleGradeChange(event.target.value);
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

AssignmentsForm.propTypes = {
  makeNewClass: React.PropTypes.func,
  classes: React.PropTypes.obj,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ makeNewClass }, dispatch);
}

function mapStateToProps(state) {
  return {
    classes: state.classes,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentsForm);
