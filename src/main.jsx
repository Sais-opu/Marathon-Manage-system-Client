import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'
import Error from './components/Error/Error.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Marathon from './components/MarathonsPage/Marathon.jsx'
import AuthProvider from './components/Provider/authProvider.jsx'
import PrivateRoute from './components/private/PrivateRoute.jsx'
import Details from './components/Details/Details.jsx'
import Addmarathon from './components/Addmarathon/Addmarathon.jsx'
import MarathonList from './components/MarathonList/MarathonList.jsx'
import ApplyList from './components/ApplyList/ApplyList.jsx'
import UpcomingDetails from './components/Details/UpcomingDetails.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dasboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      },
      {
        path: "/marathon/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
      },
      {
        path: "/upcoming/:id",
        element: <PrivateRoute> <UpcomingDetails></UpcomingDetails> </PrivateRoute>,
      },
      {
        path: "/dashboard/addmarathon",
        element: <PrivateRoute> <Addmarathon></Addmarathon>  </PrivateRoute>,
      },
      {
        path: "/dashboard/marathonlist",
        element: <PrivateRoute> <MarathonList></MarathonList>  </PrivateRoute>,
      },
      {
        path: "/dashboard/applylist",
        element: <PrivateRoute> <ApplyList></ApplyList> </PrivateRoute>,
      },
      {
        path: "/marathon",
        element: <Marathon></Marathon>
      },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="bounce"
      />
    </AuthProvider>

  </StrictMode>,
)
