import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContexr';
import { InfinitySpin } from 'react-loader-spinner'


const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="w-10 h-10">
                <InfinitySpin />
            </div>
        </div>

    }
    if (user?.email) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;