import React, {Component} from 'react';
import { Button } from 'antd';
import stars from './images/stars.jpeg';
import {Link} from 'react-router-dom';






export default class Home extends Component {

    render() {

        var messageBox = {
            width:"70%",
            height: "100%",
            paddingTop:40,
            paddingBottom:40,
            textAlign: 'center'
        }

          

        return(
            <div style={{backgroundImage: 'url(' +stars+ ')', height: 470}}>
                
                <center>
                    <div style={messageBox}>
                        <div style = {{fontSize:24, color:"white", fontStyle:"oblique"}}> 
                            <ul>
                                <ul>
                                    The application should contain the following:
                                </ul>
                                <ul>
                                    1.) a Login-in package (consisting of Login, sign-up, forgot password, OTP verification with appropriate field validators and error messages)
                                    2.) a home screen for the to-do application (with seamless user experience to c-r-u-d a to-do task) there must be options to archive, view completed assignments)
                                    3.) there must be options to set multiple sub-tasks, task deadline (date, time)
                                    4.) sharing the task via sms/whatsapp
                                </ul>
                            </ul>
                        </div>
                    </div>
                </center>

                
                <div style={{float:"center", margin:10,}}>
                   
                    <Link to="/login">
                        <Button type="primary" style={{ margin:10,}}>
                            Login here
                        </Button>
                    </Link>

                    <Link to="/signup">
                        <Button type="primary" style={{ margin:10,}}>
                            Register here
                        </Button>
                    </Link>

                </div>
                
            </div>
        )
    }
}


