import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import '../../styles/login.css';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../api/loginApi';

const Login = () => {
  const navigate = useNavigate();
  let register = () => { navigate('/register') };
  const onFinish = (values) => {
    let josnValues = JSON.stringify(values);
    loginApi(josnValues).then(
      (data) =>{
        if (data) {
          message.success('登录成功', 2, ()=>{navigate('/home')});
        }else {
          message.error('登录失败', 2, ()=>{navigate('/')});
        }
      }
    );
  }
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
            message: '用户名不可为空',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '密码不可为空',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>
        <Button className="login-form-register" type='link' onClick={register}>注册管理员</Button>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Login;