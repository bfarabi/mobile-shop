import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-4 my-4">
        <div className="row">
          <div className="col-md-6">
          <h1 className="text-info text-uppercase fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              fugit aut quod, ab consectetur aperiam mollitia laudantium,
              expedita quae voluptatem quam modi laborum cupiditate eveniet
              placeat necessitatibus! Necessitatibus dolorum dolore repudiandae
              eveniet quisquam ad, quos eos amet modi doloribus doloremque in
              consequatur omnis est saepe tempore aut? Placeat beatae facilis
              voluptas sequi non enim quaerat iure odio dolorem dolores suscipit
              optio accusamus corporis quos mollitia ipsa labore, vero animi
              esse illum in necessitatibus molestias laboriosam! Qui ratione sit
              optio quibusdam? Perspiciatis natus sit magni delectus, odio hic
              exercitationem eum neque excepturi blanditiis! Odio inventore
              voluptates aspernatur facere sint consectetur et?
            </p>
            <NavLink to="/contact" className="btn btn-outline-info text-uppercase fw-bold px-3"> Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
              <img className="w-100" src={require("../Images/aboutimage.jpeg").default} alt="" />
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
