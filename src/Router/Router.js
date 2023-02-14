import { createBrowserRouter } from "react-router-dom";
import DasgBoardLayout from "../Layout/DasgBoardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import MyAppointment from "../Pages/DashBoard/MyAppointment/MyAppointment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Signup from "../Pages/SignUp/Signup";
import Adminprivate from '../Pages/PrivateRoute/Adminprivate'
import AddDoctor from "../Pages/DashBoard/AddDoctor/AddDoctor";
import ManageDoctor from "../Pages/DashBoard/ManageDocotrs/ManageDoctor";
import Payment from "../Pages/DashBoard/Payment/Payment";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },

        ],


    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DasgBoardLayout></DasgBoardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/users',
                element: <Adminprivate><AllUsers></AllUsers></Adminprivate>
            },
            {
                path: '/dashboard/addDoctor',
                element: <Adminprivate><AddDoctor></AddDoctor></Adminprivate>
            },
            {
                path: ' /dashboard/manageDoctors',
                element: <Adminprivate><ManageDoctor></ManageDoctor></Adminprivate>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Adminprivate><Payment></Payment></Adminprivate>,
                loader: ({ params }) => fetch(`https://doctors-portal-server-pi-cyan.vercel.app/booking/${params.id}`)
            }
        ]
    }

])