import {
  Button,
  Checkbox,
  Form,
  Input,
  message,
} from 'antd';
import { registerApi } from '../../api/registerApi';
import { useNavigate } from 'react-router-dom';


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Register = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    registerApi(
      {
        employeeID: values.employeeID,
        name: values.name,
        password: values.password,
      }
    ).then(
      (data)=>{
        if (data.code === 1) {
          message.success('注册成功，返回登录页面！', 2);
          navigate('/login');
        }else {
          message.error('注册失败！请联系系统管理员！');
        }
      }
    )
  };
  
  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      style={{
        maxWidth: 800,
        minWidth: 400
      }}
      scrollToFirstError
    >
      <Form.Item
        name="employeeID"
        label="员工号"
        rules={[
          {
            type: 'string',
            len: 6,
            message: '您输入的员工号无效',
          },
          {
            required: true,
            message: '请输入员工号！',
          },
        ]}
      >
        <Input />
      </Form.Item>
          <Form.Item
            name="name"
            label="名称"
            
            rules={[
              {
                type: 'string',
              },
              {
                required: true,
                message: '请输入用户名！',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: '请输入登录密码！',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="确认密码"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: '请再次输入密码！',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('密码不一致！'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('请仔细阅读使用协议，并点击同意！')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          同意 <a href="">使用协议</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          注册
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Register;