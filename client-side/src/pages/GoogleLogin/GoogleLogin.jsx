import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const googleSignInHandler = () => {
        const notify = (message, type) => {
            toast[type](message);
        };
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const savedUser = { name: result?.user?.displayName, email: result?.user?.email, photo: result?.user?.photoURL }
                fetch(`https://server-side-steel-theta.vercel.app/all-users-post`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        navigate(from, { replace: true });
                    })
                if (result?.user) {
                    notify('Successful', 'success');
                }
            })
            .catch(error => {
                console.log(error.message)
                notify('Failed: ' + error.message, 'error');
            })
    }

    return (
        <>
            <button onClick={googleSignInHandler} className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                <div className="relative flex items-center space-x-4 justify-center">
                    <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className="absolute left-0 w-5 mr-5" alt="google logo" />
                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base ml-5">Continue with Google</span>
                </div>
            </button>
            <Toaster />
        </>
    );
};

export default GoogleLogin;