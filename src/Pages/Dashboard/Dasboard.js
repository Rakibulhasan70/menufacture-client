import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase.init';

const Dasboard = () => {
    const [user] = useAuthState(auth)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-2xl font-bold text-indigo-500'>Welcome to your Dashboard </h2>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48  bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My Order</Link></li>
                    <li><Link to='/dashboard/addreview'>Add Reviews</Link></li>
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dasboard; <h2>Dashboard</h2>