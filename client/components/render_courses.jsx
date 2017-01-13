import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getClassById, getUserById } from '../actions/index';

class RenderClassesforCourse extends Component {
  renderCourses() {
    if (this.props.course.classes) {
      return (
        <div className="courseCard">
          <div className="courseHeader">{this.props.course.name}</div>
          <div className="courseDescript">{this.props.course.description}</div>
          <div>{this.props.course.classes.map(eachClass => (
            <Link to="/coursecatalog/department/course/class"><button
              className="courseButton"
              onClick={() => {
                this.props.getClassById(eachClass.id);
                this.props.getUserById(eachClass.teacherId);
              }}
            >
              <div>Details for {eachClass.name} - Class ID {eachClass.id}</div>
            </button></Link>
          ))}</div>
        </div>
      );
    }
    return <p>Loading</p>;
  }

  render() {
    return (
      <div className="course">
        {this.renderCourses()}
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
