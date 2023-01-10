import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <ul className='navigation'>
            <li>
                <NavLink to={'/home/news'} > news </NavLink>
            </li>
            <li>
                <NavLink to={'/home/declaration'} > declaration </NavLink>
            </li>
        </ul>
        <div className='display'>展示区
            <Outlet />
        </div>
    </div>
  )
}
