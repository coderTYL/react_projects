import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import React from 'react';
import {LogoutOutlined, WarningOutlined, HomeOutlined, EditOutlined, UnorderedListOutlined} from '@ant-design/icons';
import '../styles/mainLayout.css';

const { Header, Content, Sider } = Layout;

const menuItems = [
    {
        key: 'home',
        icon: <HomeOutlined />,
        label: '首页'
    },
    {
        key: '1',
        icon: <EditOutlined />,
        label: '管理',
        children: [
            {
                key: 'c1',
                icon: <UnorderedListOutlined />,
                label: '查看'
            }
        ]
    },
    {
        key: '2',
        icon: <WarningOutlined />,
        label: '预警'
    }

];
const MainLayout = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Header className="header">
                <div className="logo" style={{
                    float: 'left',
                    width: '120px',
                    height: '31px',
                    margin: '16px 24px 16px 0',
                    background: 'rgba(255, 255, 255, 0.3)'
                }} />
                <div style={{float: 'right'}} >
                    欢迎
                    <Button type="primary" >
                    <LogoutOutlined />
                    </Button>
                </div>
            </Header>
            <Layout>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={menuItems}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                        separator=">"
                        items={[
                            {
                                title: 'Home',
                            },
                            {
                                title: 'Application Center',
                                href: '',
                            },
                            {
                                title: 'Application List',
                                href: '',
                            },
                            {
                                title: 'An Application',
                            },
                        ]}
                    />
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default MainLayout;