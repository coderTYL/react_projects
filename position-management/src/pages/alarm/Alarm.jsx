import { Table, Space, Button } from 'antd';
import { ZoomInOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { warnApi } from '../../api/warnApi';

export default function Alarm() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const competencyDetail = (employeeID) => {
    navigate('/home/manage/dashBoard', { state: employeeID });
  }
  useEffect(
    () => {
      warnApi().then(
        (data) => {
          let personList = data.data.map(
            (employee) => {
              return {
                employeeID: employee.id,
                name: employee.name,
                position: employee.position,
                department: employee.department,
                competency: employee.competency
              }
            }
          )
          setData(personList);
        }
      )
    }, []
  );
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
      dataIndex: 'department',
      key: 'department',
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
      <Table columns={columns} dataSource={data} style={{ minWidth: '100%', minHeight: '100%' }} pagination={{pageSize: 8}} />
    </>

  )
}
