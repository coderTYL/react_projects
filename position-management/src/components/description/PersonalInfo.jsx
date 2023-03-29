import { Descriptions } from 'antd';


const PersonalInfo = () => (
    <Descriptions bordered>
        <Descriptions.Item label="姓名" span={3}>李</Descriptions.Item>
        <Descriptions.Item label="员工号" span={3}>200000</Descriptions.Item>
        <Descriptions.Item label="岗位" span={3}>乘务长</Descriptions.Item>
        <Descriptions.Item label="岗位工龄" span={3}>15年</Descriptions.Item>
        <Descriptions.Item label="乘务英语" span={3}>三级</Descriptions.Item>
    </Descriptions>
);
export default PersonalInfo;