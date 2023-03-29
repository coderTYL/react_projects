import React from 'react'
import { useRoutes } from 'react-router-dom';
import './styles/App.css';
import { routes } from './router/routes';


export default function App() {
  const elements = useRoutes(routes);
  return (
    <div id='app'>
       {elements}
    </div>
  )
}
