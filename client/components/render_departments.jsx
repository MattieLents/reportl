import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { getDepartmentInformation, getCourseDetails } from '../actions/index';

class RenderDepartments extends Component {
  componentWillMount() {
    this.props.getDepartmentInformation();
  }

  renderDepartments() {
    return this.props.departments.map(department => (
      <div key={department.id} className="courseCatCard">
        <div className="courseCatalogHeaders">{department.name}</div>
        <div>
          {department.courses.map(course => (
            <Link to="/coursecatalog/department/course">
              <button
                className="courseCatalogButton"
                onClick={() => this.props.getCourseDetails(course.id)}
              >
                {course.name}
              </button></Link>
          ))}
        </div>
      </div>
    ));
  }
  render() {
    return (
      <div className="courseCat">
        {this.renderDepartments()}
      </div>
    );
  }

}

RenderDepartments.propTypes = {
  getDepartmentInformation: React.PropTypes.func,
  getCourseDetails: React.PropTypes.func,
  departments: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDepartmentInformation, getCourseDetails }, dispatch);
}

function mapStateToProps(state) {
  return { departments: state.departments };
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderDepartments);
