import { 
    ScheduleOutlined, 
    SettingOutlined, 
    UserOutlined, 
    UserDeleteOutlined, 
    EditOutlined, 
    HeartOutlined, 
    TableOutlined,
    HomeOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import MyNavLink from '../../components/myNavLink/MyNavLink';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('烹饪计划', 'sub1', <MyNavLink to={'/schedule'} children={<ScheduleOutlined />} />),
  getItem('个人', 'sub2', <UserOutlined/>, 
  [
    getItem('我的主页', '5', <MyNavLink to={'/home'} children={<HomeOutlined />} />),
    getItem('设置', 'sub3', <MyNavLink children={<SettingOutlined />} />, 
    [
        getItem('修改密码', '6', <MyNavLink children={<EditOutlined />} />), 
        getItem('注销账户', '7', <MyNavLink children={<UserDeleteOutlined />} />)
    ]),
    getItem('菜品收藏', '8', <MyNavLink to={'/favorites'} children={<HeartOutlined />} /> ),
  ]),
  getItem('全部菜品', 'sub4', <MyNavLink to={'/dishes'} children={ <TableOutlined />} />),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
export default function MyMenu (){
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      theme='dark'
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      items={items}
    />
  );
}