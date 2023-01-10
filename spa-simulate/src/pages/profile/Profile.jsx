import React, { useState, useContext } from 'react'
import {myContext} from '../../App'

export default function Profile(props) {
  const value = useContext(myContext);
  let [account, setAccount] = useState(value);
  let [count, setCount] = useState(value.age);
  function changeAccount() {
    setAccount(
      (account)=>{
        return {name: 'allen',
        age: 22
        }
      }
    );
  }
  return (
    <div>
      <div>{account.name}</div>
      <div>{account.age}</div>
      <div>{count}</div>
      <button onClick={changeAccount}> 改变用户信息 </button>
      <button onClick={() => { setCount(++count) }}> 点击计数 </button>
    </div>
  )
}
