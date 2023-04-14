import { Button, Card, Space } from 'antd';
import React, { lazy, Suspense } from 'react';
import PersonalInfo from '../../components/description/PersonalInfo';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

const GaugeChartContainer = lazy(() => { return import('../../components/charts/GaugeChartContainer') });
const LineChartContainer = lazy(() => { return import('../../components/charts/LineChartContainer') });

export default function DashBoard(props) {
  let location = useLocation();
  let currentEmployeeID = location.state;
  const navigate = useNavigate();

  const { Meta } = Card;
  let showPersonalDetail = () => {
    navigate('/home/manage/personalDetail', { state: currentEmployeeID });
  };
  return (
    <Suspense fallback={<Loading />}>
      <Space direction='vertical' style={{ width: '100%', height: '100%', justifyContent: 'space-around' }}>
        <Space direction='column' style={{ width: '100%', height: '100%', justifyContent: 'space-around' }}>
          <Card
            hoverable
            cover={<img src=' ' alt='证据照' />}
            actions={[
              <Button type='text' onClick={showPersonalDetail}> 查看简历 </Button>
            ]}
          >
            <Meta title='姓名' description='胜任力分值' />
          </Card>
          <PersonalInfo />
          <GaugeChartContainer />
        </Space>
        <LineChartContainer />
      </Space>
    </Suspense>
  )
}
