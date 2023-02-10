import React from 'react'
import { useRoutes } from 'react-router-dom'
import { indexElements } from './routes/indexRoutes' 

export default function App() {
  const indexElement = useRoutes(indexElements);
  return (
    <div>
      {indexElement}
    </div>
  )
}
