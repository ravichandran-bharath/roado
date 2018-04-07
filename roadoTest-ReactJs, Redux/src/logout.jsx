import React, {Component} from 'react';
import {
    Redirect
  } from 'react-router-dom';

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }
    componentWillMount() {
        // this.props.logout();
        this.setState({
            redirect:true
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/'/>;
        }
    }
}

  
export default Logout;
