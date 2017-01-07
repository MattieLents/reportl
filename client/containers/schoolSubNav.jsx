import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const SchoolNav = ({ user }) => {
  const isAuth = () => !!user.id;
  const isAuthType = (...types) => isAuth() && !!user.type && types.includes(user.type.name);

  return (
    <div>
      {isAuthType('student', 'teacher') && <button><Link to="/classes">Classes</Link></button>}
      {isAuth() && <button><Link to="/users">People</Link></button>}
      {isAuthType('student', 'teacher') && <button><Link to="/coursecatalog">Course Catalog</Link></button>}
      {isAuthType('teacher') && <button><Link to="/gradegraph">Grades</Link></button>}
      {isAuthType('teacher', 'student') && <button><Link to="/calendar">Calendar</Link></button>}
    </div>
  );
};

SchoolNav.propTypes = {
  // TODO: Not sure if this is the correct type for children
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
