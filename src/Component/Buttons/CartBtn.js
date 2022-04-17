import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const CartBtn = () => {
    const state = useSelector((state) => state.addItem)
    console.log(state)
    return (
        <NavLink to="/cart" className="btn btn-outline-info text-uppercase mx-1 fw-bold">
            <span className="fa fa-shopping-cart me-1"></span> Cart ({state.length})
        </NavLink>
    );
};

export default CartBtn;