import React, { useContext } from 'react'
import { dataContext } from '../../App'
import {PlusOutlined} from '@ant-design/icons';

export default function Add(props) {
    let data = useContext(dataContext);
    let dispatch = data[1];
    let add = ()=>{
        data[0].map(
            (element)=>{
                if (props.commodity.key === element.key) {
                    dispatch({type: 'add'});
                }
                return element;
            }
        );
        console.log(data);
    }
  return (
    <button onClick={add}><PlusOutlined /></button>
  )
}
