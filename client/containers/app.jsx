import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import DashSubNav from './dashboardSubNav';
import SchoolSubNav from './schoolSubNav';

const titleStyle = {
  marginLeft: '0px',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: 'black',
  color: 'white',
  padding: '1px',
};

const subNavStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: 'lightgrey',
  height: '30px',
};

const buttonStyle = {
  backgroundColor: 'black',
  color: 'white',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.isAuth = this.isAuth.bind(this);
    this.isAuthType = this.isAuthType.bind(this);
    this.switchView = this.switchView.bind(this);
    this.state = {
      subNav: 'Dashboard',
    };
  }

  switchView(viewName) {
    this.setState({ subNav: viewName });
  }

  currentView() {
    // this.setState({
    //   subNav: this.state.subNav = viewName,
    // });
    if (this.state.subNav === 'Dashboard') {
      return <DashSubNav />;
    }

    if (this.state.subNav === 'School') {
      return <SchoolSubNav />;
    }

    return false;
  }

  isAuth() {
    return !!this.props.user.id;
  }

  isAuthType(...types) {
    return this.isAuth() && !!this.props.user.type && types.includes(this.props.user.type.name);
  }
// const App = ({ children, user }) => {
  // const isAuth = () => !!user.id;
  // const isAuthType = (...types) => isAuth() && !!user.type && types.includes(user.type.name);
  // let viewDashSubNav = true;
// viewSchoolSubNav = !viewDashSubNav
  // const switchView = () => {
  //   viewDashSubNav = !viewDashSubNav;
  // };
  // const subNav = () => (viewDashSubNav ? <DashSubNav /> : <SchoolSubNav />);
            // {!this.isAuth() && <button><Link to="/">Login</Link></button>}

  render() {
    return (
      <div>
        <div style={navStyle}>
          <h1 style={titleStyle}>reportl</h1>
          {this.isAuthType('student', 'teacher') && <button style={buttonStyle}><Link to="/updateprofile">Create Profile</Link></button>}
          {this.isAuthType('teacher') && <button style={buttonStyle}><Link to="/createform">Create Form</Link></button>}
          {this.isAuthType('student', 'teacher') && <button style={buttonStyle} onClick={() => this.switchView('Dashboard')}><Link to="/dashboard">My Dashboard</Link></button>}
          {this.isAuthType('student', 'teacher') && <button style={buttonStyle} onClick={() => this.switchView('School')}><Link to="/coursecatalog">My School</Link></button>}
          {(this.isAuth() && `Welcome: ${this.props.user.name} | ID: ${this.props.user.id}`)}
        </div>
        <div style={subNavStyle}>
          {this.currentView()}
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  // TODO: Not sure if this is the correct type for children
  children: React.PropTypes.func,
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
}))(App);
