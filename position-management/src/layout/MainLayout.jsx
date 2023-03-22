import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { UserAddOutlined, LogoutOutlined, WarningOutlined, HomeOutlined, EditOutlined, UnorderedListOutlined } from '@ant-design/icons';
import '../styles/mainLayout.css';
import { useNavigate, useRoutes } from 'react-router-dom';
import { routes } from '../router/routes';

const { Header, Content, Sider } = Layout;
const menuItems = [
    {
        key: 'home',
        icon: <HomeOutlined />,
        label: '首页'
    },
    {
        key: 'manage',
        icon: <EditOutlined />,
        label: '管理',
        children: [
            {
                key: 'list',
                icon: <UnorderedListOutlined />,
                label: '查看'
            },
            {
                key: 'insertPerson',
                icon: <UserAddOutlined />,
                label: '添加人员'
            }
        ]
    },
    {
        key: 'warning',
        icon: <WarningOutlined />,
        label: '预警信息'
    }

];
const MainLayout = () => {
    const elements = useRoutes(routes);
    let navigate = useNavigate();
    let menuNavigate = (data) => {
        let path = data.keyPath.reverse().join('/')
        navigate(`/${path}`);
    }
    let BreadcrumbItems = [
        {
            path: 'index',
            title: 'home',
        },
        {
            path: 'first',
            title: 'first',
            children: [
                {
                    path: '/general',
                    title: 'General',
                },
                {
                    path: '/layout',
                    title: 'Layout',
                },
                {
                    path: '/navigation',
                    title: 'Navigation',
                },
            ],
        },
        {
            path: 'second',
            title: 'second',
        },
    ];
    function itemRender(item, params, items, paths) {
        const last = items.indexOf(item) === items.length - 1;
        return last ? <span>{item.title}</span> : <Link to={paths.join('/')}>{item.title}</Link>;
    }
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
                <div style={{ float: 'right' }} >
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
                        onClick={menuNavigate}
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
                        items={BreadcrumbItems}
                        itemRender={itemRender}
                    />
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        {elements}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default MainLayout;