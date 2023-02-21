import React, {useEffect, useState} from 'react'
import Login from './pages/login/Login';
import Home from './pages/home/Home'
import './App.css'

export const loginContext = React.createContext();

export default function App() {
  let accountInfo = {};
  const [isLogin, setIsLogin] = useState(false);
  useEffect(
    (accountInfo)=>{
      if (accountInfo !== undefined) {
        setIsLogin(true);
      }
    }, [isLogin]
  );
  let getAccountInfo = (account)=>{
    return account;
  }
  return (
    <div id='container'>
      <loginContext.Provider value={accountInfo}>
        {isLogin ? <Home /> : <Login getAccountInfo={getAccountInfo} />}
      </loginContext.Provider>
    </div>
  )
}
