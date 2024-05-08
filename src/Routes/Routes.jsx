import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AddJob from "../Pages/AddJob";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import BidRequests from "../Pages/BidRequest";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import JobDetails from "../Pages/Home/JobDetails";
import MyBids from "../Pages/MyBid";
import MyPostedJobs from "../Pages/MyPostedJob";
import UpdateJob from "../Pages/Updatejob";
import PrivetRoute from "./PrivetRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/job/:id',
                element: <JobDetails></JobDetails>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/update/:id',
                element:<UpdateJob></UpdateJob>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/addJob',
                element: <PrivetRoute><AddJob></AddJob></PrivetRoute>
            },
            {
                path: '/my-posted-jobs',
                element: <MyPostedJobs></MyPostedJobs>
            },
            {
                path: '/my-bid',
                element: <MyBids></MyBids>
            },
            {
                path: '/bid-request',
                element: <BidRequests></BidRequests>
            }
        ]
    },

])



export default router;