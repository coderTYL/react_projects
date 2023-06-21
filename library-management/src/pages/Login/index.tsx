import React from 'react';
import { Button, Checkbox, Form, Input, Space } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const Login: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 5 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600, minWidth: '60vw' }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="用户名"
      name="username"
      rules={[{ required: true, message: '请输入用户名' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="密码"
      name="password"
      rules={[{ required: true, message: '请输入密码' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
      <Space>
      <Checkbox>记住我</Checkbox>
      <Button type="primary" htmlType="submit">
        提交
      </Button>
      </Space>
    </Form.Item>
  </Form>
);

export default Login;