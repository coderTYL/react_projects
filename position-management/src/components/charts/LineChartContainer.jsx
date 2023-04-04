import * as echarts from 'echarts/core';
import { GridComponent, DatasetComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

import React, { useEffect } from 'react'

export default function LineChartContainer() {
    useEffect(
        () => {
            echarts.use([DatasetComponent, GridComponent, LineChart, CanvasRenderer, UniversalTransition]);
            let chartDom = document.querySelector('.lineContainer');
            let lineChart = echarts.init(chartDom);
            lineChart.setOption(
                {
                    //'工作作风', '标准落实', '运行管理', '特情处置', '传帮带', '重点工作推进'
                    legend: {},
                    tooltip: {},
                    dataset: {
                        source: [
                            /* ["type","January","February","March","April","May","June","July","August","September","October","November","December"],
                            ["工作作风",100, 200, 300, 400,500,600,700,800,900,1000,1100,1200],
                            ["标准落实",200,100, 300, 200,900,600,100,800,900,1000,1100,1200],
                            ["运行管理",200,100, 300, 200,900,600,100,800,900,1000,1100,1200],
                            ["特情处置",200,100, 300, 200,900,600,100,800,900,1000,1100,1200],
                            ["传帮带",200,100, 300, 200,900,600,100,800,900,1000,1100,1200],
                            ["重点工作推进",200,100, 300, 200,900,600,100,800,900,1000,1100,1200], */
                            
                            ["type","工作作风","标准落实","运行管理","特情处置","传帮带","重点工作推进"],
                            ["January",100, 200, 300, 400,500,600],
                            ["February",200,100, 300, 200,900,600],
                            ["March",200,100, 300, 200,900,600],
                            ["April",200,100, 300, 200,900,600],
                            ["May",200,100, 300, 200,900,600],
                            ["June",200,100, 300, 200,900,600],
                            ["July",200,100, 300, 200,900,600],
                            ["August",200,100, 300, 200,900,600],
                            ["September",200,100, 300, 200,900,600],
                            ["October",200,100, 300, 200,900,600],
                            ["November",200,100, 300, 200,900,600],
                            ["December",200,100, 300, 200,900,600],
                            
                        ]
                    },
                    xAxis: {
                        type: 'category',
                    },
                    yAxis: {
                    },
                    series: [
                        {
                            type: 'line',
                            smooth: true,
                        },
                        {
                            type: 'line',
                            smooth: true,
                        },
                        {
                            type: 'line',
                            smooth: true,
                        },
                        {
                            type: 'line',
                            smooth: true,
                        },
                        {
                            type: 'line',
                            smooth: true,
                        },
                        {
                            type: 'line',
                            smooth: true
                        }
                    ]
                }
            );
            window.addEventListener('resize', function () {
                lineChart.resize();
            })
        }
    );
    return (
        <div
            className='lineContainer'
            style={{
                minWidth: '70vw',
                minHeight: '30vh',
            }}
        ></div>
    )
}
