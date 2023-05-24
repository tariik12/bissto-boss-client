
import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import PageMenu from "../pages/PageMenu/PageMenu";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },

    {
      path:'/menu',
      element:<PageMenu></PageMenu>
    }
 
  ]);