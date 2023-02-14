import React, { useContext } from 'react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/UseContexr';

const DisplayError = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    const { logout } = useContext(AuthContext)
    const handlerToLogOut = () => {
        logout()
        navigate('/')
    }
    return (
        <div>
            <p className='text-red-500'>Oops! Something went wrong!!</p>
            <p className='text-red-400'>
                <i>{error.statusText || error.message}</i>
            </p>
            <h2 className='btn btn-primary text-white'> <Link onClick={handlerToLogOut}>Sign Out</Link></h2>
        </div>
    );
};

export default DisplayError;