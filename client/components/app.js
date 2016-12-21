import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

  render() {
    return (
      <div>
        <div>
          <button><Link to='/'>Login</Link>&nbsp;</button>
          <button><Link to='/class'>Class Builder</Link></button>
          <button><Link to='/user'>Create User</Link></button>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
