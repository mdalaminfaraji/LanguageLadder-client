import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboards from "../Layouts/Dahsboard/Dashboards";
import SelectedClasses from "../Pages/Dahsboard/Students/SelectedClasses";

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
      element:<Dashboards></Dashboards>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/dashboard",
          element:<SelectedClasses></SelectedClasses>
        }
      ]
    }
  ]);
  
  export default router;