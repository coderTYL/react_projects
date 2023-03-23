import { Card, Space } from 'antd'
import React from 'react'

export default function DashBoard(props) {
  return (
    <Space>
        <Card
            hoverable
            cover={<img src=' ' alt='证据照' />}
        >
            <Meta title='姓名' description='胜任力分值' />
        </Card>
    </Space>
  )
}
