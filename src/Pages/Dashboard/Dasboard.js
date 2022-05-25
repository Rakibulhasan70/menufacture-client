import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../Hooks/UseAdmin';
import auth from '../firebase.init';

const Dasboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 className='text-3xl font-bold text-indigo-500 text-center'>Welcome to your Dashboard </h2>
                <Outlet></Outlet>

            </div>
            <div class="drawer-side ">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48  bg-base-100 text-base-content">
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>

                    {
                        admin
                            ?
                            <>
                                <li><NavLink to='/dashboard/makeadmin'> Make Admin</NavLink></li>
                                <li><NavLink to='/dashboard/addproduct'>Add Product</NavLink></li>
                                <li><NavLink to='/dashboard/manageproduct'>Manage Product</NavLink></li>
                                <li><NavLink to='/dashboard/manageorder'>Manage Orders</NavLink></li>
                            </>
                            :
                            <>
                                <li><Link to='/dashboard'>My Order</Link></li>
                                <li><Link to='/dashboard/addreview'>Add Reviews</Link></li>
                            </>
                    }
                </ul>

            </div>
        </div >
    );
};

export default Dasboard; <h2>Dashboard</h2>