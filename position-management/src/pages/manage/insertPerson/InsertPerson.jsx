import { Form, Select, Input, DatePicker, Button, Space, Card, message } from 'antd'
import { useRef } from 'react';
import { addEmployeeApi } from '../../../api/addEmployeeApi'
import React from 'react'

export default function InsertPerson() {
  const { Option } = Select;
  const formRef = useRef();
  const onReset = () => {
    formRef.current.resetFields();
  };
  const onFinish = (value) => {
    addEmployeeApi(value).then(
      (data)=>{
        if (data.code === 1) {
          message.success('添加成功！');
        }else if (data.code === 0) {
          message.error('操作失败！');
        }
      }
    );
  }
  return (
    <Card
      style={{
        minWidth: '60%',
        minHeight: '60%',
      }}

      title='请填写员工信息'
    >
      <Form ref={formRef}
        onFinish={onFinish}
        labelCol={{ span: 6, }}
        wrapperCol={{ span: 14, }}
        layout='horizontal'
        style={{ maxWidth: 600 }}>
        <Form.Item name={'employeeID'} label="员工号" required>
          <Input />
        </Form.Item>
        <Form.Item name='name' label="姓名" required>
          <Input />
        </Form.Item>
        {/* <Form.Item name={'birthday'} label='生日' required>
          <DatePicker />
        </Form.Item> */}
        <Form.Item
          name="gender"
          label="性别"
          required
        >
          <Select placeholder="请选择性别">
            <Option value="1">男</Option>
            <Option value="0">女</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="phone"
          label="手机号码"

        >
          <Input
            style={{
              width: '100%',
            }}
          />
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
          <Select>
            <Select.Option value="HA">HA</Select.Option>
            <Select.Option value="FAT">FAT</Select.Option>
            <Select.Option value="BAT">BAT</Select.Option>
            <Select.Option value="AT">AT</Select.Option>
          </Select>
        </Form.Item>
        {/* <Form.Item
        name="intro"
        label="备注"
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item> */}
        
          <Form.Item style={{float: 'left'}}>
            <Button htmlType="button" danger  onClick={onReset}>重置</Button>
          </Form.Item>
          <Form.Item style={{float: 'right'}}>
            <Button htmlType="submit" type='primary'  >提交</Button>
          </Form.Item>
      </Form>
    </Card>
  )
}
