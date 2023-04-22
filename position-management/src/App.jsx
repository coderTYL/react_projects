import React, { useState } from 'react'
import { useRoutes, Navigate } from 'react-router-dom';
import './styles/App.css';
import Login from "./pages/login/Login";
import WelcomePage from './pages/welcomePage/WelcomePage'
import List from './pages/manage/list/List'
import Alarm from './pages/alarm/Alarm'
import InsertPerson from './pages/manage/insertPerson/InsertPerson'
import DashBoard from "./pages/dashBoard/DashBoard";
import MainLayout from "./layout/MainLayout";
import PersonalDetail from "./components/description/PersonalDetail";
import Register from "./pages/register/Register";
import TypeList from "./components/typeList/TypeList";
import Event from './pages/eventPage/Event';
import AddEventPage from './pages/eventPage/AddEventPage';



export default function App() {
    const [dimensionItemsRoutes, setDimensionItemsRoutes] = useState([]);

    let getRoute = (path, element)=>{
        return {
            path,
            element,
        }
    }
    let fetchDimensionItems = (dimensionItems)=>{
        let routes = dimensionItems.map(
            (item)=>{
                return getRoute(item.id, <TypeList dimensionID={item.id} />)
            }
        );
        setDimensionItemsRoutes(routes);
    }
   

    const routes = [
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
            element: <MainLayout fetchDimensionItems={fetchDimensionItems} />,
            children: [
                {
                    path: '',
                    element: <Navigate to='welcomePage' />
                },
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
                            element: <InsertPerson />
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
                    children: dimensionItemsRoutes
                },
                {
                    path: 'event',
                    element: <Event />,
                },
                {
                    path: 'addEvent',
                    element: <AddEventPage />
                },
                {
                    path: 'warning',
                    element: <Alarm />
                }
            ]
        },
    ]
    const elements = useRoutes(routes);
    return (
        <div id='app'>
            {elements}
        </div>
    )
}





