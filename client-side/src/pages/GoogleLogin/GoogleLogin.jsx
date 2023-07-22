import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const googleSignInHandler = () => {
        const notify = (message, type) => {
            toast[type](message);
        };
        googleSignIn()
            .then(result => {
                console.log(result.user)
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