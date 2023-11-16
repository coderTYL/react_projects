import React, { ReactNode, useEffect, useState } from 'react'
import { Button, Card, Col, Divider, Row, Statistic, Table } from 'antd'
import { LikeOutlined } from '@ant-design/icons';
import { getNumberOfUsersApi } from '../../api/getNumberOfUsers';
import type { ColumnsType } from 'antd/es/table';
import Client from '../../types/Client';


function ClientManagement() {
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

    let data: DataType[] = [];
    const getNumbers = async () => {
        let value = await getNumberOfUsersApi() as { numberOfLikes: number, clients: Client[] };
        setClients(value.clients);
        setNumberOfLikes(value.numberOfLikes)
    }
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [checkable, setCheckable] = useState(false);
    const [clients, setClients] = useState([{ name: '', mobile: 0, address: '', isActive: true }]);
    const [numberOfLikes, setNumberOfLikes] = useState(0);
    useEffect(
        () => {
            getNumbers();
        }, []
    );
    let switchChecked = () => { setCheckable(checkable => !checkable) }
    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        renderCell: (checked: boolean, record: object, index: number, originNode: ReactNode) => { return checkable ? originNode : '' },
        hideSelectAll: !checkable,
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    let numberOfActiveClient = 0;
    clients.forEach((element, index) => {
        if (element.isActive) {
            ++numberOfActiveClient;
        }
        data.push(
            {
                key: index,
                name: element.name,
                mobile: element.mobile,
                address: element.address,
            }
        );
    });

    return (
        <>
            <Card>
                <div>
                    <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                        <Col span={8}>
                            <Statistic title="活跃用户" value={numberOfActiveClient}></Statistic>
                        </Col>
                        <Col span={8}>
                            <Statistic title="总用户" value={clients.length}></Statistic>
                        </Col>
                        <Col span={8}>
                            <Statistic title="好评量" value={numberOfLikes} prefix={<LikeOutlined />}></Statistic>
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
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} scroll={{ y: '30rem' }} />
            </Card>
        </>
    )
}

export default ClientManagement