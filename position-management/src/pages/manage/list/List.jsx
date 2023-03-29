import React, { useEffect, useRef, useState } from 'react';
import { Table, Button, Popconfirm, Input, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../utils/baseURL';

export default function List(props) {
  let navigate = useNavigate();
  const defaultData = [
    {
      key: '1',
      employeeID: '199363',
      name: '胡彦斌',
      age: 32,
      gender: '男',
      department: '一分部',
      competency: 90
    },
    {
      key: '2',
      employeeID: '209363',
      name: '胡彦',
      age: 35,
      gender: '男',
      department: '一分部',
      competency: 60
    },
    {
      key: '3',
      employeeID: '169363',
      name: '彦斌',
      age: 22,
      gender: '男',
      department: '一分部',
      competency: 70
    },
    {
      key: '4',
      employeeID: '239363',
      name: '胡斌',
      age: 25,
      gender: '男',
      department: '一分部',
      competency: 93
    },
    {
      key: '5',
      employeeID: '198363',
      name: '斌',
      age: 52,
      gender: '男',
      department: '一分部',
      competency: 80
    },
  ];
  const [dataSource, setDataSource] = useState(defaultData);
  let employeeIDForDelete = useRef([]);
  // 组件加载时发送请求获取员工数据
  useEffect(
    () => {
      let idArray = employeeIDForDelete.current;
      fetch(`${BASE_URL}/list`).then(
        (response) => { return response.json(); }
      ).then(
        (data) => {
          setDataSource(data);
        }
      ).catch(
        (error) => { console.log(error); }
      );
      return ()=>{
        fetch(`${BASE_URL}/list/delete`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(idArray),
        }
        ).then(
          (response)=>{return response.json()}
        ).then(
          (data)=>{console.log(data)}
        ).catch(
          (error)=>{console.log(error)}
        );
      }
    }, []
  );
  const handleDelete = (employeeID) => {
    const newData = dataSource.filter((item) => item.employeeID !== employeeID);
    employeeIDForDelete.current.push(employeeID);
    setDataSource(newData);
  };
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const competencyDetail = (employeeID) => {
    navigate('/home/manage/dashBoard', {state: employeeID});
  }
  const columns = [
    {
      title: '员工号',
      dataIndex: 'employeeID',
      key: 'employeeID',
      align: 'center'
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      align: 'center'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      align: 'center'
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
      align: 'center'
    },
    {
      title: '部门',
      dataIndex: 'department',
      key: 'department',
      align: 'center'
    },
    {
      title: '岗位胜任力',
      dataIndex: 'competency',
      key: 'competency',
      align: 'center'
    },
    {
      title: "操作",
      align: 'center',
      key: "action",
      render: (_, record) => {
        return dataSource.length >= 1 ? (
          <Space>
            <Button type='primary' icon={<EditOutlined />} size='small' onClick={()=>{competencyDetail(record.employeeID)}}>详情</Button>
            <Popconfirm title="确定删除？" okText='是' cancelText='否' onConfirm={() => handleDelete(record.employeeID)}>
              <Button
                size='small'
                danger
                icon={<DeleteOutlined />}
              >删除
              </Button>
            </Popconfirm>
          </Space>) : null
      }
    }
  ];
  return (
    <Space direction='vertical' style={{ minWidth: '100%', minHeight: '100%' }}>
      <div>
        <Button type='primary' size='large'>新增员工</Button>
        <Search size='large' style={{ maxWidth: '50%', float: 'right' }} placeholder="请输入姓名或员工号" allowClear onSearch={onSearch} enterButton />
      </div>
      <Table dataSource={dataSource} columns={columns} />
      <Outlet />
    </Space>
  );
}
