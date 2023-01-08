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
      <myContext.Provider value={{ name: 'lucy', age: 18 }}>
        <ul id='navigation'>
          <li>
            <Link to={'/profile'} > profile</Link>
          </li>
          <li>
            <Link to={'/dishes'}>dishes</Link>
          </li>
        </ul>
        <div id='display'>
          <myContext.Consumer>
            {
              (value) => {
                return (
                  <Routes>
                    <Route path='/profile' element={<Profile account={value} />} />
                    <Route path='/dishes' element={<Dishes />} />
                  </Routes>
                );
              }
            }
          </myContext.Consumer>

        </div>
      </myContext.Provider>
    )
  }
}
