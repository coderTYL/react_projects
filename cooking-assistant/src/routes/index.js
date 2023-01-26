import Favorite from "../pages/favorite/Favorite";
import Dishes from "../pages/dishes/Dishes";
import Schedule from "../pages/schedule/Schedule";
import CreateSchedule from "../pages/schedule/CreateSchedule";
import IndividualSchedule from "../pages/schedule/IndividualSchedule";
import Home from "../pages/home/Home";
import { Navigate } from "react-router-dom";

export const elements = [
    {
        path:'/schedule',
        element: <Schedule />,
        children: [
            {
                path: 'create',
                element: <CreateSchedule />
            },
            {
                path: 'individual',
                element: <IndividualSchedule />
            },
            {
                path: '/schedule/',
                element: <Navigate to={'individual'} />
            }
        ]
    },
    {
        path: 'home',
        element: <Home />
    },
    {
        path: 'accountConfig',
        element: <accountConfig />
    },
    {
        path: 'favorites',
        element: <Favorite />
    },
    {
        path: 'dishes',
        element: <Dishes />
    }
]