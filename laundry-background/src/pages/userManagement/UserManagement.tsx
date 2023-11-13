import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Statistic } from 'antd'
import { LikeOutlined } from '@ant-design/icons';
import { getNumberOfUsersApi } from '../../api/getNumberOfUsers';

type values = {
    activeUsers: number,
    total: number,
    numberOfLikes: number,
}

function UserManagement() {
    const getNumbers = async () => {
        return await getNumberOfUsersApi().then();
    }
    const [values, setValues] = useState(getNumbers());
    
    console.log(values);
   
    return (
        <>
            <Card>
                <div>
                    <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                        <Col span={8}>
                            <Statistic title="活跃用户" value={{values.activeUsers}}></Statistic>
                        </Col>
                        <Col span={8}>
                            <Statistic title="总用户"></Statistic>
                        </Col>
                        <Col span={8}>
                            <Statistic title="好评量" prefix={<LikeOutlined />}></Statistic>
                        </Col>
                    </Row>
                </div>
            </Card>
            <div>userManagement</div>
        </>
    )
}

export default UserManagement