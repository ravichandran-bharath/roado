import React, {Component} from 'react';
import axios from 'axios';
import { Modal, Button, Input, Form } from 'antd';


const FormItem = Form.Item;


class Update extends Component {
        
    constructor(props) {
        super(props);
        this.state = {

            visible: false,
            confirmLoading: false,

            _id: '',
            taskname: '',
            description: '',
        };
    }

    showUpdate(_user) {
        this.setState({

            visible: true,

            _id: _user.value._id,
            taskname: _user.value.taskname,
            description:  _user.value.description,
        });

        alert("edit button end clicked");
    }


    handleOk = () => {
        axios.put("http://127.0.0.1:8000/updateUserDetails",{
            taskname: this.state.taskname,
            description: this.state.description,
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

    render()    {

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
                <Button type="primary" 
                onClick = {
                    this.showUpdate.bind(this,this.props)
                    }
                >
                    Edit
                </Button>

                    <Modal title="Edit Task Details"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                    onSubmit={this.handleInputChange.bind(this)}
                    >
                        <Form onSubmit={this.handleInputChange.bind(this)} style={{backgroundColor:'#f2f2f2', padding:10, marginBottom:10}}>
                            <FormItem {...formItemLayout} label="Name">
                                <Input size="large" placeholder="Name" value={this.state.taskname} onChange={(value) => this.setState({taskname: value.target.value})} style={{width:250}}/>
                            </FormItem>
                            <FormItem {...formItemLayout} label="description">
                                <Input size="large" placeholder="description" value={this.state.description} onChange={(value) => this.setState({description: value.target.value})} style={{width:250}}/>
                            </FormItem>
                            <center style={{backgroundColor:'#f2f2f2', padding:10, marginBottom:10}}>
                                {this.state.message}
                            </center>
                        </Form>
                    </Modal>
            </div>
        );
    }
}

export default Update;