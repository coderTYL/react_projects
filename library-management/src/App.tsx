import React from 'react';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: 'home',
    element: <Home />,
    children: [
      {
        
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
