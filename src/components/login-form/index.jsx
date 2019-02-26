import React, {Component} from 'react';
import {
  Form,
  Icon,
  Input,
  Button,
  message
} from 'antd';

// 注意：不要放在import上面
const Item = Form.Item

class LoginForm extends Component {
  render () {
    const {form} = this.props
    return (
      <Form className='login-form-container'>
        <Item>
          <Input placeholder='用户名' prefix={<Icon type="user" />}/>
        </Item>
        <Item>
          <Input placeholder='密码' prefix={<Icon type="safety" />}/>
        </Item>
        <Item>
          <Button type='primary' className='login-form-button'>登录</Button>
        </Item>
      </Form>
    )
  }
}

const WrappedLoginForm = Form.create()(LoginForm)
export default WrappedLoginForm