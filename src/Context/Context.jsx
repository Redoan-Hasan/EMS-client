/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config"

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()
const Context = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);
    const auth = getAuth(app);
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    };

    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    };

    const updatePhoto = (name,photoUrl) => {
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoUrl
        })
    }

    const logOut = () => {
        return auth.signOut()
    }

    useEffect(() => {
        const unSubscrible =onAuthStateChanged(auth,(user) => {
            setUser(user)
        })
        return () => unSubscrible()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const authInfo = {user,register,logIn,updatePhoto,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;