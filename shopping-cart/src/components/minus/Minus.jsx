import React, {useContext} from 'react'
import { MinusOutlined } from '@ant-design/icons'
import { dispatchContext } from '../../App';

export default function Minus(props) {
  let {key} = props.record;
  let dispatch = useContext(dispatchContext);
  let changeCount = ()=>{
    dispatch({type: 'minus', payload: key});
  };
  return (
    <button onClick={changeCount} ><MinusOutlined /></button>
  )
}
