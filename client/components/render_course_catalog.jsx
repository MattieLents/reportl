import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { getDepartmentInformation } from '../actions/index';

class RenderCourseCatalog extends Component {
  componentWillMount() {
    this.props.getDepartmentInformation();
  }

  renderDepartments() {
    return this.props.departments.map(department => (
      <div key={department.id} >
        <li><button><Link to="/coursecatalog/department">{department.name}</Link>
        </button></li>
      </div>
    ));
  }
  render() {
    return (
      <div>
        <div>
          <ul>
            {this.renderDepartments()}
          </ul>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }

}

RenderCourseCatalog.propTypes = {
  getDepartmentInformation: React.PropTypes.func,
  departments: React.PropTypes.arrayOf(React.PropTypes.string),
  children: React.PropTypes.element,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getDepartmentInformation }, dispatch);
}

function mapStateToProps(state) {
  return { departments: state.departments };
}

export default connect(mapStateToProps, mapDispatchToProps)(RenderCourseCatalog);
