import { Button, Card, Space, Table } from 'antd';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import PersonalInfo from '../../components/description/PersonalInfo';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import { fetchEmployeeApi } from '../../api/fetchEmployeeApi';

const GaugeChartContainer = lazy(() => { return import('../../components/charts/GaugeChartContainer') });
const LineChartContainer = lazy(() => { return import('../../components/charts/LineChartContainer') });

export default function DashBoard() {
  let location = useLocation();
  let strForFetch = location.state;
  const [employee, setEmployee] = useState();
  const navigate = useNavigate();
  useEffect(
    () => {
      let employeeStr = {
        strForFetch,
      }
      fetchEmployeeApi(employeeStr).then(
        (data) => {
          setEmployee(data.data);
        }
      )
    }, []
  );
  /* const { Meta } = Card; */
  let showPersonalDetail = () => {
    navigate('/home/manage/personalDetail', { state: employee });
  };
  const columns = [
    {
      title: '事件编号',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      width: '25%',
    },
    {
      title: '日期',
      dataIndex: 'dateOfOccurrence',
      key: 'dateOfOccurrence',
      align: 'center',
      width: '15%',
    },
    {
      title: '概述',
      dataIndex: 'description',
      key: 'description',
      align: 'center',
    }
  ]
  return (
    <Suspense fallback={<Loading />}>
      <Space direction='vertical' style={{ width: '100%', height: '100%'}}>
        {employee ?
          <>
            <PersonalInfo employee={employee} />
            <LineChartContainer scores={employee.scores} />
            <Card title='个人事件'>
              <Table columns={columns}
                dataSource={
                  employee.events.map(
                    (event) => {
                      return {
                        ...event,
                        key: event.id,
                      }
                    }
                )}
                pagination={{ pageSize: 2 }} />
            </Card>
          </>
          : null}
      </Space>
    </Suspense>
  )
}
