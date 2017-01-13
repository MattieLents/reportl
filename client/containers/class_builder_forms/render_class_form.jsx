import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getClassById } from '../../actions/index';

class RenderClassForm extends Component {

  componentWillMount() {
    this.props.getClassById(this.props.classes.id);
  }

  renderClasses() {
    return (
      <div className="form">
        {this.props.selectedClass.map(classItem =>
          <div>
            <div>Class Name: {classItem.name}</div>
            <div>Class Teacher: {classItem.teacher_id}</div>
            <div>Schedule:
              <ul>
                <li> {classItem.monday === 1 ?
                  <p>{classItem.startTime} to {this.props.selectedClass.endTime}</p> :
                  <p>No Classes</p>}</li>
                <li> {classItem.tuesday === 1 ?
                  <p>{classItem.start_time} to {this.props.selectedClass.end_time}</p> :
                  <p>No Classes</p>}</li>
                <li> {classItem.wednesday === 1 ?
                  <p>{classItem.start_time} to {classItem.end_time}</p> :
                  <p>No Classes</p>}</li>
                <li> {classItem.thursday === 1 ?
                  <p>{classItem.start_time} to {classItem.end_time}</p> :
                  <p>No Classes</p>}</li>
                <li> {classItem.friday === 1 ?
                  <p>{classItem.start_time} to {classItem.end_time}</p> :
                  <p>No Classes</p>}</li>
              </ul>
              <div>
                {classItem.modules === undefined ? <p>No Modules</p> :
                <ol>
                  {classItem.modules.map(module => (
                    <li>
                      <div>Module Name: {module.moduleName}</div>
                      <div>Percent of Class Grade: {module.percentOfClassGrade}</div>
                    </li>
                  ))}
                </ol>
                }
              </div>
              <div>
                {classItem.users === undefined ? <p>No Modules</p> :
                <ol>
                  {classItem.users.map(user => (
                    <li>
                      <div>Student Name: {user.fullName}</div>
                    </li>
                  ))}
                </ol>
                }
              </div>
            </div>
          </div>,
      )}</div>
    );
  }

  render() {
    return (
      <div>
        <h2>All Classes</h2>
        <ol>
          {this.renderClasses()}
        </ol>
      </div>
    );
  }
}

RenderClassForm.propTypes = {
  getClassById: React.PropTypes.func,
  selectedClass: React.PropTypes.obj,
  classes: React.PropTypes.obj,
};

function mapStateToProps(state) {
  return {
    selectedClass: state.selectedClass,
    classes: state.classes,
  };
}

export default connect(mapStateToProps, { getClassById })(RenderClassForm);
