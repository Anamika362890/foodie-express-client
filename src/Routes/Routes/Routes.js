import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Blog from "../../Pages/Other/Sign/Blogs/Blog";
import Login from "../../Pages/Other/Sign/Login";
import Signup from "../../Pages/Other/Sign/Signup";
import Services from "../../Pages/Services/Services";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {

                path: "/services",
                element: <Services></Services>,
            },

            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/blogs",
                element: <Blog></Blog>
            }



        ]
    },
]);

export default router;