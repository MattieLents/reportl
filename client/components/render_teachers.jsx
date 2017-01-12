import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTeachers, deleteUser } from '../actions/index';

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

class RenderTeachers extends Component {
  componentWillMount() {
    this.props.getAllTeachers();
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

  render() {
    return (
      <div style={containerStyle}>
        {this.renderTeachers()}
      </div>
    );
  }
}

RenderTeachers.propTypes = {
  getAllTeachers: React.PropTypes.func,
  allTeachers: React.PropTypes.arrayOf(React.PropTypes.object),
};

function mapStateToProps(state) {
  console.log('state in mapStateToProps: ', state);
  return {
    allTeachers: state.allTeachers,
  };
}

export default connect(mapStateToProps, { getAllTeachers })(RenderTeachers);
