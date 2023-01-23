import Favorite from "../pages/favorite/Favorite";
import Dishes from "../pages/dishes/Dishes";
import Schedule from "../pages/schedule/Schedule";
import CreateSchedule from "../pages/schedule/CreateSchedule";
import ModifySchedule from "../pages/schedule/ModifySchedule";
import DeleteSchedule from "../pages/schedule/DeleteSchedule";
import IndividualSchedule from "../pages/schedule/IndividualSchedule";
import Home from "../pages/home/Home";

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
                path: 'modify',
                element: <ModifySchedule />
            },
            {
                path: 'delete',
                element: <DeleteSchedule />
            },
            {
                path: 'individual',
                element: <IndividualSchedule />
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