import React, { Component } from 'react';
import { connect } from 'react-redux';

 /*       <h2>{this.props.selectedClass.map(title => (
          <div>{title.name}</div>
          ))}</h2> */

class RenderSingleClass extends Component {

  renderSingleClass() {
    return (
      <div>{this.props.selectedClass.map(classInfo => (
        <div>
          <div>Course Name: {classInfo.course.name}</div>
          <div>Class ID: {classInfo.id}</div>
          <div>Full Name: {this.props.teacher}</div>
          <h2>Modules</h2>
          <div>{classInfo.modules.map(module => (
            <div>
              <div>{module.moduleName}</div>
              <div>{module.percentOfClassGrade}</div>
              <div>{module.startDate}</div>
              <div>{module.endDate}</div>
            </div>
            ))}</div>
          <h2>Students</h2>
          <div>{classInfo.users.map(user => (
            <div>
              <div>{user.imgUrl}</div>
              <div>{user.fullName}</div>
              <div>{user.description}</div>
              <div>{user.dateOfBirth}</div>
              <div>{user.email}</div>
              <div>{user.phoneNumber}</div>
              <div>{user.address}</div>
            </div>
          ))}</div>
        </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>{this.props.selectedClass.map(title => (
          <div>{title.name}</div>
          ))}</h2>
        <div>
          {this.renderSingleClass()}
        </div>
      </div>
    );
  }
}

RenderSingleClass.propTypes = {
  selectedClass: React.PropTypes.arrayOf(React.PropTypes.object),
  teacher: React.PropTypes.string,
};

function mapStateToProps(state) {
  return { selectedClass: state.selectedClass, teacher: state.getUser.fullName };
}

export default connect(mapStateToProps)(RenderSingleClass);
