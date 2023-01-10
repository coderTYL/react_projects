import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Declaration from './declaration/Declaration'
import News from './news/News'

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
            <Routes>
                <Route path='/home/news' element={<News />} />
                <Route path='/home/declaration' element={<Declaration />} />
            </Routes>
        </div>
    </div>
  )
}
