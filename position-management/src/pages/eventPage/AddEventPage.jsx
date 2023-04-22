import { Form, Input, DatePicker, Button, Select, InputNumber, Space, message } from 'antd'
import { useRef } from 'react'
import Card from 'antd/es/card/Card'
import React from 'react'
import { addEventApi } from '../../api/addEventApi';
import { useNavigate } from 'react-router-dom';

export default function AddEventPage() {
    const { TextArea } = Input;
    const formRef = useRef();
    const navigate = useNavigate();
    const onReset = () => {
        formRef.current.resetFields();
    };
    const onFinish = (value)=>{

        let dateTime = value.date.format('YYYY-MM-DD');
        let event = {
            ...value,
            date: dateTime,
        }
        addEventApi(event).then(
            (data)=>{
                if (data.code === 1) {
                    message.success('添加成功！');
                    navigate(-1);
                }else {
                    message.error('数据错误，请重试！');
                }
            }
        )
    }
    
    return (
        <Card
            style={{
                minWidth: '100%',
                minHeight: '100%',
            }}

            title='添加事件信息'
        >
            <Form
                ref={formRef}
                preserve={false}
                labelCol={{ span: 6, }}
                wrapperCol={{ span: 14, }}
                layout='horizontal'
                onFinish={onFinish}
                style={{ maxWidth: 600 }}
            >
                <Form.Item name={'employeeID'} label="员工号" required>
                    <Input />
                </Form.Item>
                <Form.Item name='name' label="姓名" required>
                    <Input />
                </Form.Item>
                

                <Form.Item name={'dimensionID'} label="维度" required>
                    <Select>
                        <Select.Option value="A">工作作风</Select.Option>
                        <Select.Option value="B">标准落实</Select.Option>
                        <Select.Option value="C">运行管理</Select.Option>
                        <Select.Option value="D">特情处置</Select.Option>
                        <Select.Option value="E">传帮带</Select.Option>
                        <Select.Option value="F">重点工作推进</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item name={'typeID'} label='类型序号' required>
                    <InputNumber min={1} />
                </Form.Item>
                <Form.Item name={'date'} label='日期' required>
                    <DatePicker />
                </Form.Item>

                <Form.Item name={'description'} label="事件描述" >
                    <TextArea rows={5} />
                </Form.Item>
                <Space 
                    style={{
                        float: 'right'
                    }}
                >
                    <Form.Item>
                        <Button htmlType="button" danger onClick={onReset}>重置</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType="submit" type='primary'>提交</Button>
                    </Form.Item>
                </Space>
            </Form>
        </Card>
    )
}
