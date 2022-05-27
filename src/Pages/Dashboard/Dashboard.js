import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h3>Hello <span className='text-green-600'>{user.displayName}</span></h3>
                <h2 className='text-2xl font-bold text-accent'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {admin ? <>
                        <li><Link to='/dashboard/addProduct'>Add a Product</Link></li>
                        <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>
                        <li><Link to='/dashboard/users'>Make Admin</Link></li>
                        <li><Link to='/dashboard/manageOrders'>Manage Orders</Link></li>
                    </>
                    :
                    <>
                        <li><Link to='/dashboard/review'>Add Review</Link></li>
                        <li><Link to='/dashboard/orders'>My Orders</Link></li>
                    </>    

                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;