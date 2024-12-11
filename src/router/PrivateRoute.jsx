import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return (
        <div>
             <Navigate to={'/signin'} state={location?.pathnam}></Navigate>
        </div>
    );
};

export default PrivateRoute;