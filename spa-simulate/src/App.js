import React from 'react'
import { Link, NavLink, useRoutes } from "react-router-dom";
import { routes } from './router'
import './App.css'

export const myContext = React.createContext("defaultValue");
myContext.displayName = "defined_context"

export default function App() {
  const elements = useRoutes(routes);
  return (
    <myContext.Provider value={{ name: 'lucy', age: 18 }}>
      <ul id='navigation'>
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
      <div id='display'>
          {elements}
      </div>
    </myContext.Provider>
  )
}
