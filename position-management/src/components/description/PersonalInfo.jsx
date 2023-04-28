import { Descriptions } from 'antd';
import React from 'react';


const PersonalInfo = (props) => {
    const { employee } = props;
    return (
        <Descriptions bordered>
        <Descriptions.Item label="姓名" span={2}>{employee.name}</Descriptions.Item>
        <Descriptions.Item label="员工号" span={2}>{employee.id}</Descriptions.Item>
        <Descriptions.Item label="部门" span={2}>{employee.departmentName}</Descriptions.Item>
        <Descriptions.Item label="岗位" span={2}>{employee.position}</Descriptions.Item>
        <Descriptions.Item label="联系方式" span={3}>{employee.phone}</Descriptions.Item>
       {/*  <Descriptions.Item label="岗位工龄" span={3}>15年</Descriptions.Item>
        <Descriptions.Item label="乘务英语" span={3}>三级</Descriptions.Item> */}
    </Descriptions>
    ) 
};
export default PersonalInfo;