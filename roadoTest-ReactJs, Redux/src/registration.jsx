import React, {Component} from 'react';
import { Col, Row, Form, Input, Button } from 'antd';
import {Link} from 'react-router-dom';



export default class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            message:'',
        };
    }

    render() {


        return (

            

            <div>
                <Col style={{ 
                    background: '#222',
                    height:570,
                    }} 
                    xs={{ span: 24 }} lg={{ span: 24}} sm={{ span: 24 }} md={{ span: 24 }}>
                    <Row type="flex" justify="center" style={{marginTop : 20}}>

                        <Form>
                            <div style={{fontSize:17, color:"#ffffff"}}>Register yourself with us..!</div>
                            
                            <div>
                                <Input style={{width:250, marginTop:20}} type="email" placeholder="Email Address" onChange={(value) => this.setState({email: value.target.value})} />
                            </div>

                            <div>
                                <Input style={{width:250, marginTop:20}} type="text" placeholder="Name" onChange={(value) => this.setState({name: value.target.value})} />
                            </div>

                            <div>
                                <Input style={{width:250, marginTop:20}} type="number" placeholder="Phone" onChange={(value) => this.setState({phone: value.target.value})} />
                            </div>

                            <div>
                                <Input style={{width:250, marginTop:20}} type="text" placeholder="Address" onChange={(value) => this.setState({address: value.target.value})} />
                            </div>

                            <div>
                                <Input style={{width:250, marginTop:20}} type="password" placeholder="Password" onChange={(value) => this.setState({password: value.target.value})} />
                            </div>

                            <div>
                                <Input style={{width:250, marginTop:20}} type="password" placeholder="Confirm Password" onChange={(value) => this.setState({confirmpassword: value.target.value})} />
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
                                disabled={!this.state.email && !this.state.name && !this.state.phone && !this.state.address}
                            >
                                Register
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
                                <Link to="/login">
                                    <Button type="primary" style={{ margin:10,}}>
                                        Login with us
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