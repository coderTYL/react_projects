import { InputNumber, Space, Table, Tag } from 'antd';
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
    title: '价格',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Add count={record.count} />
        <InputNumber defaultValue={1} min={1} max={10} size='middle' onChange={getChangeCount} />
        <Minus count={record.count} />
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

let changeValue = 1;
const getChangeCount = (value) => {
  changeValue = value;
  console.log(changeValue);
}
export const dataContext = React.createContext(1);

/* const countReducer = (count, action) => {
  let { type } = action;
  switch (type) {
    case 'add':
      return count + changeValue;

    case 'minus':
      return count - changeValue;
    default: return count;
  }
} */

export default function App() {
  let getSum = function sum(data) {
    let total = 0;
    data.forEach(element => {
      total += element.count * element.price;
    });
    return total;
  }
  /* let [count, dispatch] = useReducer(countReducer, 0); */
  return (
    <dataContext.Provider value={changeValue}>
      <Table columns={columns} dataSource={data} />
      <ul style={{ listStyleType: 'none' }} >
        <li>总 价</li>
        <hr />
        <li>{getSum(data)}</li>
      </ul>
    </dataContext.Provider>
  );

};