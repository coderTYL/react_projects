import React, { useEffect, useRef, useState } from 'react';
import { Table, Button, Popconfirm, Modal, Input, Space, Form, Upload, Select } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../utils/baseURL';
import TextArea from 'antd/es/input/TextArea';

export default function List(props) {
  let navigate = useNavigate();
  const formRef = useRef();
  const onReset = () => {
    formRef.current.resetFields();
  };
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

  // 设置对话框状态
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  let showModal = () => {
    setOpen(true);
  };
  let handleOk = (info) => {
    setConfirmLoading(true);
    fetch(
      `${BASE_URL}/list/insertPerson`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      }
    ).then(
      (response) => { return response.json(); }
    ).then(
      (data) => {
        // 在控制太输出数据提交结果
        console.log(data);
        setConfirmLoading(false);
      }
    ).catch(
      (error) => { console.log(error); }
    );
    setOpen(false);
  };
  let handleCancel = () => {
    setOpen(false);
  };


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
      return () => {
        fetch(`${BASE_URL}/list/delete`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(idArray),

          }
        ).then(
          (response) => { return response.json() }
        ).then(
          (data) => { console.log(data) }
        ).catch(
          (error) => { console.log(error) }
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
  const onSearch = (value) => {
    navigate('/home/manage/dashBoard', { state: value });
  };
  const competencyDetail = (employeeID) => {
    navigate('/home/manage/dashBoard', { state: employeeID });
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
            <Button type='primary' icon={<EditOutlined />} size='small' onClick={() => { competencyDetail(record.employeeID) }}>详情</Button>
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
        <Button type='primary' size='large' onClick={showModal}>新增员工</Button>
        <Modal
          title="请填写员工信息"
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <Form
            ref={formRef}
            labelCol={{span: 6,}}
            wrapperCol={{span: 14,}}
            layout='horizontal'
            style={{maxWidth: 600}}
          >
            <Form.Item name='employeeName' label="姓名" required>
              <Input />
            </Form.Item>
            <Form.Item name={'employeeID'} label="员工号" required>
              <Input />
            </Form.Item>
            <Form.Item name={'employeePic'} label="照片" valuePropName="fileList">
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    上传
                  </div>
                </div>
              </Upload>
            </Form.Item>
            <Form.Item name={'employeeDepartment'} label="部门">
              <Select>
                <Select.Option value="branch5">业务室</Select.Option>
                <Select.Option value="branch6">运行室</Select.Option>
                <Select.Option value="branch1">乘务一分部</Select.Option>
                <Select.Option value="branch2">乘务二分部</Select.Option>
                <Select.Option value="branch3">乘务三分部</Select.Option>
                <Select.Option value="branch4">乘务四分部</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name={'employeePosition'} label="岗位" required>
              <Select>
                <Select.Option value="HA">HA</Select.Option>
                <Select.Option value="FAT">FAT</Select.Option>
                <Select.Option value="BAT">BAT</Select.Option>
                <Select.Option value="AT">AT</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name={'remarks'} label="备注" >
              <TextArea rows={3} />
            </Form.Item>
            <Form.Item 
              wrapperCol={{offset: 4}}
            >
              <Button htmlType="button" danger onClick={onReset}>重置</Button>
            </Form.Item>
          </Form>
        </Modal>
        <Search size='large' style={{ maxWidth: '30%', float: 'right' }} placeholder="请输入姓名或员工号" allowClear onSearch={onSearch} enterButton />
      </div>
      <Table dataSource={dataSource} columns={columns} />
      <Outlet />
    </Space>
  );
}
