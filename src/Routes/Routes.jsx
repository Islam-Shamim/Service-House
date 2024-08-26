import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../components/Home/Home";
import About from "../components/Home/About";
import Services from "../components/Home/Services";
import Products from "../components/Home/Products";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";

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
      }
    ]
    },
  ]);

  export default router;