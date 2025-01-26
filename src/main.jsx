import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'
import Error from './components/Error/Error.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Marathon from './components/MarathonsPage/Marathon.jsx'
import AuthProvider from './components/Provider/authProvider.jsx'
import PrivateRoute from './components/private/PrivateRoute.jsx'


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
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
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
    </AuthProvider>

  </StrictMode>,
)
