import React, {useContext} from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { NewContext } from '../../../App'

export default function News() {
  const newsType = useContext(NewContext);
  return (
    <div>
    {
      newsType.map((element)=>{
        return (
          <NavLink key={element.id} to={`/home/news/${element.path}`} state= {{name: 'football'}}>{element.title}</NavLink>
        )
      })
    }
    <Outlet></Outlet>
    </div>
  )
}
