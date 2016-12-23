import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTeachers, getAllStudents, deleteUser } from '../actions/index';

class RenderUsers extends Component {
  componentWillMount() {
    this.props.getAllTeachers();
    this.props.getAllStudents();
  }

  renderTeachers() {
    console.log('props: allTeachers: ', this.props.allTeachers);
    return this.props.allTeachers.map(eachTeacher => (
      <div>
        <img alt="profile" src={eachTeacher.imgUrl} />
        <li key={eachTeacher.email}>
          <div>Name: {eachTeacher.fullName}</div>
          <div>Email: {eachTeacher.email}</div>
        </li>
        <button
          onClick={() => {
            deleteUser(eachTeacher.id);
            this.props.getAllTeachers();
          }}
        >
          DELETE
        </button>
      </div>
    ));
  }

  renderStudents() {
    console.log('props: allStudents: ', this.props.allStudents);
    return this.props.allStudents.map(eachStudent => (
      <div>
        <img alt="profile" src={eachStudent.imgUrl} />
        <li key={eachStudent.email}>
          <div>Name: {eachStudent.fullName}</div>
          <div>Email: {eachStudent.email}</div>
        </li>
        <button
          onClick={() => {
            deleteUser(eachStudent.id);
            this.props.getAllStudents();
          }}
        >
          DELETE
        </button>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <ul>
          {this.renderStudents()}
        </ul>
        <h1>Teachers</h1>
        <ul>
          {this.renderTeachers()}
        </ul>
      </div>
    );
  }
}

RenderUsers.propTypes = {
  getAllTeachers: React.PropTypes.func,
  getAllStudents: React.PropTypes.func,
  allTeachers: React.PropTypes.arrayOf(React.PropTypes.object),
  allStudents: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  console.log('state in mapStateToProps: ', state);
  return {
    allTeachers: state.allTeachers,
    allStudents: state.allStudents,
  };
}

export default connect(mapStateToProps, { getAllTeachers, getAllStudents })(RenderUsers);
