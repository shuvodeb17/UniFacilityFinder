import React, { useContext } from 'react';
import { useNavigate, useLocation, Navigate, } from "react-router-dom";
import { AuthContext } from '../../providers/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    let location = useLocation();

    if (loading) {
        return <><progress className="progress w-56"></progress></>
    }


    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default PrivateRoute;