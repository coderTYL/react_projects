import './App.css';
import React from 'react'
import { Button, Space } from 'antd';
import { TwitterOutlined, WechatOutlined } from '@ant-design/icons';
import Quote from './components/quote/Quote';
import Author from './components/author/Author';
import { useDispatch, useSelector } from 'react-redux';
import { retrieval, discolour } from './redux/quoteIndexSlice';

export default function App() {
  const quoteIndex = useSelector((state) => { return state.quoteIndex.value });
  const currentColor = useSelector((state)=>{ return state.quoteIndex.color});
  const dispatch = useDispatch();
  let changeIndex = () => {
    let currentIndex = Math.round(Math.random() * 6);
    let colors = ['red', 'orangered', 'blue', 'chocolate', 'gray', 'grrenyellow', 'lightblue']
    dispatch(retrieval(currentIndex));
    dispatch(discolour(colors[currentIndex]));
  }
  return (
    <div id='container' style={{ backgroundColor: currentColor }}>
      <div id='quote-box'>
        <div id='expoArea'>
          <Quote id='text' index={quoteIndex} currentColor={currentColor}/>
          <br />
          <Author id='author' index={quoteIndex} currentColor={currentColor}></Author>
        </div>
        <div id='buttonArea' >
          <Space>
            <Button icon={<TwitterOutlined />} href={'twitter.com/intent/tweet'} target={'_blank'}></Button>
            <Button icon={<WechatOutlined />}></Button>
            <Button id='new-quote' onClick={changeIndex} style={{ color: 'white', backgroundColor: currentColor}}>new quote</Button>
          </Space>
        </div>
      </div>
      <p>by coderX3</p>
    </div>
  )
}
