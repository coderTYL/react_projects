import { Button, Card, Space } from 'antd';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import PersonalInfo from '../../components/description/PersonalInfo';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { fetchEmployeeApi } from '../../api/fetchEmployeeApi';

const GaugeChartContainer = lazy(() => { return import('../../components/charts/GaugeChartContainer')});
const LineChartContainer = lazy(() => { return import('../../components/charts/LineChartContainer')});

export default function DashBoard() {
  let location = useLocation();
  let strForFetch = location.state;
  console.log(strForFetch);
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({}) ;

  useEffect(
    ()=>{
      let employeeStr = {
        strForFetch,
      }
      fetchEmployeeApi(employeeStr).then(
        (data)=>{
          setEmployee(data.data);
        }
      )
    },[]
  );
  /* const { Meta } = Card; */
  let showPersonalDetail = () => {
    navigate('/home/manage/personalDetail', { state: employee });
  };
  return (
    <Suspense fallback={<Loading />}>
      <Space direction='vertical' style={{ width: '100%', height: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
        <Space direction='column' style={{ width: '100%', height: '100%', justifyContent: 'space-around', alignItems: 'center'  }}>
          {/* <Card
            hoverable
            cover={<img src=' ' alt='证据照' />}
            actions={[
              <Button type='text' onClick={showPersonalDetail}> 查看简历 </Button>
            ]}
          >
            <Meta title='姓名' description='胜任力分值' />
          </Card> */}
          {/* <GaugeChartContainer competency={employee.competency} /> */}
        </Space>
          <PersonalInfo employee={employee}/>
        <LineChartContainer scores={employee.scores}/>
      </Space>
    </Suspense>
  )
}
