import React from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase.config";
import { useState } from "react";

import { Link, useNavigate } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';


initializeApp(firebaseConfig);

const Login = () => {

  const { user, handleSignIn, handleSignOut, handleSubmit, handleEmail,
    handlePassword, error, success , loginUser} = useAuth();
  return (
    <>
     <div className="d-flex justify-content-center p-3 row">
            <div className="py-2 text-center">
              <h3 className="" id="">
                Log In
              </h3>
              
            </div>
            <div className="col-md-6">
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
              {user.email ? (
            <div>
              <h1>Welcome {user.displayName}  </h1>
              <p> Your email: {user.email} </p>

              <button onClick={handleSignOut} type="button" className="btn btn-info w-100 mb-4">
                {" "}
                <span onClick={handleSignOut} className="fa fa-google me-2 "> </span> Sign out
              </button>
            </div>
          ) : ( <> 
            <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                  onBlur={handleEmail}
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
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
                  />
                </div>
                
                <button type="submit" className="w-100 btn btn-outline-info">
                  Submit
                </button>
              </form>


          
          </> )
          
          }
          <div className="pt-2">
                {user.email? (<p style={{ color: "green" }}>
                 {success}
                </p>):
                (<p style={{ color: "red" }}>{error}</p>)
                }
            
                
                </div>

              <Link to="/sign-up">
              <p className="py-4">Don't have account? Please create account.</p>
              </Link>
            </div>
          </div>
    </>
  );
};

export default Login;
