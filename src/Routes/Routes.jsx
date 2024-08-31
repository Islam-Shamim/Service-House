import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../components/Home/Home";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Products from "../components/Home/Products";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import CheckOut from "../components/checkout/CheckOut";
import MyServices from "../components/checkout/MyServices";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[{
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/services',
        element:<Services></Services>
      },
      {
        path:'/products',
        element:<Products></Products>
      },
      {
        path:'/signIn',
        element:<SignIn></SignIn>
      },
      {
        path:'/signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'/checkOut/:id',
        element:<CheckOut></CheckOut>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:'/myServices',
        element:<PrivateRoutes><MyServices></MyServices></PrivateRoutes>
      }
    ]
    },
  ]);

  export default router;