import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllStudents, deleteUser } from '../actions/index';

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
    this.props.getAllStudents();
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
        {this.renderStudents()}
      </div>
    );
  }
}

RenderUsers.propTypes = {
  getAllStudents: React.PropTypes.func,
  allStudents: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  console.log('state in mapStateToProps: ', state);
  return {
    allStudents: state.allStudents,
  };
}

export default connect(mapStateToProps, { getAllStudents })(RenderUsers);
