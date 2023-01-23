
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, theme } from 'antd';
import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { elements } from './routes';
import 'antd/dist/reset.css';
import './App.css';
import MyMenu from './layouts/menu/MyMenu';


const { Header, Sider, Content } = Layout;

export default function App() {
  const element = useRoutes(elements);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" > pic </div>
        <MyMenu />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          展示图片
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {element}
        </Content>
        <footer> 一些说明 </footer>
      </Layout>
    </Layout>
  );
}