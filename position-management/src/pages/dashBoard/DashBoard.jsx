import { Button, Card, Space } from 'antd';
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import PersonalInfo from '../../components/description/PersonalInfo';
import { useLocation, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/baseURL';

export default function DashBoard(props) {
  let location = useLocation();
  let currentEmployeeID = location.state;
  const navigate = useNavigate();
  let pieContainer = useRef();
  let barContainer = useRef();
  useEffect(
    () => {
      // 组件挂载后通过传入的 state 参数（当前查看的员工工号），发送 get 请求取回数据
      fetch(`${BASE_URL}/dashBoard`).then(
        (response)=>{return response.json();}
      ).then(
        (data)=>{
          // 此处获取到当前员工的胜任力数据
          console.log(data)
        }
      ).catch((error)=>{console.log(error);});

      let pieChart = echarts.init(pieContainer.current);
      let barChart = echarts.init(barContainer.current);
      pieChart.setOption(
        {
          
          series: [
            {
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              labelLine: {
                show: false
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '20',
                  fontWeight: 'bold'
                }
              },
              data: [
                { value: 335, name: '工作作风'},
                { value: 310, name: '标准落实' },
                { value: 234, name: '运行管理' },
                { value: 135, name: '特情处置' },
                { value: 1548, name: '传帮带' },
                { value: 1548, name: '重点工作推进' }
              ]
            }
          ]
        }
      );
      barChart.setOption(
        {
          title: {
            text: '胜任力指数'
          },
          tooltip: {},
          xAxis: {
            data: ['工作作风', '标准落实', '运行管理', '特情处置', '传帮带', '重点工作推进']
          },
          yAxis: {},
          legend: {
            orient: 'horizontal',
          },
          series: [
            {
              name: '分值',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        }
      );
      window.addEventListener('resize', function () {
        pieChart.resize();
        barChart.resize();
      });
    }, []
  );
  const { Meta } = Card;
  let showPersonalDetail = ()=>{
    navigate('/home/manage/personalDetail', {state: currentEmployeeID});
  };
  return (
    <Space direction='vertical'>
      <Space direction='column'>
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
        <div
          ref={pieContainer}
          style={{
            minWidth: '300px',
            minHeight: '300px',
          }}>
        </div>
      </Space>
      <div
      ref={barContainer}
        style={{
          minWidth: '600px',
          minHeight: '300px',
        }}>

      </div>
    </Space>
  )
}
