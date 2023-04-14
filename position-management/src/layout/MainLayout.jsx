import { Breadcrumb, Button, Layout, Menu, Space, theme } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserAddOutlined, OrderedListOutlined, LogoutOutlined, WarningOutlined, HomeOutlined, EditOutlined, UnorderedListOutlined } from '@ant-design/icons';
import '../styles/mainLayout.css';
import { useNavigate, useRoutes } from 'react-router-dom';
import logo from '../assets/南航双图标.png';
import { clearToken, hasToken } from '../utils/tokenUtil';

const { Header, Content, Sider } = Layout;
const MainLayout = () => {
    const [menuItems, setMenuItems] = useState(
        [
            {
                key: 'welcomePage',
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
                key: 'dimension',
                icon: <OrderedListOutlined />,
                label: '维度',
                children: [

                ]

            },
            {
                key: 'warning',
                icon: <WarningOutlined />,
                label: '预警信息'
            }

        ]
    )
    const [isLogin, setIsLogin] = useState(hasToken());
    const {state} = useLocation();
    const navigate = useNavigate();
    /* useEffect(
        ()=>{
            dimensionApi().then(
                (data)=>{
                    
                }
            )
        }, [menuItems]
    ); */

    let menuNavigate = (data) => {
        let path = data.keyPath.reverse().join('/')
        navigate(`/home/${path}`);
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
        /* const last = items.indexOf(item) === items.length - 1;
        return last ? <span>{item.title}</span> : <Link to={paths.join('/')}>{item.title}</Link>; */
    }
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    /* 定义管理员退出登录方法 */
    const signOut = ()=>{
        clearToken();
        setIsLogin(false);
    }

    return isLogin? (
        <Layout style={{ minHeight: '100vh' }}>
            <Header className="header" style={{ backgroundColor: 'white' }}>
                <div className="logo" style={{
                    float: 'left',
                    margin: 'auto',
                }}>
                    <img src={logo} alt="logo" width={'200vm'} />
                </div>
                <Space style={{ float: 'right' }} >
                    欢迎{state} 
                    <Button type="primary" onClick={signOut}>
                        <LogoutOutlined />
                    </Button>
                </Space>
            </Header>
            <Layout style={{ color: 'darkBlue', background: '#1890ff' }}>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['welcomePage']}
                        
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
                        background: '#1890ff',
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
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    ): <Navigate to={'/login'} />
};
export default MainLayout;