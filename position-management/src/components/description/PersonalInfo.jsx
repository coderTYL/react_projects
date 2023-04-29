import { Descriptions } from 'antd';
import React from 'react';


const PersonalInfo = (props) => {
    const { employee } = props;
    let level = '基本胜任';
    if (employee.competency < 100) {
        level = '待提高';
    }else if (employee.competency > 100) {
        level = '完全具备胜任力';
    }
    return (
        <Descriptions bordered>
        <Descriptions.Item label="姓名" span={1.5} style={{alignContent: 'center'}}>{employee.name}</Descriptions.Item>
        <Descriptions.Item label="员工号" span={1.5}>{employee.id}</Descriptions.Item>
        <Descriptions.Item label="部门" span={1.5}>{employee.departmentName}</Descriptions.Item>
        <Descriptions.Item label="岗位" span={1.5}>{employee.position}</Descriptions.Item>
        <Descriptions.Item label="联系方式" span={3}>{employee.phone}</Descriptions.Item>
        <Descriptions.Item label="胜任力指数" span={3}>{employee.competency}</Descriptions.Item>
        <Descriptions.Item label="胜任力等级" span={3}>{level}</Descriptions.Item>
       {/*  <Descriptions.Item label="岗位工龄" span={3}>15年</Descriptions.Item>
        <Descriptions.Item label="乘务英语" span={3}>三级</Descriptions.Item> */}
    </Descriptions>
    ) 
};
export default PersonalInfo;