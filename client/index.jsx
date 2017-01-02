import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import reducers from './reducers';
// import routes from './routes';

import App from './components/app';
import LoginField from './containers/login-field';
import UserForm from './containers/addUser';
import RenderClassBuilder from './components/render_class_builder';
import RenderUsers from './components/render_users';
import UpdateProfile from './components/render_profile_builder';
import RenderProfile from './components/render_profile';
import RenderClasses from './components/render_classes';


const logger = createLogger();

ReactDOM.render(

  <Provider store={createStore(reducers, applyMiddleware(promise, logger))}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={LoginField} />
        <Route path="/class" component={RenderClassBuilder} />
        <Route path="/user" component={UserForm} />
        <Route path="/classes" component={RenderClasses} />
        <Route path="/users" component={RenderUsers} />
        <Route path="/updateprofile" component={UpdateProfile} />
        <Route path="/profile" component={RenderProfile} />
      </Route>
    </Router>
  </Provider>

  , document.getElementById('container'));
