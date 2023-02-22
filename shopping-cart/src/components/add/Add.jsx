import React, { useContext } from 'react'
import { dataContext } from '../../App'
import {PlusOutlined} from '@ant-design/icons';

export default function Add(props) {
    let velue = useContext(dataContext);
    let changeCount = ()=>{
        
    };
  return (
    <button onClick={changeCount}><PlusOutlined /></button>
  )
}
