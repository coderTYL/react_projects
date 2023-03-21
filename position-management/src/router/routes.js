import Login from "../pages/login/Login";

export const routes = [
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'home',
        element: <Home />,
        children: [
            {
                path: 'manage',
                element: <Manage />
            }
        ]
    }
]