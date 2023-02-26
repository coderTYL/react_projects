import { Space, Table, Tag } from 'antd';
import React, { useReducer } from 'react';
import Delete from './components/delete/Delete'
import Add from './components/add/Add'
import Minus from './components/minus/Minus'
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
    title: '价格',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Add record={record} />
        <Minus record={record} />
        <Delete record={record} />
      </Space>
    ),
  }
];
const data = [
  {
    key: 'mouse',
    name: '鼠标',
    count: 1,
    address: '广东深圳',
    tags: ['nice', 'developer'],
    price: 150
  },
  {
    key: 'monitor',
    name: '显示器',
    count: 1,
    address: '浙江杭州',
    tags: ['loser'],
    price: 2000
  },
  {
    key: 'power',
    name: '电源',
    count: 1,
    address: '江苏舟山',
    tags: ['cool', 'teacher'],
    price: 500
  },
];

export const dispatchContext = React.createContext();
export default function App() {
  let getSum = function sum(data) {
    let total = 0;
    data.forEach(element => {
      total += element.count * element.price;
    });
    return total;
  }
  function eReducer(elements, action) {
    switch (action.type) {
      case 'delete':
        let elementsAfterFilter = elements.filter(
          (element)=>{
            return action.payload !== element.key
          }
        );
        return elementsAfterFilter;
      case 'add':
        let elementsAfterAdd = elements.map(
          (element)=>{
            if (action.payload === element.key) {
              ++ element.count;
            }
            return element;
          }
        );
        return elementsAfterAdd;
      case 'minus':
        let elementsAfterMinus = elements.map(
          (element)=>{
            if (action.payload === element.key) {
              -- element.count;
            }
            return element;
          }
        );
        return elementsAfterMinus;
      default: return elements;
    }
  }
  let [elements, dispatch] = useReducer(eReducer, data);
  return (
    <div>
      <dispatchContext.Provider value={dispatch}>
      <Table columns={columns} dataSource={elements} />
      <ul style={{ listStyleType: 'none' }} >
        <li>总 价</li>
        <hr />
        <li>{getSum(elements)}</li>
      </ul>
      </dispatchContext.Provider>
    </div>
  );

};