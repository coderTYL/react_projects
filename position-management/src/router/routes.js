import { Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from '../pages/home/Home'
import List from '../pages/manage/list/List'
import Alarm from '../pages/alarm/Alarm'
import InsertPerson from '../pages/manage/insertPerson/InsertPerson'

export const routes = [
    {
        path: '/',
        element: <Navigate to='/login' />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/manage',
        children: [
            {
                path: 'list',
                element: <List />
            },
            {
                path: 'insertPerson',
                element: <InsertPerson/>
            }
        ]
    },
    {
        path: 'warning',
        element: <Alarm />
    }
]