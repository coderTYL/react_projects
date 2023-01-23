import Dishes from "./pages/dishes/Dishes";
import { Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import News from "./pages/home/news/News";
import Declaration from "./pages/home/declaration/Declaration";
import Content from "./components/content/Content";

export const routes = [
    {
        path: '/',
        element: <Navigate to={'/home'} />
    },
    {
        path: '/home',
        element: <Home />,
        children: [
            {
                path: 'news',
                element: <News />,
                children: [
                    {
                        path: 'times',
                        element: <Content />
                    },
                    {
                        path: 'sports',
                        element: <Content />
                    }
                ]
            },
            {
                path: 'declaration',
                element: <Declaration />
            }
        ] 
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