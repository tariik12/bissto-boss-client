
import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import PageMenu from "../pages/PageMenu/PageMenu";
import OrderPage from "../Order/OrderPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import MyCard from "../pages/DashBoard/MyCard/MyCard";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<PageMenu></PageMenu>
        },
        {
          path:'/order/:category',
          element:<OrderPage></OrderPage>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    }
   ,
   {
    path:'dashboard',
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        path:'myCard',
        element:<MyCard></MyCard>
      },
      {
        path:'allUsers',
        element:<AllUsers></AllUsers>
      }
    ]
   }
 
  ]);