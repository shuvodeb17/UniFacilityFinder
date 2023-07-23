import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google sign in
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    // create user
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // reset password
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    // logout
    const logout = () => {
        signOut(auth)
    }

    // update user profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // observe
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        googleSignIn,
        signUp,
        signIn,
        resetPassword,
        logout,
        updateUserProfile,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;