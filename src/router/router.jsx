import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: '/jobs/:id',
          element: <JobDetails></JobDetails>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/signin',
          element: <SignIn></SignIn>
        },
    ]
  },
]);
export default router;