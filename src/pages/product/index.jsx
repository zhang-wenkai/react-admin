import React, {Component} from 'react'
import {Card, Button, Icon, Table, Select, Input, message} from 'antd'

import MyButton from '../../components/my-button'

const Option = Select.Option

export default class Index extends Component {

  componentWillMount () {
    this.columns = [
      {
        title: '商品名称', // 表头名称
        dataIndex: 'name',
        // render: text => text, // 自定义渲染文本的规则
      }, {
        title: '商品描述',
        dataIndex: 'desc',
      },
      {
        title: '价格',
        dataIndex: 'price',
        width: 200,
        render: text => '¥' + text
      },
      {
        title: '状态',
        width: 200,
        render: category => {
          return <div>
            <Button type='primary'>上架</Button>
            &nbsp;&nbsp;
            已下架
          </div>
        }
      },
      {
        title: '操作',
        width: 200,
        render: category => {
          return <div>
            <MyButton name='详情' onClick={() => {}}/>
            &nbsp;&nbsp;
            <MyButton name='修改' onClick={() => {}}/>
          </div>
        }
      }
    ]
  }

  render () {
    const data = []
    return (
      <Card
        title={
          <div>
            <Select defaultValue='productName'>
              <Option value='productName'>根据商品名称</Option>
              <Option value='productDesc'>根据商品描述</Option>
            </Select>
            <Input placeholder='关键字' style={{width: 200, marginLeft: 10, marginRight: 10}}/>
            <Button type='primary'>搜索</Button>
          </div>
        }
        extra={<Button type='primary' ><Icon type='plus'/>添加产品</Button>}
      >
        <Table
          columns={this.columns}
          dataSource={data}
          bordered
          pagination={{
            defaultPageSize: 5,
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '15', '20'],
            showQuickJumper: true
          }}
          rowKey='_id'
          loading={false}
        />
      </Card>
    )
  }
}