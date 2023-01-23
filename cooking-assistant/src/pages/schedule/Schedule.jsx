import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import MyBreadCrumb from '../../layouts/breadCrumb/MyBreadCrumb'

export default function Schedule() {
  /* let navigate = useNavigate();
  useEffect(()=>{
    navigate('/schedule/individual')
  }); */
  return (
    <div>
      <div>
        <MyBreadCrumb />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
