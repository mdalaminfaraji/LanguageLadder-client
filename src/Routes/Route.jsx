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
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";

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
        },
        {
          path:'/instructor',
          element:<Instructors></Instructors>
        },
        {
          path:'/classes',
          element:<Classes></Classes>
        }
    ]
    },
    {
      path:"/dashboard",
      element:<PrivateRoute><Dashboards></Dashboards></PrivateRoute>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"selectedclass",
          element:<PrivateRoute><SelectedClasses></SelectedClasses></PrivateRoute>
        },
        {
          path:"myEnrollClass",
          element:<PrivateRoute><MyEnrolledClasses></MyEnrolledClasses></PrivateRoute>
        },
        {
          path:`payment/:id`,
          element:<PrivateRoute><Payment></Payment></PrivateRoute>
          
        },
        {
          path:"paymentHistory",
          element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>
        },
        {
          path:"studentHome",
          element:<PrivateRoute><StudentHome></StudentHome></PrivateRoute>
        },
        // Instructor routes
        {
          path:'instructorHome',
          element:<PrivateRoute><InsructorHome></InsructorHome></PrivateRoute>

        },
        {
          path:"AddClass",
          element:<PrivateRoute><AddClass></AddClass></PrivateRoute>

        },
        {
          path:"myclass",
          element:<PrivateRoute><MyClasses></MyClasses></PrivateRoute>
        },
        // Addmin route
        {
          path:"manageClass",
          element:<PrivateRoute><ManageClasses></ManageClasses></PrivateRoute>
        },
        {
          path:"ManageUsers",
          element:<PrivateRoute><ManageUsers></ManageUsers></PrivateRoute>
        },
        {
          path:"adminHome",
          element:<PrivateRoute><AdminHome></AdminHome></PrivateRoute>
        }
      ]
    }
  ]);
  
  export default router;