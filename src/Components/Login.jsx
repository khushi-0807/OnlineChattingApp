import React from "react";

export default function Login() {
  return (
    <>
      <div className="login-bg"></div>
      <div className="login-form-holder">
        <div className="container d-flex justify-content-center align-items-center" style={{ height: " -webkit-fill-available" }}>
          <div className="login-form text-center py-4 px-5 rounded">
            <div className="login-title">Login</div>
            <div class="input-group mb-3 justify-content-center">
              <input className="rounded form-control my-3 p-2" type="text" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              <input className="rounded form-control my-3 p-2" type="password" id="inputPassword5" placeholder="Password" />
              <button type="button" className="btn btn-primary rounded py-2 px-5 my-3">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
