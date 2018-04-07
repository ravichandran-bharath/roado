import React, {Component} from 'react';
import { Layout } from 'antd';
import MenuComponent from './menu';


const { Content, Footer, Sider } = Layout;


export default class Dashboard extends Component {

    render() {

        return (
            <div>
                This is Dashboard Page
                <Layout>
                    <Content style={{ padding: '0 50px' }}>
                        <Layout style={{ padding: '24px 0', background: '#fff' }}>
                            <Sider width={250} style={{ background: '#fff' }}>
                                <MenuComponent />
                            </Sider>
                                <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                    This is Dashboard Space
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