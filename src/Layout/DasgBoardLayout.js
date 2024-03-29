import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/UseContexr';
import useAdmin from '../hooks/useAdmin';
import Header from '../Pages/Shared/Header/Header';

const DasgBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Header></Header>
            <div className="drawer drawer-mobile  my-10">
                <input id="dashboardLayout" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">

                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardLayout" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">

                        <li><Link to='/dashboard'>My Appointment</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/users'>All Users</Link></li>
                                <li><Link to='/dashboard/addDoctor'>Add Doctor</Link></li>
                                <li><Link to='/dashboard/manageDoctor'>Manage Doctor</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DasgBoardLayout;