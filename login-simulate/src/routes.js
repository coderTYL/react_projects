import Login from "./routers/login/Login";
import Register from './routers/register/Register';
import ResetPassword from "./routers/resetPassword/ResetPassword";

export const routes = [
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/resetPassword',
        element: <ResetPassword />,
    }
];

