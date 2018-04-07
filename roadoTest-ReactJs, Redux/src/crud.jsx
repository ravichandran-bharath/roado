import React, {Component} from 'react';
import axios from 'axios';
import { Form, Input, Button, Card, Modal } from 'antd';
import 'antd/dist/antd.css';
import Update from './update';

import {connect} from 'react-redux';

import {
    Redirect
  } from 'react-router-dom';


const FormItem = Form.Item;

class CRUD extends Component {
    

    constructor(props) {
        super(props);
        this.state = {

            visible: false,
            confirmLoading: false,

            _id: '',
            id: '',
            taskname: '',
            description: '',
            user: []

        };
    }

    // getInitialState() {  
    //   return { taskname: '' ,address: '',email:'',contact:'',id:'',Buttontxt:'Save'};  
    // }

    componentDidMount() {

        axios.get("http://127.0.0.1:8000/showUserDetails",{
        })
        
        .then((response)=>{
            this.setState({
                
                user : response.data,
                data : response.data

            });  
        });    
    }

    deleteData(_user) {
        axios.delete("http://127.0.0.1:8000/deleteUserDetails",{
            _id: _user._id
        })
        
        .then((response)=>{
           if(response.data){
                axios.get("http://127.0.0.1:8000/showUserDetails",{
                })
                
                .then((response)=>{
                    this.setState({
                        user : response.data,
                        data : response.data
        
                    });  
                });
           }
        });
    }


    handleOk = () => {
        axios.post("http://192.168.43.244:8000/addUserDetails",{
            taskname: this.state.taskname,
            description: this.state.description
        })
        .then(()=>{
            this.setState({
            visible: false,
            confirmLoading: false,
            taskname: '',
            description: '',
            value:null
            });
        });
    }


    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
            confirmLoading: false,
            taskname: '',
            description: '',
            value:null
        });
    }

    handleInputChange(event) {
        this.setState({
            [event.target.taskname]: event.target.value,
            [event.target.description]: event.target.value,
        });
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    render() {

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 10 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };

        const { visible, confirmLoading } = this.state;

        return(
            <div>
                <Card title=" TODO - CRUD Operations ">
                    
                    <Button type="primary" onClick={this.showModal}>Add Task</Button>
                    
                    <Modal title="Add Task Details"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                    onSubmit={this.handleInputChange.bind(this)}>

                        <Form onSubmit={this.handleInputChange.bind(this)} style={{backgroundColor:'#f2f2f2', padding:10, marginBottom:10}}>
                            <FormItem {...formItemLayout} label="Name">
                                <Input size="large" placeholder="Name" value={this.state.taskname} onChange={(value) => this.setState({taskname: value.target.value})} onSubmit={this.handleInputChange} style={{width:250}}/>
                            </FormItem>
                            <FormItem {...formItemLayout} label="Address">
                                <Input size="large" placeholder="Address" value={this.state.description} onChange={(value) => this.setState({description: value.target.value})} onSubmit={this.handleInputChange} style={{width:250}}/>
                            </FormItem>

                            <center style={{backgroundColor:'#f2f2f2', padding:10, marginBottom:10}}>
                                {this.state.message}
                            </center>
                        </Form>
                    </Modal>
                </Card>

                <div style={{backgroundColor:'#f2f2f2', padding:10, margin:20}}> 
                    <Card> 
                    <table>
                        <tbody>  
                            <tr>
                                <th><b>S.No</b></th>
                                <th><b>TASK NAME</b></th>
                                <th><b>DESCRIPTION</b></th>
                                <th><b>Edit</b></th>
                                <th><b>Delete</b></th>
                            </tr>   
                                
                            {this.state.user.map((user) => ( 
                                <tr key={user._id}>     
                                    <td>{user._id}</td> 
                                    <td>{user.taskname}</td>                        
                                    <td>{user.description}</td>   
                                    <td>   
                                        {/* <Button
                                            type="primary"
                                            style={{width:100, alignItems:'center'}}
                                            onClick={this.editUserdata.bind(this, user._id)}
                                        >
                                            Edit
                                        </Button> */}
                                        <Update value={user}/>
                                        
                                    </td>   
                                    <td>   
                                        <Button
                                            type="primary"
                                            style={{width:100, alignItems:'center'}}
                                            onClick={this.deleteData.bind(this, user)}
                                            value={user._id}
                                        >
                                            Delete
                                        </Button>
                                    </td>   
                                </tr>
                            ))}    
                            </tbody>
                        </table>
                    </Card>
                </div>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(CRUD);
