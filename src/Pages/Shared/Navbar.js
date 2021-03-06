import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, NavLink } from 'react-router-dom';
import auth from '../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        Navigate('/login')
    };

    const commonRoute = <>
        <li><NavLink to='/home'>Home</NavLink></li>
        <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
        <li><NavLink to='/blogs'>Blog</NavLink></li>
        {
            user && <NavLink className='mt-3 px-2' to='/dashboard'>DashBoard</NavLink>
        }

        {
            user ?

                <>
                    <button className='btn btn-ghost lowercase text-xl font-normal' onClick={logout}>Sign-Out</button>
                    <p className='text-xl  mt-3'>Name:{user?.displayName}</p>
                </>

                :
                <li><Link to='/login'>Login</Link></li>
        }

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {commonRoute}
                        </ul>
                    </div>
                    <Link to='/home' className="btn btn-ghost normal-case text-xl">Car Parts Menufacture</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {commonRoute}
                    </ul>
                </div>

                <div className="navbar-end">
                    <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;