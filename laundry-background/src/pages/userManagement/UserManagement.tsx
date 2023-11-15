import React, { ReactNode, useEffect, useState } from 'react'
import { Button, Card, Col, Divider, Row, Statistic, Table } from 'antd'
import { LikeOutlined } from '@ant-design/icons';
import { getNumberOfUsersApi } from '../../api/getNumberOfUsers';
import type { ColumnsType } from 'antd/es/table';


type values = {
    activeUsers: number,
    total: number,
    numberOfLikes: number,
}
interface DataType {
    key: React.Key;
    name: string;
    mobile: number;
    address: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: '姓名',
        dataIndex: 'name',
    },
    {
        title: '电话',
        dataIndex: 'mobile',
    },
    {
        title: '地址',
        dataIndex: 'address',
    },
];

const data: DataType[] = [];
for (let i = 0; i < 10; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        mobile: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

function UserManagement() {
    const getNumbers = async () => {
        let value = await getNumberOfUsersApi();
        setValues(value as values);
    }
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [checkable, setCheckable] = useState(false);
    const [values, setValues] = useState({
        activeUsers: 100,
        total: 100,
        numberOfLikes: 100,
    });
    useEffect(
        () => {
            getNumbers();
        }, []
    );
    let switchChecked = ()=>{setCheckable(checkable=> !checkable)}
    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        renderCell: (checked: boolean, record: object, index: number, originNode: ReactNode)=>{return checkable? originNode: ''},
        hideSelectAll: !checkable,
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
        <>
            <Card>
                <div>
                    <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                        <Col span={8}>
                            <Statistic title="活跃用户" value={values.activeUsers}></Statistic>
                        </Col>
                        <Col span={8}>
                            <Statistic title="总用户" value={values.total}></Statistic>
                        </Col>
                        <Col span={8}>
                            <Statistic title="好评量" value={values.numberOfLikes} prefix={<LikeOutlined />}></Statistic>
                        </Col>
                    </Row>
                </div>
            </Card>
            <Divider dashed={true} children='用户列表'></Divider>
            <Card>
                <Button type='primary' onClick={switchChecked}>多选</Button>
                <span style={{ marginLeft: 8 }}>
                    {hasSelected ? ` 选中 ${selectedRowKeys.length} 项` : ''}
                </span>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{y: '30rem'}} />
            </Card>
        </>
    )
}

export default UserManagement