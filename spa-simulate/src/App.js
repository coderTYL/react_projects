import React, {createContext} from 'react'
import { Link, NavLink, useRoutes } from "react-router-dom";
import {newContext} from './newContext';
import { routes } from './router'
import './App.css'

export const MyContext = createContext("defaultValue");
MyContext.displayName = "defined_context"
export const NewContext = createContext(newContext);

export default function App() {
  const elements = useRoutes(routes);
  return (
    <div id='container'>
      <MyContext.Provider value={{ name: 'lucy', age: 18 }}>
        <ul className='navigation'>
          <li>
            <NavLink to={'/home'} >首页</NavLink>
          </li>
          <li>
            <Link to={'/profile'} > profile</Link>
          </li>
          <li>
            <Link to={'/dishes'}>dishes</Link>
          </li>
        </ul>
        <div className='display'>
          {elements}
        </div>
      </MyContext.Provider>
    </div>
  )
}
