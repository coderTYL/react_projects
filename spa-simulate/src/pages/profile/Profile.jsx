import React, { useState } from 'react'

export default function Profile(props) {
  let [account, setAccount] = useState(props.account);
  let [count, setCount] = useState(props.account.age);
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
