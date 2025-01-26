// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "../Provider/authProvider";





// const PrivateRoute = ({ children }) => {
//     const { user } = useContext(AuthContext);

//     return user ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Provider/authProvider';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
        // Redirect them to the login page if not authenticated
        return <Navigate to="/login" />;
    }
    return children; // Render the children (Dashboard in your case) if authenticated
};

export default PrivateRoute;
