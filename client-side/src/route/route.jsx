import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CollegeDetails from "../pages/CollegeDetails/CollegeDetails";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'college-details/:id',
                element: <CollegeDetails />,
                loader: ({params}) => fetch(`http://localhost:3001/college-detail/${params.id}`)
            },
            {
                path: 'registration',
                element: <Registration />
            },
            {
                path: 'login',
                element: <Login />
            }
        ]
    }
]);

export default router;

