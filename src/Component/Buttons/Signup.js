import React from 'react';
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase.config";
import { useState } from "react";

import { Link, useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';




initializeApp(firebaseConfig);

const Signup = () => {

  const { user, handleSignIn, handleSignOut, handleSubmit, handleEmail,
    handlePassword, error, success, handleName } = useAuth();
  // google sing up


  return (
    <>

      {/* {user.isSignedIn ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <button
          style={{ background: "#2da44e", color: "#ffffff" }}
          onClick={handleSignIn}
        >
          Sign in with google
        </button>
      )}
      {user.isSignedIn && (
        <div>
          <h1>Welcome {user.name} </h1>
          <p> Your email: {user.email} </p>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      )} */}


      <div className="d-flex justify-content-center p-3  row">

        <div className="col-md-6">

          {user.email ? (
            <div>
              <h1>Welcome {user.displayName} </h1>
              <p> Your email: {user.email} </p>

              <button onClick={handleSignOut} type="button" className="btn btn-info w-100 mb-4">
                {" "}
                <span onClick={handleSignOut} className="fa fa-google me-2 "> </span> Sign out
              </button>
            </div>
          ) :
            (<>
              <div className="py-2 text-center">
                <h3 className="" id="">
                  Register
                </h3>

              </div>
              <button onClick={handleSignIn} type="button" className="btn btn-info w-100 mb-4">
                {" "}
                <span className="fa fa-google me-2 "> </span> Sign in with
                google{" "}
              </button>
              <button type="button" className="btn btn-info w-100 mb-4">
                {" "}
                <span className="fa fa-facebook me-2 "> </span> Sign in with
                Facebook{" "}
              </button>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label htmlFor="exampleInputName" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                  onBlur={handleName}
                  // required

                  />

                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onBlur={handleEmail}
                    required
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    onBlur={handlePassword}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    required
                  />
                </div>

                <button type="submit" className="w-100 btn btn-outline-info mt-3">
                  Submit
                </button>
              </form>
             
                <div className="pt-2">
                {user.email? (<p style={{ color: "green" }}>
                 {success}
                </p>):
                (<p style={{ color: "red" }}>{error}</p>)
                }
            
                
                </div>
              <Link to="/login">
                <p className="py-4">already have an account? please Log In</p>
              </Link>


            </>)


          }

        </div>
      </div>

    </>
  );
};

export default Signup;