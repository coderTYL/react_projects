import { Navigate } from "react-router-dom";
import Login from "../pages/login/Login";
import WelcomePage from '../pages/welcomePage/WelcomePage'
import List from '../pages/manage/list/List'
import Alarm from '../pages/alarm/Alarm'
import InsertPerson from '../pages/manage/insertPerson/InsertPerson'
import DashBoard from "../pages/dashBoard/DashBoard";
import MainLayout from "../layout/MainLayout";
import PersonalDetail from "../components/description/PersonalDetail";
import Register from "../pages/register/Register";
import TypeList from "../components/typeList/TypeList";


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
        path: '/register',
        element: <Register />
    },
    {
        path: '/home',
        element: <MainLayout />, 
        children: [
            {
                path: 'welcomePage',
                element: <WelcomePage />
            },
            {
                path: 'manage',
                children: [
                    {
                        path: 'list',
                        element: <List />,
                    },
                    {
                        path: 'insertPerson',
                        element: <InsertPerson/>
                    },
                    {
                        path: 'dashBoard',
                        element: <DashBoard />
                    },
                    {
                        path: 'personalDetail',
                        element: <PersonalDetail />
                    }
                ]
            },
            {
                path: 'dimension',
                children: [
                    {
                        path: 'typeList',
                        element: <TypeList />
                    }
                ]
            },
            {
                path: 'warning',
                element: <Alarm />
            }
        ]
    },
]