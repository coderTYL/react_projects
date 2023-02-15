import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useRef } from 'react';
import './login.css'


export default function Login(props) {
    let userNameInput = useRef();
    let passwordInput = useRef();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const login = ()=>{
        let request = new Request('http://localhost:8080/cooking-assistant/login', {
            method: 'POST',
            body: `${userNameInput.current.value}`
        });
        
        fetch(request).then(
            (response)=>{response.json()}
        ).then(
            (res)=>{
                props.getAccountInfo(res);
            }
        );
    };
    console.log(userNameInput)
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
                        message: '请输入您的用户名！',
                    },
                ]}
            >
                <Input ref={userNameInput} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: '请输入您的密码！',
                    },
                ]}
            >
                <Input ref={passwordInput}
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="密码"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住我</Checkbox>
                </Form.Item>

                {/* <a className="login-form-forgot" href="">
                    Forgot password
                </a> */}
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" onClick={login}>
                    Log in
                </Button>
                {/* Or <a href="">register now!</a> */}
            </Form.Item>
        </Form>
    );
}


