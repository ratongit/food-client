import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import Main from './components/LayOut/main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import AuthProniders from './Probiders/AuthProviders.jsx';
import Orders from './components/Orders.jsx';
import PrivateRoute from './Routes/PrivetRoute.jsx';
import UserProfile from './components/UserProfile.jsx';
import NotFound from './components/404page/404';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
{
  path: "/",
  element:<Home></Home>,

},
{
  path: "/orders",
  element:
  <PrivateRoute> 
     <Orders></Orders>
  </PrivateRoute>,

},

{
  path: "/profile",
  element:
  <PrivateRoute> 
     <UserProfile></UserProfile>
  </PrivateRoute>,

},


    ]
  },




  {
  path: "/login",
  element:<Login></Login>,

},

          
    {

      path: "/*",
      element:<NotFound></NotFound>
    },
    {
      path: "/register",
      element:<Register></Register>,
    
    },
    
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<AuthProniders>

    <RouterProvider router={router} />

</AuthProniders>

  </React.StrictMode>
);