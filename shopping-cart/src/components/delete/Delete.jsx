import React, {useContext} from 'react'
import { dispatchContext } from '../../App'

export default function Delete(props) {
    let dispatch = useContext(dispatchContext);
    let {key} = props.record;
    let deleteElement = ()=>{
        dispatch({type: 'delete', payload: key});
    }
  return (
    <div>
        <button onClick={deleteElement}>删除</button>
    </div>
  )
}
