import React, {Component} from 'react'
import {Card, Button, Icon, Table} from 'antd'

export default class Category extends Component {
  render () {
    const columns = [{
      title: '品类名称', // 表头名称
      dataIndex: 'name',
      // render: text => text, // 自定义渲染文本的规则
    }, {
      title: '操作',
      width: 300,
      render: xxx => {
        return <div>
          <a href="javascript:void(0)">修改名称</a>
          &nbsp;&nbsp;&nbsp;
          <a href="javascript:void(0)">查看其子品类</a>
        </div>
      }
    }]
    const data = [{
      key: '1',
      name: '111',
    }, {
      key: '2',
      name: '222'
    }, {
      key: '3',
      name: '333'
    },{
      key: '4',
      name: '444',
    }, {
      key: '5',
      name: '555'
    }, {
      key: '6',
      name: '666'
    }]
    return (
      <Card
        title="一级分类列表"
        extra={<Button type='primary'><Icon type="plus" />添加品类</Button>}
      >
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={{
            pageSize: 5,
            showSizeChanger: true,
            pageSizeOptions: ['5', '10', '15', '20'],
            showQuickJumper: true
          }}
        />
      </Card>
    )
  }
}