import { Table, Space, Button } from 'antd';
import {ZoomInOutlined} from '@ant-design/icons';
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Alarm() {
  const navigate = useNavigate();
  const competencyDetail = (employeeID) => {
    navigate('/home/manage/dashBoard', { state: employeeID });
  }
  const data = [
    {
      employeeID: '0',
      name: '12',
      position: '12',
      departmentID: '12',
      competency: '100'
    },
    {
      employeeID: '0',
      name: '12',
      position: '12',
      departmentID: '12',
      competency: '120'
    }
  ];
  const columns = [
    {
      title: '员工号',
      dataIndex: 'employeeID',
      key: 'employeeID',
      align: 'center',
      width: '15%'
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      width: '15%'
    },
    {
      title: '岗位',
      dataIndex: 'position',
      key: 'position',
      align: 'center',
      width: '15%'
    },
    {
      title: '部门',
      dataIndex: 'departmentID',
      key: 'departmentID',
      align: 'center',
      width: '15%'
    },
    {
      title: '胜任力',
      dataIndex: 'competency',
      key: 'competency',
      align: 'center',
      width: '15%',
      sorter: (a, b) => a.competency - b.competency,
            sortDirections: ['descend', 'ascend'],
    },
    {
      title: "操作",
      align: 'center',
      key: "action",
      render: (_, record) => {
        return data.length >= 1 ? (
          <Space>
            <Button type='primary' icon={<ZoomInOutlined />} size='small' onClick={() => { competencyDetail(record.employeeID) }}>详情</Button>
          </Space>) : null
      }
    }
  ]
  return (
    <>
      <Table columns={columns} dataSource={data} style={{ minWidth: '100%', minHeight: '100%' }}/>
    </>

  )
}
