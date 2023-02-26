import React, { useContext } from 'react'
import {PlusOutlined} from '@ant-design/icons';
import { dispatchContext } from '../../App';

export default function Add(props) {
    let {key} = props.record;
    let dispatch = useContext(dispatchContext);
    let changeCount = ()=>{
        dispatch({type: 'add', payload: key});
    };
  return (
    <button onClick={changeCount}><PlusOutlined /></button>
  )
}
