import React, { useEffect } from 'react';
import { Layout, Space } from 'antd';
import * as echarts from 'echarts/core';
import {
    ToolboxComponent,
    ToolboxComponentOption,
    LegendComponent,
    LegendComponentOption
} from 'echarts/components';
import { PieChart, PieSeriesOption } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

type EChartsOption = echarts.ComposeOption<
    ToolboxComponentOption | LegendComponentOption | PieSeriesOption
>;

const { Header, Footer, Content } = Layout;
const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    width: '70%',
    minHeight: '60vh',
    lineHeight: '70vh',
    color: '#ffffff',
    backgroundColor: '#ffffff',
};


const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    height: 64,
    color: '#fff',
    backgroundColor: '#7dbcea',
};

const WelcomePage: React.FC = () => {
    let option: EChartsOption = {
        legend: {
            top: 'bottom'
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [
            {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [50, 250],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                    borderRadius: 8
                },
            }
        ],
        dataset: {
            source: [
                /* { value: 40, name: 'rose 1' },
                    { value: 38, name: 'rose 2' },
                    { value: 32, name: 'rose 3' },
                    { value: 30, name: 'rose 4' },
                    { value: 28, name: 'rose 5' },
                    { value: 26, name: 'rose 6' },
                    { value: 22, name: 'rose 7' },
                    { value: 18, name: 'rose 8' } */
            ]
        }
    };
    useEffect(
        () => {
            echarts.use([
                ToolboxComponent,
                LegendComponent,
                PieChart,
                CanvasRenderer,
                LabelLayout
            ]);
            var chartDom = document.getElementById('chartContainer')!;
            var myChart = echarts.init(chartDom);
            myChart.setOption(option);
        }, []
    );

    return (
        <Space direction="vertical" style={{ width: '100%', minHeight: '100%' }} size={[0, 48]}>
            <Layout>
                <Header style={headerStyle}>Header</Header>
                <Content id='chartContainer' style={contentStyle}></Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Space>
    )
}
export default WelcomePage;