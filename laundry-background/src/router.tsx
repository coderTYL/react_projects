import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ClientManagement from "./pages/clientManagement/ClientManagement";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {
                    path:"clientManagement",
                    element: <ClientManagement/>
                }
            ]
        }
    ]
);

export default router;