import React, { useState } from 'react';
import { UserOutlined, LogoutOutlined, CustomerServiceOutlined, MessageOutlined, ShopOutlined, CommentOutlined, UnorderedListOutlined, OrderedListOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import type { MenuProps, MenuTheme } from 'antd/es/menu';
import { Outlet, useNavigate } from 'react-router-dom';
import Login from './pages/login/Login';
import { clearToken, hasToken } from './utils/tokenUtil';

type MenuItem = Required<MenuProps>['items'][number];

const { Header, Content, Footer, Sider } = Layout;
function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const menuItems: MenuItem[] = [
  getItem('服务分类管理', 'category', <UnorderedListOutlined />, [
    getItem('衣服', 'clothes'),
    getItem('鞋帽', 'shoes'),
    getItem('箱包', 'luggage'),
    getItem('窗帘大物', 'curtain'),
    getItem('沙发床垫', 'sofa'),
  ]),
  getItem('用户管理', 'userManagement', <UserOutlined />),
  getItem('订单管理', 'order', <OrderedListOutlined />, [
    getItem('进行中', 'on_process'),
    getItem('已完成', 'complete'),
    getItem('精选订单', 'selected_order')
  ]),
  getItem('评价管理', 'comment', <CommentOutlined />),
  getItem('通知信息管理', 'notice', <MessageOutlined />),
  getItem('店铺维护', 'shop',<ShopOutlined />),
  getItem('管理员通道', 'administrator', <CustomerServiceOutlined />),
];


const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(
    (): boolean=>{
      return hasToken();
    }
  );
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  let logout = (): void=>{ 
    clearToken(); 
    setIsLogin(false);
  }
  let onSelect = ({key}: {key: string}):void=>{
    navigate(key);    
  }
  return (
    isLogin? 
    <Layout
      style={{minHeight: '100vh'}}
    >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{height: '3rem', width: '80%', margin: '1rem auto', backgroundColor: 'gray'}} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['shop']}
          items={menuItems}
          onSelect={onSelect}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, position: 'relative'}}>
          <Button onClick={logout} type='primary' icon={<LogoutOutlined />} style={{position: "absolute", right: "5rem", top: "1rem"}}>退出</Button>
        </Header>
        <Content style={{ margin: '24px 16px 0'}}>
          <div style={{ padding: 24, minHeight: '100%', background: colorBgContainer }}>
            <Outlet/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>衣物洗护小程序后台</Footer>
      </Layout>
    </Layout>: <Login getChange={(bol: boolean)=>{setIsLogin(bol)}} />
  );
};

export default App;
