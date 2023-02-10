import React from 'react'
import { Descriptions } from 'antd';

export default function UserInfo(props) {
    let {userId,userName, mobileNumber, location} = props.userInfo;
    return (
        <div>
            <Descriptions title="个人信息">
                <Descriptions.Item label="编号">{userId}</Descriptions.Item>
                <Descriptions.Item label="用户名">{userName}</Descriptions.Item>
                <Descriptions.Item label="手机号">{mobileNumber}</Descriptions.Item>
                <Descriptions.Item label="位置">{location}</Descriptions.Item>
                <Descriptions.Item label="口味喜好">1231231</Descriptions.Item>
            </Descriptions>
        </div>
    )
}
