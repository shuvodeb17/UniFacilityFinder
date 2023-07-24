import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext)

    const logOutHandler = () => {
        logout()
    }


    return (
        <div className='bg-base-100'>
            <div className="container mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/colleges'>Colleges</Link></li>
                                <li><Link to='/admission'>Admission</Link></li>
                                <li><Link to='/my-college'>My College</Link></li>
                            </ul>
                        </div>
                        <Link className="normal-case text-xl font-bold">UniFacilityFinder</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/colleges'>Colleges</Link></li>
                            <li><Link to='/admission'>Admission</Link></li>
                            <li><Link to='/my-college'>My College</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user && <Link to='/profile'>
                            <img style={{ width: "60px", borderRadius: '50%', border: '2px solid green' }} className='mr-5 cursor pointer' src={user?.photoURL} alt="" />
                        </Link>}
                        {
                            user ?
                                <Link onClick={logOutHandler} className="btn bg-[#ee671e] text-white">Logout</Link>
                                :
                                <Link to='/registration' className="btn bg-[#4F26F9] text-white">Registration</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;