import React, {Component} from 'react';
import { Col, Card, Form, Input, Button, Row } from 'antd';
import {Link} from 'react-router-dom';



export default class ForgotPassword extends Component {

    render() {

        return(
            <div>
                <Col>
                    <Card title="Forgot your password? Enter your email to retrieve your account!" style={{ backgroundColor: '#222', height: 450 }}>
                        <Form>
                            <div>
                                <Input size="large" placeholder="email" onChange={(value) => this.setState({password: value.target.value})} style={{width:250, margin: 20}}/>
                            </div>

                            <Button
                            type="primary"
                            style={{width:100, alignItems:'center'}}
                            /* disabled={!this.state.email} */
                            >
                                Submit
                            </Button>

                            <Row>
                                <p style={{margin: 10, float: "center", color: "white"}}>
                                    Or
                                </p>
                            </Row>

                            <Row>
                                <Link to="/login">
                                    <Button type="primary" style={{ margin:10}}>
                                        Login with us
                                    </Button>
                                </Link>
                                <Link to="/">
                                    <Button type="primary" style={{ margin:10,}}>
                                        Just Go Home
                                    </Button>
                                </Link>
                                <Link to="/signup">
                                    <Button type="primary" style={{ margin:10,}}>
                                        Register with us
                                    </Button>
                                </Link>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </div>
        );
    }
}