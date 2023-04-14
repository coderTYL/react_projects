import * as echarts from 'echarts/core';
import { GridComponent, DatasetComponent,TooltipComponent, LegendComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

import React, { useEffect } from 'react'

export default function LineChartContainer() {
    useEffect(
        () => {
            echarts.use([DatasetComponent,TooltipComponent, GridComponent,LegendComponent, LineChart, CanvasRenderer, UniversalTransition]);
            let chartDom = document.querySelector('.lineContainer');
            let lineChart = echarts.init(chartDom);
            lineChart.setOption(
                {
                    //'工作作风', '标准落实', '运行管理', '特情处置', '传帮带', '重点工作推进'
                    legend: {},
                    tooltip: {},
                    dataset: {
                        source: [
                            ["month","工作作风","标准落实","运行管理","特情处置","传帮带","重点工作推进"],
                            ["January",100, 100, 100, 100,100,100],
                            ["February",120,101, 110, 120,105,110],
                            ["March",95,100, 108, 120,105,110],
                            ["April",120,101, 110, 120,105,110],
                            ["May",120,101, 110, 120,105,110],
                            ["June",120,101, 110, 120,105,110],
                            ["July",120,101, 110, 120,105,110],
                            ["August",120,101, 110, 120,105,110],
                            ["September",120,101, 110, 120,105,110],
                            ["October",120,101, 110, 120,105,110],
                            ["November",120,101, 110, 120,105,110],
                            ["December",120,101, 110, 120,105,110],
                            
                        ]
                    },
                    xAxis: {
                        type: 'category',
                        axisTick: {
                            show: true,
                            alignWithLabel: true,
                        },
                        
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
