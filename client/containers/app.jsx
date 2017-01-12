import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import DashSubNav from './dashboardSubNav';
import SchoolSubNav from './schoolSubNav';
import SettingsSubNav from './settingsSubNav';

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
        <div className="nav">
          <h1 className="title">reportl</h1>
          {this.isAuthType('student', 'teacher') && <Link to="/dashboard"><button className="navButtons" onClick={() => this.switchView('Dashboard')}>My Dashboard</button></Link>}
          {this.isAuthType('student', 'teacher') && <Link to="/coursecatalog/department/"><button className="navButtons" onClick={() => this.switchView('School')}>My School</button></Link>}
          <div>
            {(this.isAuth() &&
              <div className="navButtons">Welcome {this.props.user.name} |
              <button className="logout" onClick={this.props.logout}>Logout</button>
                <Link to="/updateprofile">
                  <button className="navButtons" onClick={() => this.switchView('Settings')}>
                    <img alt="Settings" src="../assets/ic_settings_white_24dp_1x.png" />
                  </button></Link>
              </div>)}
          </div>
        </div>
        {this.currentView()}
        <div className="main">
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
  logout: React.PropTypes.func,
};

const logout = () => ({
  type: 'LOGOUT',
});

export default connect(state => ({
  user: state.user,
}), { logout })(App);
