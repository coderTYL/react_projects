import React, {useState} from 'react'
import Home from './pages/home/Home';
import Login from './pages/login/Login';


export default function App() {
  let accountInfo = {};
  let loginContext = React.createContext();
  const [isLogin, setIsLogin] = useState(false);
  
  let getAccountInfo = (account)=>{
    return accountInfo = account;
  }
  return (
    <div>
      <loginContext.Provider>
        {isLogin? <Home /> : <Login getAccountInfo={getAccountInfo}/>}
      </loginContext.Provider>
    </div>
  )
}
