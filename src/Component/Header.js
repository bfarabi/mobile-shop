import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "./Buttons/CartBtn";
import Login from "./Buttons/Login";
import Signup from './Buttons/Signup';
import useAuth from './../hooks/useAuth';

const Header = () => {

  const { user, handleSignOut } = useAuth();

  console.log(user);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container-fluid py-2 ">
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>


          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/product">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink className="navbar-brand mx-auto fw-bold" to="/">
              MOBILE SHOP
            </NavLink>

            {
              user.email ? (<button onClick={handleSignOut}
                className="btn btn-outline-info text-uppercase mx-1 fw-bold" >
                {/* <span className="fa fa-log-in me-1"></span> */}
                log out
              </button>) : (<>
                <NavLink className="nav-link " to="/sign-up">
                  <button
                    className="btn btn-outline-info text-uppercase mx-1 fw-bold" >
                    <span className="fa fa-user-plus me-1"></span>
                    Register
                  </button>
                </NavLink>
                <NavLink className="nav-link " to="/login">
                  <button
                    className="btn btn-outline-info text-uppercase mx-1 fw-bold" >
                    <span className="fa fa-sign-in me-1"></span>
                    login
                  </button>
                </NavLink>
              </>)
            }
            {user.email && <span className="btn btn-info text-uppercase mx-1 fw-bold">welcome {user.displayName}</span>}

            <CartBtn />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
