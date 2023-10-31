import React from 'react';
import { Button, Checkbox, Flex, Form, Input } from 'antd';
import User from '../../types/User';
import { loginApi } from '../../api/login';
import { setToken } from '../../utils/tokenUtil';
import { useNavigate } from 'react-router-dom';

type childProps = {
  getChange: Function,
}

const Login: React.FC<childProps> = (props) => {
  let {getChange} = props;
  const onFinish = (values: User) => {
    loginApi(values).then(
      (resolve: any) => {
        console.log('success', resolve);
        setToken(resolve.token);
        getChange(true);
      },
      (reason) => {
        console.log('fail', reason);
      }
    );
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  return (<div
    style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Form
      name="basic"
      labelCol={{ span: 8 }} // 标签跨距
      wrapperCol={{ span: 16 }} // 表单内容跨距
      initialValues={{ remember: true }} //
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>记住登录状态</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  </div>
  )
};

export default Login;