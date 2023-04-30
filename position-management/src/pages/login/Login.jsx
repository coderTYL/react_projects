import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Space, message } from 'antd';
import '../../styles/login.css';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../../api/loginApi';
import { setToken } from '../../utils/tokenUtil';
import image from '../../assets/南航双图标.png';

const Login = () => {
  const navigate = useNavigate();
  let register = () => { navigate('/register') };
  const onFinish = (values) => {
    loginApi(values).then(
      (data) =>{
        if (data.code === 1) {
          setToken(data.token);
          message.success('登录成功', 2, ()=>{navigate('/home', {state: data.data.name})});
        }else {
          message.error(data.message || '管理员工号错误', 2, ()=>{navigate('/')});
        }
      }
    );
  }
  return (
    <Space direction='vertical'>
    <img src={image} alt='图标' style={{width: '30rem'}} />
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
    </Space>
  );
};
export default Login;