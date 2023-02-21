
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, theme, Divider } from 'antd';
import React, { useContext, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { elements } from '../../routes/homeRoutes';
import 'antd/dist/reset.css';
import './home.css';
import MyMenu from '../../layouts/menu/MyMenu';
import { loginContext } from '../../App';


const { Header, Sider, Content } = Layout;

export default function Home() {
  let account = useContext(loginContext);
  const element = useRoutes(elements);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div id='components-layout-demo-custom-trigger'>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" > pic </div>
          <Divider />
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
            展示图片{account.userName}
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
    </div>
  );
}