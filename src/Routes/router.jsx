import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorDetail from "../Pages/Home/DoctorDetail/DoctorDetail";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import NotFound from "../Pages/Shared/NotFound/NotFound";
import Appointment from "../Pages/Appointment/Appointment";
import DashboardLayout from "../Layout/DashboardLayout";
import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import AddReview from "../Pages/Dashboard/AddReview/AddReview";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors/ManageDoctors";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/Home/About/About";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/doctorDetail/:id',
            loader: ({params}) => fetch(`https://dental-care-server-gamma.vercel.app/doctors/${params.id}`),
            element: <DoctorDetail />
        },
        {
          path: '/appointment',
          element: <PrivateRoute><Appointment /></PrivateRoute>
        },
        {
          path: '/about',
          element: <About />
        }
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      // user routes 
      {
        path: 'myAppointments',
        element: <PrivateRoute><MyAppointment /></PrivateRoute>
      },
      {
        path: 'addReview',
        element: <PrivateRoute><AddReview /></PrivateRoute>
      },

      // admin routes
      {
        path: 'allUser',
        element: <AdminRoute><AllUser /></AdminRoute>
      },
      {
        path: 'addDoctor',
        element: <AdminRoute><AddDoctor /></AdminRoute>
      },
      {
        path: 'manageDoctors',
        element: <AdminRoute><ManageDoctors /></AdminRoute>
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signUp',
    element: <SignUp />
  }
]);
