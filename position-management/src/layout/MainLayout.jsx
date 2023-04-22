import { Breadcrumb, Button, Layout, Menu, Space, theme } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserAddOutlined, FileSearchOutlined, OrderedListOutlined, LogoutOutlined, WarningOutlined, HomeOutlined, EditOutlined, UnorderedListOutlined } from '@ant-design/icons';
import '../styles/mainLayout.css';
import { useNavigate, useRoutes } from 'react-router-dom';
import { fetchDimensionsApi } from '../api/fetchDimensionsApi.js';
import logo from '../assets/南航双图标.png';
import { clearToken, hasToken } from '../utils/tokenUtil';

const { Header, Content, Sider } = Layout;

/**
 * 
 * @param {标签名} label 
 * @param {以路径作为菜单key} key 
 * @param {图标} icon 
 * @param {子菜单} children 
 * @param {类型} type 
 * @returns 
 */
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const MainLayout = (props) => {
    const navigate = useNavigate();
    const { pathname} = useLocation();
    const [dimensionItems, setDimensionItems] = useState([]);
    useEffect(
        () => {
            fetchDimensionsApi().then(
                (data) => {
                    let array = data.data.map(
                        (element) => {
                            return getItem(element.name, `/${element.id}`);
                        }
                    )
                    setDimensionItems(array);
                    props.fetchDimensionItems(data.data);
                }
            )
        }, []
    );

    const menuItems =
        [
            getItem('首页', '/welcomePage', <HomeOutlined />),
            getItem(
                '员工管理',
                '/manage',
                <EditOutlined />,
                [
                    getItem(
                        '查看',
                        '/list',
                        <UnorderedListOutlined />
                    ),
                    getItem(
                        '添加人员',
                        '/insertPerson',
                        <UserAddOutlined />
                    ),
                ]
            ),
            getItem(
                '维度检索',
                '/dimension',
                <OrderedListOutlined />,
                dimensionItems

            ),
            getItem(
                '事件管理',
                '/event',
                <FileSearchOutlined />
            ),
            getItem(
                '预警信息',
                '/warning',
                <WarningOutlined />

            ),


        ];
    const [isLogin, setIsLogin] = useState(hasToken());

    let menuNavigate = (data) => {
        let path = data.keyPath.reverse().join('')
        navigate(`/home${path}`);
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
    const signOut = () => {
        clearToken();
        setIsLogin(false);
    }

    return isLogin ? (
        <Layout style={{ minHeight: '100vh' }}>
            <Header className="header" style={{
                backgroundColor: 'white',

            }}>
                <Space size={'large'}>
                    <div className="logo" style={{
                        float: 'left',
                        margin: 'auto',
                    }}>
                        <img src={logo} alt="logo" width={'200vm'} />
                    </div>
                    <h1 style={{fontWeight: 'bold'}}>客 舱 部 乘 务 岗 位 管 理 系 统</h1>
                </Space>
                <Space style={{ float: 'right' }} >
                    欢迎! 管理员
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
                        defaultSelectedKeys={[pathname]}
                        /* selectedKeys={[pathname]} */
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
    ) : <Navigate to={'/login'} />
};
export default MainLayout;