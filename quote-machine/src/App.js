import './App.css';
import React from 'react'
import { Button, Space } from 'antd';
import { TwitterOutlined, WechatOutlined } from '@ant-design/icons';
import Quote from './components/quote/Quote';
import Author from './components/author/Author';
import { useDispatch, useSelector } from 'react-redux';
import { retrieval } from './redux/quoteIndexSlice';

export default function App() {
  const quoteIndex = useSelector((state)=>{return state.quoteIndex.value});
  const dispatch = useDispatch();
  let changeIndex = ()=>{
    let currentIndex = Math.round(Math.random()* 10);
    dispatch(retrieval());
  }
  /* console.log(retrieval); */
  return (
    <div id='container'>
      <div id='quote-box'>
        <div id='expoArea'>
          <Quote id='text' index={quoteIndex}/>
          <Author id='author'></Author>
        </div>
        <div id='buttonArea' >
          <Space>
          <Button icon={<TwitterOutlined />} href={'twitter.com/intent/tweet'} target={'_blank'}></Button>
            <Button icon={<WechatOutlined />}></Button>
            <Button id='new-quote' onClick={changeIndex} style={{color: 'white', backgroundColor: 'orangered'}}>new quote</Button>
          </Space>
        </div>
      </div>
      <p>by coderX3</p>
    </div>
  )
}
