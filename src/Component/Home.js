import React from "react";
import Product from "./Product";
import oneplus10 from "../Images/OnePlus-10-Pro.jpg";
import realme8 from "../Images/Realme-8-5G-image.jpg";

const Home = () => {
  return (
    <div className="bg-light">
      <div
        id="carouselExampleIndicators"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img style={{height: "30rem"}} src="https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item  ">
            <img style={{height: "30rem"}} src={oneplus10} className="d-block w-75 mx-auto  " alt="..." />
          </div>
          <div className="carousel-item ">
            <img style={{height: "30rem"}} src={realme8} className="d-block w-75 mx-auto" alt="..." />
            
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Product/>
    </div>
  );
};

export default Home;
