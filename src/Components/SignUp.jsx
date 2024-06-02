import React from "react";

function SignUp() {
  return (
    <div className="SignUp p-5">
      <div className="container d-flex align-items-stretch justify-content-center">
        <div className="SignUp-holder">
          <div class="card rounded-start text-center justify-content-center" style={{ width: "30.5rem", height: "100%" }}>
            <img src="./public/images/signup side image.png" alt="Sign up side image" />
          </div>
        </div>
        <div className="SignUp-holder">
          <div class="card rounded-end text-center" style={{ width: "30.5rem" }}>
            <div class="card-body p-4">
              <h1 class="card-title mb-5">Sign Up</h1>
              <form action="">
                <div class="row mb-3">
                  <label for="username" class="col-sm-4 col-form-label">
                    UserName:
                  </label>
                  <div class="col-sm-8">
                    <input type="text" className="rounded form-control" id="username" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="phone" class="col-sm-4 col-form-label">
                    Phone No:
                  </label>
                  <div class="col-sm-8">
                    <input type="tel" className="rounded form-control" id="phone" pattern="[0-9]{10}" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="email" class="col-sm-4 col-form-label">
                    Email:
                  </label>
                  <div class="col-sm-8">
                    <input type="email" className="rounded form-control" id="email" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="status" class="col-sm-4 col-form-label">
                    Status:
                  </label>
                  <div class="col-sm-8">
                    <input type="text" className="rounded form-control" id="status" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="profile" class="col-sm-4 col-form-label">
                    Profile Photo:
                  </label>
                  <div class="col-sm-8">
                    <input type="file" className="rounded form-control" id="profile" />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary rounded py-2 px-5 mt-5">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
