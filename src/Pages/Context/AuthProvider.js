import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }


    const logout = () => {
        return signOut(auth);
    }


    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser);
            setUser(currentUser);


        });
        return () => {
            unSubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logout,
        updateUserProfile

    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}

            </AuthContext.Provider>

        </div>

    );
};

export default AuthProvider;