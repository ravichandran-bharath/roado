import React, {Component} from 'react';
import {
    Link
  } from 'react-router-dom';
import { Menu, Icon } from 'antd';


const SubMenu = Menu.SubMenu;


export default class MenuComponent extends Component {

    render() {

        return (

            <div>

                <Menu
                    theme = 'dark'
                    onClick={this.handleClick}
                    style={{ width: 240 }}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    >
                    <Menu.Item key="1">
                        <Icon type="file" />
                            Admin Dashboard
                        <Link to="/dashboard"></Link>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="bars" /><span>Store Master</span></span>}>
                        <Menu.Item key="2"><Link to="/addStores">Add Store</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/modifyStore">Modify Store</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Product Master</span></span>}>
                        <Menu.Item key="4"><Link to="/addProducts">Add Product</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/modifyProduct">Modify Product</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="setting" /><span>Admin Master</span></span>}>
                        <Menu.Item key="6"><Link to="/addAdmin">Add Admin</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/modifyAdmin">Modify Admin</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="user-add" /><span>Customer Master</span></span>}>
                        <Menu.Item key="8"><Link to="/addCustomers">Add Customer</Link></Menu.Item>
                        <Menu.Item key="9"><Link to="/deleteAdmin">Modify Admin</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" title={<span><Icon type="slack-square" /><span>Brand Master</span></span>}>
                        <Menu.Item key="10"><Link to="/addBrands">Add Brand</Link></Menu.Item>
                        <Menu.Item key="11"><Link to="/deleteBrands">Modify Brand</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub6" title={<span><Icon type="windows" /><span>Category Master</span></span>}>
                        <Menu.Item key="12"><Link to="/addCategories">Add Category</Link></Menu.Item>
                        <Menu.Item key="13"><Link to="/deleteCategories">Modify Category</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub7" title={<span><Icon type="pushpin" /><span>Featured Product Master</span></span>}>
                        <Menu.Item key="14"><Link to="/addFeaturedProducts">Add Featured Product</Link></Menu.Item>
                        <Menu.Item key="15"><Link to="/deleteFeaturedProducts">Modify Featured Product</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub8" title={<span><Icon type="tag" /><span>Offers Master</span></span>}>
                        <Menu.Item key="16"><Link to="/addOffers">Add Offer</Link></Menu.Item>
                        <Menu.Item key="17"><Link to="/deleteOffers">Modify Offer</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub9" title={<span><Icon type="credit-card" /><span>Payment Master</span></span>}>
                        <Menu.Item key="18"><Link to="/addPayments">Add Payment</Link></Menu.Item>
                        <Menu.Item key="19"><Link to="/deletePayments">Modify Payment</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub10" title={<span><Icon type="aliwangwang" /><span>Push Notification Master</span></span>}>
                        <Menu.Item key="20"><Link to="/addPushNotifications">Add Push Notification</Link></Menu.Item>
                        <Menu.Item key="21"><Link to="/deletePushNotifications">Modify Push Notification</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub11" title={<span><Icon type="star" /><span>Reward Master</span></span>}>
                        <Menu.Item key="22"><Link to="/addRewards">Add Reward</Link></Menu.Item>
                        <Menu.Item key="23"><Link to="/deleteRewards">Modify Reward</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub12" title={<span><Icon type="rocket" /><span>Shipping Master</span></span>}>
                        <Menu.Item key="24"><Link to="/addShippings">Add Shipping</Link></Menu.Item>
                        <Menu.Item key="25"><Link to="/deleteShippings">Modify Shipping</Link></Menu.Item>
                    </SubMenu>

                    <Menu.Item key="26">
                        <Icon type="solution" />
                            Reviews and Comments
                        <Link to="/ReviewsComments">                            
                        </Link>
                    </Menu.Item>
                    
                    <Menu.Item key="27">
                        <Icon type="key" />
                            Change Password
                        <Link to="/changePassword">                            
                        </Link>
                    </Menu.Item>
					
                    <Menu.Item key="28">
                        <Icon type="lock" />
                        Logout
                        <Link to="/logout"></Link>
                    </Menu.Item>
                </Menu>

            </div>

        );
    }
}