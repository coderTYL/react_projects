import React, { ElementType, lazy } from 'react';
import { HomeOutlined, UnorderedListOutlined, SettingOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const items: MenuProps['items'] = [
  {
    key: 'welcomePage',
    icon: <HomeOutlined />,
    label: '欢迎页'
  },
  {
    key: 'bookList',
    icon: <UnorderedListOutlined />,
    label: '图书'
  },
  {
    key: 'user',
    icon: <UserOutlined />,
    label: '用户',
    children: [
      {
        key: 'notification',
        icon: <NotificationOutlined />,
        label: '消息'
      },
      {
        key: 'config',
        icon: <SettingOutlined />,
        label: '个人设置'
      }
    ]
  }
]



const Home: React.FC = () => {
  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = (e) => {
    let path = e.keyPath.reverse().join('/');
    navigate(path);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{minWidth:"100vw", minHeight:'100vh'}}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['welcomePage']}
            defaultOpenKeys={['welcomePage']}
            style={{ height: '100%', borderRight: 0 }}
            items={items}
            onClick={onClick}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;