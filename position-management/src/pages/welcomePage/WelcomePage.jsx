import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import '../../styles/welcomePage.css';
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
  const navigate = useNavigate();
  const addEvent = () => {  
    navigate('/home/addEvent');
  }
  return (
    <div id='homeContainer'>
      <Space id='images'>
        <div id='imageFrame'>
          <img src=" " alt="风采展示" />
        </div>
        <div id='imageFrame'>
          <img src=" " alt="风采展示" />
        </div>
        <div id='imageFrame'>
          <img src=" " alt="风采展示" />
        </div>
      </Space>
      <article id='instruction'>
        <h1>使用说明：</h1>
        <p>1. 请先将需要管理的员工添加至系统中。</p>
        <p>2. 该系统中存在部分功能未上线。如：管理员密码修改、员工图片上传等。</p>
      </article>
      <Button type='primary' size='large' shape='round' onClick={addEvent}>
        <PlusOutlined /> 添加事件
      </Button>
    </div>
  )
}
