import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
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
                                <li><a>Home</a></li>
                                <li><a>Colleges</a></li>
                                <li><a>Admission</a></li>
                                <li><a>My College</a></li>
                            </ul>
                        </div>
                        <a className="normal-case text-xl font-bold">UniFacilityFinder</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a>Home</a></li>
                            <li><a>Colleges</a></li>
                            <li><a>Admission</a></li>
                            <li><a>My College</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link to='/registration' className="btn bg-[#4F26F9] text-white">Registration</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;