import React from 'react';
import CourseFormMaker from '../containers/addCourse';
import DepartmentFormMaker from '../containers/addDepartment';
import UserFormMaker from '../containers/addUser';
import RenderClassBuilder from './render_class_builder';

class AllForms extends React.Component {
  constructor(props) {
    super(props);
    this.switchView = this.switchView.bind(this);
    this.state = {
      viewNow: 'User',
    };
  }

  switchView(viewName) {
    this.setState({ viewNow: viewName });
  }

  currentView() {
    if (this.state.viewNow === 'User') {
      return <UserFormMaker />;
    }

    if (this.state.viewNow === 'Department') {
      return <DepartmentFormMaker />;
    }

    if (this.state.viewNow === 'Course') {
      return <CourseFormMaker />;
    }

    if (this.state.viewNow === 'Class') {
      return <RenderClassBuilder />;
    }

    return false;
  }

  render() {
    return (
      <div>
        <div className="viewSwitch">
          <button className="userViewButton" onClick={() => this.switchView('User')}>Add User</button>
          <button className="userViewButton" onClick={() => this.switchView('Department')}>Add Department</button>
          <button className="userViewButton" onClick={() => this.switchView('Course')}>Add Course</button>
          <button className="userViewButton" onClick={() => this.switchView('Class')}>Add Class</button>
        </div>
        <div className="formContain">
          {this.currentView()}
        </div>
      </div>
    );
  }
}

export default AllForms;
