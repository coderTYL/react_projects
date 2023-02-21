import { Space, Table, Tag } from 'antd';
import { useReducer } from 'react';
import React from 'react';
import Add from './components/add/Add';
import Minus from './components/minus/Minus';
import './App.css';

const columns = [
  {
    title: '商品',
    dataIndex: 'name',
    key: 'name',
    
  },
  {
    title: '数量',
    dataIndex: 'count',
    key: 'count',
  },
  {
    title: '产地',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Add commodity={record}/>
        {record.count}
        <Minus commodity={record} />
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: '鼠标',
    count: 32,
    address: '广东深圳',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: '显示器',
    count: 42,
    address: '浙江杭州',
    tags: ['loser'],
  },
  {
    key: '3',
    name: '电源',
    count: 32,
    address: '江苏舟山',
    tags: ['cool', 'teacher'],
  },
];

const commodityReducer = (preState, action)=>{
  let {type} = action;
  switch (type) {
    case 'add':
     return ++ preState;
  
    case 'minus':
      return  -- preState;
    default : return preState;
  }
}

/* const init = (commodity)=>{
  let {key, name, count, address, tags} = commodity;
  return {
    key,
    name,
    count,
    address,
    tags
  }
} */

export const dataContext = React.createContext();

export default function App() {
  
  let array = useReducer(commodityReducer, data);
  return (
    <dataContext.Provider value={array}>
      <Table columns={columns} dataSource={array[0]} />
    </dataContext.Provider>
  );

};