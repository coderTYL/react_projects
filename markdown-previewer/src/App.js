import { Button } from 'antd';
import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [content, setContent] = useState('something');
  let handleEdit = (event) => {
    setContent(event.target.value);
  }
  let changeStyle = ()=>{
    /* 点击切换区域为全屏 */
  }
  return (
    <div id='container'>
      <section id='section1'>
        <header>
          <p>Editor</p>
          <Button onClick={changeStyle}>+</Button>
        </header>
        <hr/>
        <textarea id='editor' value={content} onChange={handleEdit}></textarea>
      </section>
      <section id='section2'>
        <header>
          <p>Previewer</p>
        </header>
        <hr/>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/marked/4.2.12/marked.min.js'></script>
        <div id='previewer'>预览区</div>
      </section>
    </div>
  )
}
