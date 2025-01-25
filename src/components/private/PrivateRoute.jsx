import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthProvider from "../Provider/authProvider";



const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;