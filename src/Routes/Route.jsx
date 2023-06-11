import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboards from "../Layouts/Dahsboard/Dashboards";
import SelectedClasses from "../Pages/Dahsboard/Students/SelectedClasses";
import PrivateRoute from "./PrivateRoute";
import MyEnrolledClasses from "../Pages/Dahsboard/Students/MyEnrolledClasses";
import Payment from "../Pages/Dahsboard/Students/Payment";
import PaymentHistory from "../Pages/Dahsboard/Students/PaymentHistory";
import AddClass from "../Pages/Dahsboard/Instructor/AddClass";
import MyClasses from "../Pages/Dahsboard/Instructor/MyClasses";
import InsructorHome from "../Pages/Dahsboard/Instructor/InsructorHome";
import StudentHome from "../Pages/Dahsboard/Students/StudentHome";
import ManageClasses from "../Pages/Dahsboard/Admin/ManageClasses";
import ManageUsers from "../Pages/Dahsboard/Admin/ManageUsers";
import AdminHome from "../Pages/Dahsboard/Admin/AdminHome";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
    ]
    },
    {
      path:"/dashboard",
      element:<PrivateRoute><Dashboards></Dashboards></PrivateRoute>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"",
          element:<SelectedClasses></SelectedClasses>
        },
        {
          path:"myEnrollClass",
          element:<MyEnrolledClasses></MyEnrolledClasses>
        },
        {
          path:"payment",
          element:<Payment></Payment>
        },
        {
          path:"paymentHistory",
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:"studentHome",
          element:<StudentHome></StudentHome>
        },
        // Instructor routes
        {
          path:'instructorHome',
          element:<InsructorHome></InsructorHome>

        },
        {
          path:"AddClass",
          element:<AddClass></AddClass>

        },
        {
          path:"myclass",
          element:<MyClasses></MyClasses>
        },
        // Addmin route
        {
          path:"manageClass",
          element:<ManageClasses></ManageClasses>
        },
        {
          path:"ManageUsers",
          element:<ManageUsers></ManageUsers>
        },
        {
          path:"adminHome",
          element:<AdminHome></AdminHome>
        }
      ]
    }
  ]);
  
  export default router;