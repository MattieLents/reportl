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
          <div className="itemBlock">
            <div className="titleBlock">{this.props.selectedClass[0].name}</div>
            <div>Teacher: {this.props.teacher}</div>
            <div>Class ID: {classInfo.id}</div>
          </div>
          <div className="columnContainer">
            <div className="leftColumn">
              <h2 className="titleBlock">Modules</h2>
              <div>{classInfo.modules.map(module => (
                <div className="itemBlock">
                  <div className="titleBlock">{module.moduleName}</div>
                  <div>Percent of Class Grade: {module.percentOfClassGrade}</div>
                  <div>Start Date: {module.startDate.slice(5, 10)}</div>
                  <div>End Date: {module.endDate.slice(5, 10)}</div>
                </div>
              ))}</div>
            </div>
            <div className="rightColumn">
              <h2 className="titleBlock">Students</h2>
              <div className="itemBlock">{classInfo.users.map(user => (
                <div className="titleBlock">{user.fullName}</div>
              ))}</div>
            </div>
          </div>
        </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderSingleClass()}
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
