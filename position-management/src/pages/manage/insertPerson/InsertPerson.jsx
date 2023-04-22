import { Form, Select, Input, DatePicker, Button, Space } from 'antd'
import { useRef } from 'react';
import React from 'react'

export default function InsertPerson() {
  const { Option } = Select;
  const formRef = useRef();
  const onReset = () => {
    formRef.current.resetFields();
};
  return (
      <Form ref={formRef} 
      style={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        minWidth: '100%', 
        minHeight: '100%'
       }}>
        <Form.Item name={'employeeID'} label="员工号" required>
          <Input />
        </Form.Item>
        <Form.Item name='name' label="姓名" required>
          <Input />
        </Form.Item>
        <Form.Item name={'birthday'} label='生日' required>
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
        >
          <Select placeholder="请选择性别">
            <Option value="1">男</Option>
            <Option value="0">女</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          
        >
          <Input
            style={{
              width: '100%',
            }}
          />
        </Form.Item>

        <Form.Item name={'employeeDepartment'} label="部门" required>
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
        <Form.Item
          name="intro"
          label="Intro"
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Space direction='row' style={{justifyContent: 'space-between'}}>
        <Form.Item>
        <Button htmlType="button" danger onClick={onReset}>重置</Button>
        </Form.Item>
        <Form.Item>
        <Button htmlType="button" type='primary'  onClick={onReset}>提交</Button>
        </Form.Item>
        </Space>
      </Form>
  )
}
