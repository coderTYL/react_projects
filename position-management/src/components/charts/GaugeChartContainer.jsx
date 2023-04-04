import * as echarts from 'echarts/core';
import { GaugeChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import React, { useEffect } from 'react'

export default function GaugeChartContainer() {
  useEffect(
    () => {
      echarts.use([GaugeChart, CanvasRenderer]);
      let gaugeChart = echarts.init(
        document.querySelector('.gaugeContainer')
      );
      gaugeChart.setOption(
        {
          series: [
            {
              type: 'gauge',
              startAngle: 180,
              endAngle: 0,
              center: ['50%', '75%'],
              radius: '90%',
              min: 0,
              max: 1,
              splitNumber: 8,
              axisLine: {
                lineStyle: {
                  width: 6,
                  color: [
                    [0.25, '#FF6E76'],
                    [0.5, '#FDDD60'],
                    [0.75, '#58D9F9'],
                    [1, '#7CFFB2']
                  ]
                }
              },
              pointer: {
                icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                length: '12%',
                width: 20,
                offsetCenter: [0, '-60%'],
                itemStyle: {
                  color: 'inherit'
                }
              },
              axisTick: {
                length: 12,
                lineStyle: {
                  color: 'inherit',
                  width: 2
                }
              },
              splitLine: {
                length: 20,
                lineStyle: {
                  color: 'inherit',
                  width: 5
                }
              },
              axisLabel: {
                color: '#464646',
                fontSize: 20,
                distance: -60,
                rotate: 'tangential',
                formatter: function (value) {
                  if (value === 0.875) {
                    return '优秀';
                  } else if (value === 0.625) {
                    return '良好';
                  } else if (value === 0.375) {
                    return '合格';
                  } else if (value === 0.125) {
                    return '不合格';
                  }
                  return '';
                }
              },
              title: {
                offsetCenter: [0, '-10%'],
                fontSize: 20
              },
              detail: {
                fontSize: 30,
                offsetCenter: [0, '-35%'],
                valueAnimation: true,
                formatter: function (value) {
                  return Math.round(value * 100) + '';
                },
                color: 'inherit'
              },
              data: [
                {
                  value: 1,
                  name: '胜任力'
                }
              ]
            }
          ]
        }
      );
      window.addEventListener('resize', function () {
        gaugeChart.resize();
      })
    }
  );

  return (
    <div
      className='gaugeContainer'
      style={{
        minWidth: '30vw',
        minHeight: '30vh',
      }}
    ></div>
  )
}
