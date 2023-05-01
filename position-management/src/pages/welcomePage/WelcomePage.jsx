import React from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import imageUrl1 from '../../assets/风采展示.jpg'

export default function WelcomePage() {
  const navigate = useNavigate();
  const addEvent = () => {  
    navigate('/home/addEvent');
  }
  return (
    <Space id='homeContainer' style={{justifyContent: 'space-around', minWidth: '100%', minHeight: '100%'}}>
      <img src={imageUrl1} alt="风采展示" style={{width: '80%', objectFit: 'contain'}} />
      <Space
        direction='vertical'
        style={{
          minWidth: '100%',
          minHeight: '100%',
          justifyContent: 'space-between'
        }}
      >
      <article id='instruction'>
        <h1>使用说明：</h1>
        <p>1. 请先将需要管理的员工添加至系统中。</p>
        <p>2. 该系统中存在部分功能未上线。如：管理员密码修改、员工图片上传等。</p>
      </article>
      <Button type='primary' size='large' shape='round' onClick={addEvent}>
        <PlusOutlined /> 添加事件
      </Button>
      </Space>
    </Space>
  )
}
