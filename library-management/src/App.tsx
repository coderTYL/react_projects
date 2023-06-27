import React from 'react';
import {Navigate, RouterProvider, createBrowserRouter} from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import WelcomePage from './pages/Home/WelcomePage';
import BookList from './pages/Home/BookList';
import User from './pages/Home/User';
import NotificationPage from './pages/Home/User/NotificationPage';
import ConfigPage from './pages/Home/User/ConfigPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      /* {
        path: '/',
        element: <Navigate to={'welcomePage'} replace />
      }, */
      {
        path: 'welcomePage',
        element: <WelcomePage />
      },
      {
        path: 'bookList',
        element: <BookList />
      },
      {
        path: 'user',
        element: <User />,
        children: [
          {
            path: 'notification',
            element: <NotificationPage />
          },
          {
            path: 'config',
            element: <ConfigPage />
          }
        ]
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
