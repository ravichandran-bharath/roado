import React, {Component} from 'react';
import { Layout, Card, Form, Row, Col, Input, Button } from 'antd';
import MenuComponent from './menu';


const { Content, Footer, Sider } = Layout;


export default class ChangePassword extends Component {

    render() {

        return (

            <div>
                <Layout>
                    <Content style={{ padding: '0 50px' }}>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Sider width={250} style={{ background: '#fff' }}>
                                <MenuComponent />
                            </Sider>
                                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                    <Card title="Change Password">
                                        <Form
                                            className="ant-advanced-search-form"
                                            onSubmit={this.handleSearch}
                                        >
                                            
                                            <Row>
                                                <Col className="gutter-row" span={6}>
                                                    <div className="gutter-box">
                                                        <Input placeholder="brand" style={{width:250}} onChange={(value) => this.setState({brand: value.target.value})} />
                                                    </div>
                                                </Col>
                                            </Row>
                                            <br />
                                            <Row>
                                                <Col className="gutter-row" span={6}>
                                                    <div className="gutter-box">
                                                        <Input placeholder="product_name" style={{width:250}} onChange={(value) => this.setState({product_name: value.target.value})} />
                                                    </div>
                                                </Col>
                                            </Row>
                                            
                                            <br />
                                            <Row>
                                                <Col>
                                                    <Button
                                                        type="default"
                                                        htmlType="submit"
                                                        className="login-form-button"
                                                        style={{width:150,background: '#f6b303'}}
                                                    >
                                                        Submit
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </Card>
                                </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        2018 © Created by Bharath Ravichandran
                    </Footer>
                </Layout>
            </div>

        );
    }
}