import React, {Component} from 'react'
import {Layout} from 'antd'

import {Switch, Route, Redirect} from 'react-router-dom'

import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Home from '../home'
import Category from '../category'
import Product from '../product/product'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
import Role from '../role'
import User from '../user'
import MemoryUtils from '../../utils/memoryUtils'

const {Content,Sider} = Layout

export default class Admin extends Component {
  render() {
    // 登录验证：保证第一次渲染和重新渲染都要做验证
    const user = MemoryUtils.user
    // 如果没有用户名或用户id，就说明用户没有登录过
    if(!user || !user._id){
      // this.props.history.replace('/login') // 编程式导航，只适用于事件的回调函数
      return <Redirect to='/login'/> // 在return方法中，返回值需要是一个组件或null
    }
    return (
      <Layout style={{minHeight: '100vh'}}>
        <Sider>
          <LeftNav />
        </Sider>
        <Layout >
          <Header />
          <Content style={{margin: 20}}>
            <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/category' component={Category}/>
              <Route path='/product' component={Product}/>
              <Route path='/role' component={Role}/>
              <Route path='/user' component={User}/>
              <Route path='/charts/pie' component={Pie}/>
              <Route path='/charts/line' component={Line}/>
              <Route path='/charts/bar' component={Bar}/>
              <Redirect to='/home'/>
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    )
  }
}