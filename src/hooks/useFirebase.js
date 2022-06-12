import React, { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebase.config";
import { useState } from "react";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from 'react-router-dom';


initializeApp(firebaseConfig);

const useFirebase = () => {

  let navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [newUser, setNewUser] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((res) => {
        const { displayName, email, photoURl } = res.user;
        const signedInUser = {
          isSignedIn: true,
          photo: photoURl,
          name: displayName,
          email: email,
        };
        setUser(signedInUser);

        // navigate("/home")

      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        const email = error.email;
      });
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => { });
  };
  // google auth end

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser({});
      }
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, [auth]);




  const handleSubmit = (e) => {
   
    // if (!/\S+@\S+\.\S+/.test(email)) {
    //   setError("please Enter a valid Email!")
    //   return;
    // }
    // if ( !password.length > 6 && password.length < 32 && /\d{1}/.test(password)) {
     
    //   setError("Password must contain at least 6 - 32 characters long and one number")
    //   return;
    
    // }
    
    // validation end

    

    if (newUser ) {
      registerNewUser(email, password)
    }
    if (email && password){
      loginUser(email, password)
    }

    e.preventDefault();


  };

  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        const user = res.user;
        console.log("user show", user);
        setError("");
        setSuccess(" User account created successfully")
        setNewUser(true);
        
        updateProfile(auth.currentUser, {
                  displayName: name,
                })
      })
      .catch((error) => {
        
        // setUser(newUserInfo);
        setError(error.message);
      });
  };

  
  const loginUser = (email, password) => {

    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      const user = res.user;
      console.log(user);
      setSuccess(" User logged in successfully");
      setError("");
      
     
    })
    .catch((error) => {
      setError("Wrong email or password!");
      
    });

  }

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }





  return {
    loading,
    user,
    handleSignIn,
    handleSignOut,
    handleSubmit,
    handleEmail,
    handlePassword,
    handleName,
    loginUser,
    error,
    success,
    email



  };
};

export default useFirebase;