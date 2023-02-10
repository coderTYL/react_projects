import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

export const indexElements = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: 'home',
        element: <Home />
    }
]