import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Admission from "../pages/Admission/Admission";
import AdmissionForm from "../pages/AdmissionForm/AdmissionForm";
import CollegeDetails from "../pages/CollegeDetails/CollegeDetails";
import Colleges from "../pages/Colleges/Colleges";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyColleges from "../pages/MyColleges/MyColleges";
import Profile from "../pages/Profile/Profile";
import Registration from "../pages/Registration/Registration";
import Review from "../pages/Review/Review";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



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
                element: <PrivateRoute><CollegeDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-side-steel-theta.vercel.app/college-detail/${params.id}`)
            },
            {
                path: 'admission',
                element: <Admission />
            },
            {
                path: 'admission-form/:id',
                element: <PrivateRoute><AdmissionForm /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-side-steel-theta.vercel.app/college-detail/${params.id}`)
            },
            {
                path: 'my-college',
                element: <MyColleges />
            },
            {
                path: 'colleges',
                element: <Colleges />
            },
            {
                path: 'review/:id',
                element: <Review />,
                loader: ({ params }) => fetch(`https://server-side-steel-theta.vercel.app/review/${params.id}`)
            },
            {
                path: 'profile',
                element: <Profile />,
                loader: ({ params }) => fetch(`https://server-side-steel-theta.vercel.app/admission-all-data?studentEmail=${params._id}`)

            },
            {
                path: 'registration',
                element: <Registration />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: '*',
                element: <Error />
            }
        ]
    }
]);

export default router;

