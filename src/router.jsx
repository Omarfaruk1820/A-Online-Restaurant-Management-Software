import { createBrowserRouter } from "react-router-dom";
import Main from "./Components/LayOut/Main";
import Home from "./Components/Home/Home";
import AddUser from "./Components/Pages/AddUser";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Menu from "./Components/Pages/Menu";
import Order from "./Components/Pages/Shared/Order";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import DashBoard from "./Components/LayOut/DashBoard";
import Cart from "./Components/DashBoad/Cart";
import AllUser from "./Components/DashBoad/AllUser";
import AddItem from "./Components/Deshboard/AddItem";
import AdminRoute from "./Components/Auth/AdminRoute";
import ManageItems from "./Components/Deshboard/ManageItems";
import UpdateItems from "./Components/Deshboard/UpdateItems";
import Payment from "./Components/Deshboard/Payment";
import PaymentHistory from "./Components/Deshboard/PaymentHistory";
import AdminHome from "./Components/Deshboard/AdminHome";
import UserHome from "./Components/Deshboard/UserHome";






export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h1>Data Not Found</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addUser",
        element: <AddUser></AddUser>,
      },

     {
        path:"/login",
        element:<Login></Login>
     },
     {
      path: "/register",
      element: <Register></Register>
     },
     {
      path:"menu",
      element:<PrivateRoute><Menu></Menu></PrivateRoute>
     },
     {
      path:"/orderFood/:category",
      element:<Order></Order>
     },
    
   

    ],
  },

  // Dashboard Data show start from here
  {
    path:"dashboard",
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
  
   children:[
    {
      path:"cart",
      element:<Cart></Cart>
    },
      {
      path:"userHome",
      element:<UserHome></UserHome>
    },
    {
path:"payment",
element:<Payment></Payment>
    },
    {
path:'paymentHistory',
element:<PaymentHistory></PaymentHistory>
    },
    {
      path:"allUser",
      element:<AllUser></AllUser>
    },
    {
      path:"addItems",
      element:<AddItem></AddItem> 
    },
    {
      path:"manageItems",
      element:<ManageItems></ManageItems>
    },
    {
      path:"updateItem/:id",
      element: <UpdateItems></UpdateItems>,
      loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
    },
    {
      path:'adminHome',
      element:<AdminHome></AdminHome>
    },
  
   
   ]
  }
]);
export default router;
