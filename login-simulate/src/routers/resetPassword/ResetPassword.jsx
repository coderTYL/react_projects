import { Button, Form, Input } from 'antd'
import React from 'react'
import httpRequest from '../../utils/httpRequest';

export default function ResetPassword() {
    const [form] = Form.useForm();
    let onFinish = (values)=>{
        console.log(values);
        httpRequest('/resetPassword', 'POST', values).then(
            (res)=>{
                console.log(res);
            }
        ).catch(
            (error)=>{
                console.log(error);
            }
        );
    }
  return (
    <Form
        form={form}
        onFinish={onFinish}
        style={{
            width: '300px',
            position: 'absolute',
            top: '100px',
            right: 0,
            bottom: 0,
            left: 0,
            margin: 'auto'
        }}
    >
        <Form.Item
            name='name'
            label='用户名'
            rules={[
                {
                    required: true,
                    message: '请输入用户名'
                }
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name='password'
            label='新密码'
            rules={[
                {
                    required: true,
                    message: '请输入新密码'
                }
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name='confirm'
            label='确认密码'
            dependencies={['password']}
            hasFeedback
            rules={[
                {
                    required: true,
                    message: '请再次输入新密码'
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('两次输入的密码不相同！'));
                    },
                  })
            ]}
        >
            <Input />
        </Form.Item>
        <Form.Item>
            <Button type='primary' htmlType='submit'>提交</Button>
        </Form.Item>
    </Form>
  )
}
