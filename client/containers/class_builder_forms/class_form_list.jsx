import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectForm } from '../../actions/index';
import ClassMaker from './class-maker';
import StudentForm from './students';
import ScheduleForm from './scheduling';
import ModuleForm from './modules';
import AssignmentsForm from './assignments';

const AppComponents = [['Create Class', <ClassMaker />], ['Schedule', <ScheduleForm />], ['Students', <StudentForm />], ['Modules', <ModuleForm />], ['Assignments/Exams', <AssignmentsForm />]];

class FormList extends Component {

  renderList() {
    // TODO: Get a unique key
    return AppComponents.map((component, index) => (
      <button key={index} className="labelClassBuild" onClick={() => { this.props.selectForm(component[1]); }}>
        {component[0]}
      </button>
    ));
  }


  render() {
    return (
      <div className="form">
        <h2 className="formTitle">Class Builder</h2>
        {this.renderList()}
      </div>
    );
  }
}

FormList.propTypes = {
  // TODO: Looks like this should be an array, not sure what the elements are though
  selectForm: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectForm }, dispatch);
}

function mapStateToProps(state) {
  return { selectedForm: state.selectedForm };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormList);
