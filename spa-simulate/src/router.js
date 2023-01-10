import Dishes from "./pages/dishes/Dishes";
import { Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

export const routes = [
    {
        path: '/',
        element: <Navigate to={'/home'} />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/profile',
        element: <Profile />

    },
    {
        path: '/dishes',
        element: <Dishes />

    }
]