import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import '../../styles/home.css';

export default function Home() {
  const addEvent = () => {
    console.log('add event')
  }
  return (
    <div id='homeContainer'>
      <div id='images'>
        <div id='imageFrame'>
          <img src=" " alt="风采展示" />
        </div>
        <div id='imageFrame'>
          <img src=" " alt="风采展示" />
        </div>
        <div id='imageFrame'>
          <img src=" " alt="风采展示" />
        </div>
      </div>
      <article id='instruction'>
        <h1>使用说明：</h1>
        <p>..................</p>
      </article>
      <Button type='primary' size='large' shape='round' onClick={addEvent}>
        <PlusOutlined /> 添加事件
      </Button>
    </div>
  )
}
