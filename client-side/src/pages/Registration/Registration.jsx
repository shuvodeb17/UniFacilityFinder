import React, { useContext } from 'react';
import registrationImage from '../../assets/images/registration/registration.png'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import GoogleLogin from '../GoogleLogin/GoogleLogin';



const Registration = () => {
    const { signUp, updateUserProfile } = useContext(AuthContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

        signUp(data.email, data.password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log('User Profile Info Updated')
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
                if (createdUser?.email) {
                    notify('Registration Successful', 'success');
                }
            })
            .catch(error => {
                console.log(error.message)
                notify('Registration Failed: ' + error.message, 'error');
            })
    }

    const notify = (message, type) => {
        toast[type](message);
    };




    return (
        <div>
            <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
                <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" >
                    <div className="md:flex w-full">
                        <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                            <img src={registrationImage} alt="" />
                        </div>
                        <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div className="text-center mb-10">
                                <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                                <p>Enter your information to register</p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex -mx-3">
                                    <div className="w-1/2 px-3 mb-5">
                                        <label for="" className="text-xs font-semibold px-1">Name</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input {...register("name")} type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="John Deo" required />
                                        </div>
                                    </div>
                                    <div className="w-1/2 px-3 mb-5">
                                        <label for="" className="text-xs font-semibold px-1">Photo URL</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                            <input {...register("photoURL")} type="url" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Photo URL" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <label for="" className="text-xs font-semibold px-1">Email</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input {...register("email")} type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-12">
                                        <label for="" className="text-xs font-semibold px-1">Password</label>
                                        <div className="flex">
                                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input {...register("password")} type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" required />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold" onClick={notify}>REGISTER NOW</button>
                                        <Toaster />
                                        <Link className='text-center text-blue-500 mx-auto' to='/login'>Login</Link>
                                    </div>
                                </div>
                            </form>
                            
                            <GoogleLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;