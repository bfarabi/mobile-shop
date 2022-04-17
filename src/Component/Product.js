import React from "react";
import { DATA } from "./../Data";
import { NavLink } from 'react-router-dom';

const Product = () => {
  const cardItem = (item) => {
    return (
      <div className="card  my-5 p-2 " key={item.id} style={{ width: "18rem" }}>
        <img src={item.img} className="card-img-top" alt={item.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{item.title}</h5>
          <p className="lead">${item.price}</p>

          <NavLink to={`/products/${item.id}`} className="btn btn-outline-info text-uppercase fw-bold">
            buy now
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-3">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Products</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-around">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
