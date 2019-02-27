import React, {Component} from 'react'
import { Row, Col } from 'antd'

import {Switch, Route, Redirect} from 'react-router-dom'

import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Home from '../home'
import Category from '../category'
import Product from '../product'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
import Role from '../role'
import User from '../user'

import './index.less'

export default class Admin extends Component {
  render() {
    return (
      <Row className='admin'>
        <Col span={4}>
          <LeftNav/>
        </Col>
        <Col span={20}>
          <Header/>
          <div className='admin-main'>
            <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/category' component={Category}/>
              <Route path='/product' component={Product}/>
              <Route path='/charts/bar' component={Bar}/>
              <Route path='/charts/line' component={Line}/>
              <Route path='/charts/pie' component={Pie}/>
              <Route path='/role' component={Role}/>
              <Route path='/user' component={User}/>
              <Redirect to='/home'/>
            </Switch>
          </div>
          <Footer/>
        </Col>
      </Row>
    )
  }
}