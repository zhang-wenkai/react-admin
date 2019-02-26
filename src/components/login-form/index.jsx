import React, {Component} from 'react';
import {
  Form,
  Icon,
  Input,
  Button,
  message
} from 'antd';

// 注意：定义的变量不要放在import上面
const Item = Form.Item

class LoginForm extends Component {
  // 自定义校验规则
  checkPassword = (rule, value, callback) => {
    // 校验不通过
    if (!value) {
      callback('请输入密码')
    } else if (value.length < 5) {
      callback('密码最少为5位')
    } else if (value.length > 16) {
      callback('密码最长为16位');
    } else if (!(/^[a-zA-Z0-9_]+$/.test(value))) {
      callback('密码只能包含大小写英文、数字或下划线')
    } else {
      // 校验通过就调用callback
      callback()
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    const {validateFields, resetFields} = this.props.form
    // 检查当前表单项是否通过校验
    validateFields((error, values) => {
      if (!error) {
        // 校验通过
        console.log('收集的表单数据：', values)
        // 发送ajax请求
      } else {
        // 校验失败
        // 重置密码
        resetFields(['password'])
        // 收集错误信息
        /*
          Object.values(obj)：将对象中每一个值，添加到一个数组中并返回一个数组
          arr.reduce()：统计错误信息
        */
        const errMsg = Object.values(error).reduce((prev, curr) => prev + curr.errors[0].message + ' ', '')
        // 提示错误
        message.error(errMsg)
      }
    })
  }
  render () {
    const {getFieldDecorator} = this.props.form
    return (
      <Form className='login-form-container' onSubmit={this.handleSubmit}>
        <Item>
          {
            /*
              配置对象：属性名固定的一个对象
              getFieldDecorator(输入框的标识名称, 配置对象)
              getFieldDecorator()返回值是一个函数X，getFieldDecorator是一个高阶函数
              getFieldDecorator()(组件)返回值是一个新组件，函数X是一个高阶组件
             */
            getFieldDecorator(
              'username',
              {
                rules: [
                  { required: true, message: '请输入用户名' },
                  { min: 5, message: '用户名最少为5位' },
                  { max: 16, message: '用户名最长为16位' },
                  { pattern: /^[a-zA-Z0-9_]+$/, message: '必须是大小写英文、数字或下划线' }
                ]
              }
            )(<Input placeholder='用户名' prefix={<Icon type="user" />}/>)
          }
        </Item>
        <Item>
          {
            getFieldDecorator(
              'password',
              {
                rules: [
                  {validator: this.checkPassword}
                ]
              }
            )(<Input placeholder='密码' type='password' prefix={<Icon type="safety" />}/>)
          }
        </Item>
        <Item>
          <Button type='primary' htmlType="submit" className='login-form-button'>登录</Button>
        </Item>
      </Form>
    )
  }
}
/*
  包裹了LoginForm组件，生成一个新组件Form(LoginForm)
  作用：产生新组件，由新组件向LoginForm组件传递form属性
  语法：
    Form.create()返回值是一个函数X，Form.create这个函数叫做高阶函数（高阶函数：返回值是函数或者参数是函数）
    Form.create()(LoginForm)返回值是一个组件，函数X叫做高阶组件（高阶组件本质上是一个函数，接受的参数是组件，返回值是一个新组件）
 */
const WrappedLoginForm = Form.create()(LoginForm)
export default WrappedLoginForm