import React, { useContext, useRef } from 'react';
import loginImage from '../../assets/images/login/login.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import GoogleLogin from '../GoogleLogin/GoogleLogin';


const Login = () => {
    const { signIn, resetPassword } = useContext(AuthContext);
    // const emailRef = useRef();
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                if (loggedUser?.email) {
                    notify('Login Successful', 'success');
                }
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
                notify('Registration Failed: ' + error.message, 'error');
            })
    }

    const resetHandlePassword = (e) => {
        const email = emailRef?.current?.value;
        if (!email) {
            toast.error('Please provide you Email address to reset your password')
            console.log('Please provide you Email address to reset your password')
        }
        resetPassword(email)
            .then(() => {
                // toast.success('Reset Email sent')
                console.log('Reset email sent')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const notify = (message, type) => {
        toast[type](message);
    };



    return (
        <div>
            <div class="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
                <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" >
                    <div class="md:flex w-full">
                        <div class="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
                            <img src={loginImage} alt="" />
                        </div>
                        <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div class="text-center mb-10">
                                <h1 class="font-bold text-3xl text-gray-900">Login</h1>
                                <p>Enter your information to Login</p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="flex -mx-3">
                                    <div class="w-full px-3 mb-5">
                                        <label for="" class="text-xs font-semibold px-1">Email</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                            <input {...register("email")} type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex -mx-3">
                                    <div class="w-full px-3 mb-12">
                                        <label for="" class="text-xs font-semibold px-1">Password</label>
                                        <div class="flex">
                                            <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                            <input {...register("password")} type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex -mx-3">
                                    <div class="w-full px-3 mb-5">
                                        <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold" onClick={notify}>Login Now</button>
                                        <Toaster />
                                        <div className='text-center'>
                                            <p>New to this website Please <Link className=' text-blue-500 mx-auto' to='/registration'>Registration</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <p className='text-center'>Forget Password ? Please <button className='text-green-500' onClick={resetHandlePassword}>Reset Password</button> </p>
                            <Toaster />

                            <div className='text-center mx-auto mt-5' >
                                <GoogleLogin />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;