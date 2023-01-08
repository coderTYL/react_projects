import React, { Component } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import Dishes from './pages/dishes/Dishes'
import Profile from './pages/profile/Profile'
import './App.css'

export const myContext = React.createContext("defaultValue");
myContext.displayName = "defined_context"

export default class App extends Component {
  
  render() {
    return (
      <myContext.Provider value='上下文'>
        <ul id='navigation'>
          <li>
            <Link to={'/profile'} >profile</Link>
          </li>
          <li>
            <Link to={'/dishes'}>dishes</Link>
          </li>
        </ul>
        <div id='display'>
          <Routes>
            {/* <Route path='/' element={<Dishes />} /> */}
            <Route path='/profile' element={<Profile />} />
            <Route path='/dishes' element={<Dishes />} />
          </Routes>
        </div>
      </myContext.Provider>
    )
  }
}
