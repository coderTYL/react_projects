import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './home.css'

export default function Home() {
  return (
    <div>
        <ul className='navigation_child1'>
            <li>
                <NavLink to={'/home/news'} > news </NavLink>
            </li>
            <li>
                <NavLink to={'/home/declaration'} > declaration </NavLink>
            </li>
        </ul>
        <div className='display_child1'>
            <Outlet />
        </div>
    </div>
  )
}
