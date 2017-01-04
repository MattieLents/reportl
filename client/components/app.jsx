import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <div>
      <button><Link to="/">Login</Link>&nbsp;</button>
      <button><Link to="/class">Class Builder</Link></button>
      <button><Link to="/user">Create User</Link></button>
      <button><Link to="/classes">View All Classes</Link></button>
      <button><Link to="/users">View All Users</Link></button>
      <button><Link to="/updateprofile">Create Profile</Link></button>
      <button><Link to="/profile">View Profile</Link></button>
      <button><Link to="/department">View Department</Link></button>
      <button><Link to="/gradegraph">View Grades</Link></button>
      <button><Link to="/attendance">Take Attendance</Link></button>
    </div>
    <div>
      {children}
    </div>
  </div>
);

App.propTypes = {
  // TODO: Not sure if this is the correct type for children
  children: React.PropTypes.func,
};

export default App;
