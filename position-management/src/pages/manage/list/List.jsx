import React, { useEffect, useRef, useState } from 'react';
import { Table, Button, Popconfirm, Modal, Input, Space, Form, Upload, Select, message, InputNumber } from 'antd';
import { DeleteOutlined, ZoomInOutlined, PlusOutlined } from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';
import { addEmployeeApi } from '../../../api/addEmployeeApi';
import {deleteEmployeesApi} from '../../../api/deleteEmployeesApi';
import TextArea from 'antd/es/input/TextArea';
import { fetchEmployeesApi } from '../../../api/fetchEmployeesApi';

export default function List() {
  let navigate = useNavigate();
  const { Search } = Input;
  const formRef = useRef();
  const [dataSource, setDataSource] = useState([]);
  const [count, setCount] = useState(0);

  // 设置对话框状态
  const [open, setOpen] = useState(false);
  let showModal = () => {
    setOpen(true);
  };
  let handleOk = () => {
    let value = formRef.current.getFieldsValue();
    addEmployeeApi(value).then(
      (data)=>{
        if (data.code === 1) {
          message.success('添加成功！');
          formRef.current.resetFields();
          setCount(count +1);
        }else if (data.code === 0) {
          message.error('操作失败！请重试！');
        }
      }
    )
  setOpen(false);
};
let handleCancel = () => {
  setOpen(false);
};

const onReset = () => {
  formRef.current.resetFields();
};

let employeeIDForDelete = useRef([]);
// 组件加载时发送请求获取员工数据
useEffect(
  () => {
    // 组件加载时向服务器发送get请求获取员工集合
    fetchEmployeesApi().then(
      (data) => {
        if (data.code === 1) {
          let employeeList = data.data.map(
            (employee) => {
              return {
                key: employee.id,
                employeeID: employee.id,
                name: employee.name,
                gender: employee.gender,
                department: employee.departmentName,
                position: employee.position,
                competency: employee.competency,
              }
            }
          );
          setDataSource(employeeList);
        }
      }
    )

    let idArray = employeeIDForDelete.current;
    return () => {
      // 组件卸载时向服务器发送请求删除选择的员工号数组
      deleteEmployeesApi(idArray).then(
        (data)=>{
          if (data.data > 0) {
            console.log(data.data);
          }
        }
      )
    }
  }, [count]
);
const handleDelete = (employeeID) => {
  const newData = dataSource.filter((item) => item.employeeID !== employeeID);
  employeeIDForDelete.current.push(employeeID);
  setDataSource(newData);
};

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
    title: '岗位',
    dataIndex: 'position',
    key: 'position',
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
          <Button type='primary' icon={<ZoomInOutlined />} size='small' onClick={() => { competencyDetail(record.employeeID) }}>详情</Button>
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
        onCancel={handleCancel}
        okText="确认"
        cancelText="取消"
      >
        <Form
          ref={formRef}
          preserve={false}
          labelCol={{ span: 6, }}
          wrapperCol={{ span: 14, }}
          layout='horizontal'
          style={{ maxWidth: 600 }}
        >
          <Form.Item name='name' label="姓名"  required>
            <Input style={{width: '55%',}} />
          </Form.Item>
          <Form.Item name={'employeeID'} label="员工号" required>
            <Input style={{width: '55%',}} />
          </Form.Item>
          <Form.Item name={'gender'} label="性别" required>
            <Select style={{width: '30%',}}>
              <Select.Option value='0'>女</Select.Option>
              <Select.Option value='1'>男</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name={'photoURL'} label="照片" valuePropName="fileList">
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
          <Form.Item name={'phone'} label='电话号码'>
            <InputNumber controls={false}  style={{width: '100%',}} />
          </Form.Item>
          <Form.Item name={'departmentID'} label="部门" required>
            <Select>
              <Select.Option value="5">业务室</Select.Option>
              <Select.Option value="6">运行室</Select.Option>
              <Select.Option value="1">乘务一分部</Select.Option>
              <Select.Option value="2">乘务二分部</Select.Option>
              <Select.Option value="3">乘务三分部</Select.Option>
              <Select.Option value="4">乘务四分部</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name={'position'} label="岗位" required>
            <Select style={{width: '55%',}}>
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
            wrapperCol={{ offset: 4 }}
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
