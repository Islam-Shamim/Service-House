import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext()

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    //handle sign up
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //handle sign in
    const userSignIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    //sign out
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    //currentUser
    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            console.log("Current User : ",currentUser);
            setLoading(false);
        })
        return () =>{
            return unSubscribe();
        }
    },[])

    const userInfo = {
        user,
        loading,
        createUser,
        userSignIn,
        logOut
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.object
  };