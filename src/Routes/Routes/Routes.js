import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddServices from "../../Pages/AddServices/AddServices";
import Home from "../../Pages/Home/Home";
import MyReview from "../../Pages/MyReview/MyReview";
import Blog from "../../Pages/Other/Sign/Blogs/Blog";
import Login from "../../Pages/Other/Sign/Login";
import Route404 from "../../Pages/Other/Sign/Route404/Route404";
import Signup from "../../Pages/Other/Sign/Signup";
import Services from "../../Pages/Services/Services";
import ReviewPart from "../../ServiceDetails/ReviewPart";
import ServiceDetails from './../../ServiceDetails/ServiceDetails';
import PrivateRoute from "./PrivateRoute";

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
                path: "/my-reviews",
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: "/add-services",
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },


            {
                path: '/details/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://foodies-express-server.vercel.app/service/${params.id}`)

            },
            {
                path: '/details/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://foodies-express-server.vercel.app/details/${params.id}`)
            },

            {
                path: '/details/:id',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>,
                loader: ({ params }) => fetch(`https://foodies-express-server.vercel.app/details/${params.id}`)
            }

        ]
    },

    {
        path: '/*',
        element: <Route404></Route404>
    }
]);

export default router;