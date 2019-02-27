import React, {Component} from 'react'
import { Row, Col } from 'antd'

import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import Footer from '../../components/footer'

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
            main
          </div>
          <Footer/>
        </Col>
      </Row>
    )
  }
}