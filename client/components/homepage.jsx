import React from 'react';
import { hashHistory } from 'react-router';

const Homepage = () => (
  <div className="imageDiv">
    <button onClick={() => hashHistory.push('/login')} className="loginButton">
      login
    </button>
  </div>
);


export default Homepage;
