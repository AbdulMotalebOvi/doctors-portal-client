import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/UseContexr';
import { InfinitySpin } from 'react-loader-spinner'
import useAdmin from '../../hooks/useAdmin';


const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <div style={{ margin: '0 , auto' }}><InfinitySpin> </InfinitySpin></div>
    }
    if (user?.email && isAdmin) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;