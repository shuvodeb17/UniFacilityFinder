import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    // create user
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

     // login
     const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        signUp,
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;