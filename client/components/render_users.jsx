import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTeachers, getAllStudents, deleteUser } from '../actions/index';

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
};

const thumbnailStyle = {
  height: '50px',
  width: '50px',
};

const blockStyle = {
  display: 'block',
  borderStyle: 'solid',
  height: '60px',
  width: '250px',
  margin: '5px',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 'thin',
};

const textStyle = {
  float: 'right',
};

class RenderUsers extends Component {
  componentWillMount() {
    this.props.getAllTeachers();
    this.props.getAllStudents();
  }

  renderTeachers() {
    console.log('props: allTeachers: ', this.props.allTeachers);
    return this.props.allTeachers.map(eachTeacher => (
      <div style={blockStyle}>
        <img style={thumbnailStyle} alt="profile" src={eachTeacher.imgUrl} />
        <div style={textStyle} key={eachTeacher.email}>
          <div>Name: {eachTeacher.fullName}</div>
          <div>Email: {eachTeacher.email}</div>
          <button
            onClick={() => {
              deleteUser(eachTeacher.id);
              this.props.getAllTeachers();
            }}
          >
            DELETE
          </button>
        </div>
      </div>
    ));
  }

  renderStudents() {
    console.log('props: allStudents: ', this.props.allStudents);
    return this.props.allStudents.map(eachStudent => (
      <div style={blockStyle}>
        <img style={thumbnailStyle} alt="profile" src="http://localhost:8000/api/files/1" />
        <div style={textStyle} key={eachStudent.email}>
          <div>Name: {eachStudent.fullName}</div>
          <div>Email: {eachStudent.email}</div>
          <button
            onClick={() => {
              deleteUser(eachStudent.id);
              this.props.getAllStudents();
            }}
          >
            DELETE
          </button>
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div style={containerStyle}>
        <h1>Students</h1>
        <br />
        {this.renderStudents()}
        <br />
        <h1>Teachers</h1>
        <br />
        {this.renderTeachers()}
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
