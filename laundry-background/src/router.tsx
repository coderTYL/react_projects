import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import UserManagement from "./pages/userManagement/UserManagement";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path:"userManagement",
                    element: <UserManagement/>
                }
            ]
        }
    ]
);

export default router;