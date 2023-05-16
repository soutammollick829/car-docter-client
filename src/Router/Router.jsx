import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";
import CheckOut from "../Pages/checkout/CheckOut";
import Bookings from "../Pages/bookings/Bookings";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signUp',
          element:<SignUp/>
        },
        
        {
          path:'checkout/:id',
          element:<PrivateRoute><CheckOut/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookings',
          element:<Bookings/>
        }
      ]
    },
  ]);

  export default router;