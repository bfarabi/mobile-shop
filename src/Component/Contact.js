import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-12 text-center pt-4 my-4">
            <h1>Have Some Question?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 justify-content-center">
            <img
              className="w-75"
              src={require("../Images/email.png").default}
              alt=""
            />
          </div>

          <div className="col-md-6">
            <form action="">
            <div>
              <div className="mb-3">
                <label
                  htmlFor="exampleForm"
                  className="form-label"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleForm"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={5}
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn-outline-info text-uppercase fw-bold" > send message</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
