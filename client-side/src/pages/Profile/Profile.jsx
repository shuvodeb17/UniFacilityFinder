import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
// import ProfileInformation from './ProfileInformation';
import { FaPen } from 'react-icons/fa';


const Profile = () => {

    const { user } = useContext(AuthContext)

    return (
        <section className='bg-base-300 h-screen'>
            <div className="container mx-auto">
                <div className='w-2/6 bg-base-200 rounded text-center p-3 mx-auto'>

                    <button className='flex items-center justify-items-end bg-green-600 text-white p-2 rounded '>
                        <p className='mr-4'>Edit</p>
                        <FaPen />
                    </button>

                    <img className='rounded-full text-center mx-auto' src={user?.photoURL} alt="" />
                    <p>Name: {user?.displayName}</p>
                    <p>Email: {user?.email}</p>
                </div>
            </div>
        </section>
    );
};

export default Profile;