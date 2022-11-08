import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Blog from "../../Pages/Other/Sign/Blogs/Blog";
import Login from "../../Pages/Other/Sign/Login";
import Route404 from "../../Pages/Other/Sign/Route404/Route404";
import Signup from "../../Pages/Other/Sign/Signup";
import Services from "../../Pages/Services/Services";
import ServiceDetails from './../../ServiceDetails/ServiceDetails';

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
            },
            {
                path: '/details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)

            }



        ]
    },

    {
        path: '/*',
        element: <Route404></Route404>
    }
]);

export default router;