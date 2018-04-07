import React, {Component} from 'react';
import { Col, Row,Form, Input, Icon, Button  } from 'antd';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            message:'',
        };
    }

    login() {
        
        var self = this;
        
        axios.post("http://dev-env.vhfk2cqrrc.us-east-1.elasticbeanstalk.com/login",{
            email: this.state.email,
            password: this.state.password,
        })
        .then(function(response){
            console.log(response);

            if(response.data[0].valid){
                self.props.setEmailType({email: self.state.email, type:response.data[0].type});
                console.log("email"+self.props.user.email);
            }else{
                self.setState({
                    message:'Incorrect credentials entered',
                });
            }
        });
    }

    render() {

        if (this.props.user.authed) {
            return <Redirect to='/dashboard'/>;
        }

        return(

            <div>
                <Col style={{ 
                    background: '#222',
                    height:455,
                    }} 
                    xs={{ span: 24 }} lg={{ span: 24}} sm={{ span: 24 }} md={{ span: 24 }}>
                    <Row type="flex" justify="center" style={{marginTop:20}}>

                        <Form>
                            <div style={{fontSize:17, color:"#ffffff"}}>ENTER YOUR CREDENTIALS</div>
                            
                            <div>
                                <Input style={{width:250, marginTop:20}} prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="email" onChange={(value) => this.setState({email: value.target.value})} />
                            </div>

                            <div>
                                <Input style={{width:250, marginTop:20}} prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" onChange={(value) => this.setState({password: value.target.value})} />
                            </div>

                            <Row>
                                <div style={{backgroundColor:"red", color: "white", margin: 20, fontSize:16}}>
                                    {/* <p style={{textAlign:'center' }}>{this.state.message}</p> */}
                                </div>
                            </Row>
                            
                            <Button
                                style={{width:250, marginTop:10, marginBottom:10}}
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                /* onClick={this.signin.bind(this)} */
                                disabled={!this.state.email}
                            >
                                Log in
                            </Button>

                            <Row>
                                <p style={{margin: 10, float: "right"}}>
                                    <Link to="/forgotPassword">
                                        forgot password
                                    </Link>
                                </p>
                            </Row>

                            <Row>
                                <p style={{margin: 10, float: "center", color: "white"}}>
                                    Or
                                </p>
                            </Row>

                            <Row>
                                <Link to="/signup">
                                    <Button type="primary" style={{ margin:10,}}>
                                        Register with us
                                    </Button>
                                </Link>
                                <Link to="/">
                                    <Button type="primary" style={{ margin:10,}}>
                                        Just Go Home
                                    </Button>
                                </Link>
                            </Row>
                        </Form>
                    </Row>
                </Col>
            </div>

        );
    }
}

function mapStateToProps(state){
    return{
      user: state.reducerUser,
    };
  }
  
  function mapDispatchToProps(dispatch){
    return{
      setEmailType:(emailtype) => {
        dispatch({
          type:"LOGGED_IN",
          payload:emailtype
        });
      }
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Login);