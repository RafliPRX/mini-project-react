import DetailUser from "../pages/DetailUser";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";

export const routeList = [
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/register",
        element:<Register/>,
    },
    {
        path: "/home/:id",
        element:  (
            <ProtectedRoute>  
                <DetailUser/> 
            </ProtectedRoute>
            ),
    },
    {
        path: "/home",
        element: (
            <ProtectedRoute>
                <Home/>
            </ProtectedRoute>
        )
    }
]
    