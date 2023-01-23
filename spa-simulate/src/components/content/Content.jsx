import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { root } from '../..';

export default function Content(props) {
  const location = useLocation()
  function didUnmount() {
    root.unmount();
  }
  useEffect(
    ()=>{
      console.log('组件挂载');
      return ()=>{
        console.log('组件卸载了')
      }
    }, []
  );

  return (
    <div >
      新闻：{location.state.name}
      <button onClick={didUnmount} >点击卸载组件</button>

    </div>
  )
}
