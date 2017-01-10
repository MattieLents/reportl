import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getClassById, getUserById } from '../actions/index';

class RenderClassesforCourse extends Component {
  renderCourses() {
    if (this.props.course.classes) {
      console.log('*** CLASSES', this.props.course.classes);
      return (
        <li>Name: {this.props.course.name}
          <div>{this.props.course.description}</div>
          <div>{this.props.course.classes.map(eachClass => (
            <button
              onClick={() => {
                this.props.getClassById(eachClass.id);
                this.props.getUserById(eachClass.teacherId);
              }}
            >
              <Link to="/coursecatalog/department/course/class"> Class ID: {eachClass.id}</Link>
            </button>
          ))}</div>
        </li>
      );
    }
    return <p>Loading</p>;
  }

  render() {
    return (
      <div>
        <h3>Course Details</h3>
        <ol>
          {this.renderCourses()}
        </ol>
      </div>
    );
  }
}

RenderClassesforCourse.propTypes = {
  getClassById: React.PropTypes.func,
  getUserById: React.PropTypes.func,
  course: React.PropTypes.obj,
};

function mapStateToProps(state) {
  return { course: state.course };
}

export default connect(mapStateToProps, { getClassById, getUserById })(RenderClassesforCourse);
