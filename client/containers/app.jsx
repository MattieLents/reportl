import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import DashSubNav from './dashboardSubNav';
import SchoolSubNav from './schoolSubNav';
import SettingsSubNav from './settingsSubNav';

const titleStyle = {
  marginLeft: '0px',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: 'black',
  color: 'white',
};

const buttonStyle = {
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  fontSize: 'large',
  outline: 'none',
};

const container = {
  display: 'flex',
  justifyContent: 'center',
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
    if (this.state.subNav === 'Dashboard') {
      return <DashSubNav />;
    }

    if (this.state.subNav === 'School') {
      return <SchoolSubNav />;
    }

    if (this.state.subNav === 'Settings') {
      return <SettingsSubNav />;
    }

    return false;
  }

  isAuth() {
    return !!this.props.user.id;
  }

  isAuthType(...types) {
    return this.isAuth() && !!this.props.user.type && types.includes(this.props.user.type.name);
  }

  render() {
    return (
      <div>
        <div style={navStyle}>
          <h1 style={titleStyle}>reportl</h1>
          {this.isAuthType('student', 'teacher') && <Link to="/dashboard"><button style={buttonStyle} onClick={() => this.switchView('Dashboard')}>My Dashboard</button></Link>}
          {this.isAuthType('student', 'teacher') && <Link to="/coursecatalog/department/"><button style={buttonStyle} onClick={() => this.switchView('School')}>My School</button></Link>}
          {(this.isAuth() && <div style={buttonStyle}>{`Welcome: ${this.props.user.name} | ID: ${this.props.user.id}`}</div>)}
          {this.isAuthType('student', 'teacher') && <Link to="/updateprofile"><button style={buttonStyle} onClick={() => this.switchView('Settings')}><img alt="Settings" src="../assets/ic_settings_white_24dp_1x.png" /></button></Link>}
        </div>
        {this.currentView()}
        <div style={container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
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
