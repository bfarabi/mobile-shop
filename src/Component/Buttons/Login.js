import React from "react";

const Login = () => {
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-outline-info text-uppercase mx-1 fw-bold"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
      <span className="fa fa-sign-in me-1"></span>
        login
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Login
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <button type="button" class="btn btn-info w-100 mb-4">
                {" "}
                <span className="fa fa-google me-2 "> </span> Sign in with
                google{" "}
              </button>
              <button type="button" class="btn btn-info w-100 mb-4">
                {" "}
                <span className="fa fa-facebook me-2 "> </span> Sign in with
                Facebook{" "}
              </button>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
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
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="w-100 btn btn-outline-info">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
