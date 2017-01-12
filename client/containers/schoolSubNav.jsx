import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import subNav from '../styles/subNav';

const { subNavButton, container } = subNav;

console.log('subNavButton', subNavButton);

const SchoolNav = ({ user }) => {
  const isAuth = () => !!user.id;
  const isAuthType = (...types) => isAuth() && !!user.type && types.includes(user.type.name);

  return (
    <div style={container}>
      {isAuth() && <Link to="/directory"><button style={subNavButton}>Directory</button></Link>}
      {isAuthType('student', 'teacher') && <Link to="/coursecatalog/department/"><button style={subNavButton}>Course Catalog</button></Link>}
      {isAuthType('teacher') && <Link to="/gradegraph"><button style={subNavButton}>Grades</button></Link>}
      {isAuthType('teacher', 'student') && <Link to="/calendar"><button style={subNavButton}>Calendar</button></Link>}
    </div>
  );
};

SchoolNav.propTypes = {
  user: React.PropTypes.shape({
    address: React.PropTypes.string,
    createdAt: React.PropTypes.string,
    dateOfBirth: React.PropTypes.string,
    description: React.PropTypes.string,
    email: React.PropTypes.string,
    firstName: React.PropTypes.string,
    fullName: React.PropTypes.string,
    id: React.PropTypes.number,
    imgUrl: React.PropTypes.string,
    isDisabled: React.PropTypes.number,
    lastName: React.PropTypes.string,
    name: React.PropTypes.string,
    phoneNumber: React.PropTypes.string,
    token: React.PropTypes.string,
    type: React.PropTypes.shape({
      createdAt: React.PropTypes.string,
      id: React.PropTypes.number,
      name: React.PropTypes.string,
      updatedAt: React.PropTypes.string,
    }),
    typeId: React.PropTypes.number,
    updatedAt: React.PropTypes.string,
  }),
};

export default connect(state => ({
  user: state.user,
}))(SchoolNav);
