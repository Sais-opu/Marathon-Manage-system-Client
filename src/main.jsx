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
import AddMarathon from './components/Dashboard/AddMarathon.jsx'
import ApplyList from './components/Dashboard/ApplyList.jsx'
import MarathonList from './components/Dashboard/MarathonList.jsx'
import UpcomingDetails from './components/Details/UpcomingDetails.jsx'
import Registration from './components/Dashboard/Registration.jsx'


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
        loader: ({ params }) => fetch(`http://localhost:5000/marathon/${params.id}`), 
      },
      
      {
        path: "/upcoming/:id",
        element: <PrivateRoute> <UpcomingDetails></UpcomingDetails> </PrivateRoute>,
      },
      {
        path: "/dashboard/addmarathon",
        element: <PrivateRoute> <AddMarathon></AddMarathon>  </PrivateRoute>,
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
        path: "/registration/:id",
        element: <PrivateRoute> <Registration></Registration></PrivateRoute>,
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
