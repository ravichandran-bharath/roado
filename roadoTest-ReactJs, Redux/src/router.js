import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route } from 'react-router-dom';

import Home from './home';

import Login from './login';
import Logout from './logout';
import Registration from './registration';
import ForgotPassword from './forgotPassword';
import ChangePassword from './changePassword';
import CRUD from './crud';


export default class Routes extends Component {


  render() {
    return(
      <Router>
        
        <div>

          <Route exact path="/" component={Home}/>

          <Route path="/login" component={Login}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/signup" component={Registration}/>
          <Route path="/forgotPassword" component={ForgotPassword}/>
          <Route path="/changePassword" component={ChangePassword}/>
          <Route path="/crud" component={CRUD}/>

        </div>

      </Router>
    );
  }
}