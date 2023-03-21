import { Button } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import {FullscreenOutlined, FullscreenExitOutlined} from '@ant-design/icons';
import './App.css';

export default function App() {
  const [content, setContent] = useState('something');
  let editor = useRef();
  let handleEdit = (event) => {
    setContent(event.target.value);
  }
  let changeStyle = ()=>{
    /* 点击切换区域为全屏 */
    
  }
  useEffect(
    ()=>{
      let myScript = document.createElement('script');
      myScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/marked/4.2.12/marked.min.js';
      myScript.async = false;
      document.body.appendChild(myScript);
      return ()=>{
        document.body.removeChild(myScript);
      };
    }, []
    );
    console.log();
      
      return (
        <div id='container'>
      <section id='section1' ref={editor}>
        <header>
          <p>Editor</p>
          <Button onClick={changeStyle}><FullscreenOutlined/></Button>
        </header>
        <hr/>
        <textarea id='editor' value={content} onChange={handleEdit}></textarea>
      </section>
      <section id='section2'>
        <header>
          <p>Previewer</p>
        </header>
        <hr/>
        <div id='previewer'>{content}</div>
      </section>
    </div>
  )
}
