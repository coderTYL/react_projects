import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login(){
  let navigate = useNavigate()
  const resetPassword = ()=>{
    //点击忘记密码，进行密码重置
    navigate('/resetPassword');
  }

  const register = ()=>{
    // 点击注册按钮，回调函数
    navigate('/register');
  }

  const onFinish = (values) => {
    // 获取表单数据
    console.log('Received values of form: ', values);

    // 携带数据向服务器发送验证请求
    fetch('http://localhost:8080/test-server/login', {
      method: 'post',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(
      (response)=>{
        response.json();
      }
    ).then(
      (data)=>{
        console.log(data);
        // 通过响应结果判断用户登录是否成功
        
      }
    );
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Button type='link' size='small' className="login-form-forgot" onClick={resetPassword}>
          Forgot password
        </Button>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Button type='link' size='small' onClick={register}>register now!</Button>
      </Form.Item>
    </Form>
  );
};
export default Login;