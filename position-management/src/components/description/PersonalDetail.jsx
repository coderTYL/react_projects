import { Descriptions } from 'antd';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BASE_URL } from '../../utils/baseURL';

const PersonalDetail = () => {

  let location = useLocation();
  let currentEmployeeID = location.state;

  useEffect(
    () => {
      fetch(`${BASE_URL}/personalDetail`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(currentEmployeeID),
        }
      ).then(
        (response) => { return response.json() }
      ).then(
        (data) => {
            // 此处获取当前员工的简历数据
            console.log(data)
        }
      ).catch(
        (error) => { console.log(error);}
      );
  }
);

return (
  <Descriptions title="个人简历" bordered>
    <Descriptions.Item label="姓名">Cloud Database</Descriptions.Item>
    <Descriptions.Item label="员工号">{currentEmployeeID}</Descriptions.Item>
    <Descriptions.Item label="性别">YES</Descriptions.Item>
    <Descriptions.Item label="民族">YES</Descriptions.Item>
    <Descriptions.Item label="籍贯">YES</Descriptions.Item>
    <Descriptions.Item label="政治面貌">YES</Descriptions.Item>
    <Descriptions.Item label="出生日期">YES</Descriptions.Item>
    <Descriptions.Item label="婚姻状况">YES</Descriptions.Item>
    <Descriptions.Item label="手机号码">YES</Descriptions.Item>
    <Descriptions.Item label="邮箱">YES</Descriptions.Item>
    <Descriptions.Item label="现住址">YES</Descriptions.Item>
    <Descriptions.Item label="紧急联系人 1">YES</Descriptions.Item>
    <Descriptions.Item label="紧急联系人 2">YES</Descriptions.Item>
    <Descriptions.Item label="参加工作时间">YES</Descriptions.Item>
    <Descriptions.Item label="入职南航时间">YES</Descriptions.Item>
    <Descriptions.Item label="工作单位">YES</Descriptions.Item>
    <Descriptions.Item label="工作岗位">YES</Descriptions.Item>
    <Descriptions.Item label="职务级别">YES</Descriptions.Item>
    <Descriptions.Item label="工作经历">YES</Descriptions.Item>
    <Descriptions.Item label="教育经历">YES</Descriptions.Item>
  </Descriptions>
)
};
export default PersonalDetail;