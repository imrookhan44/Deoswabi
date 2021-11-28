import "../Signup/Signup.css";
import signup from "../../assets/images/signup.jpg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

function Signup() {
  return (
    <div>
      <div className=" mt-4 adminpanel ">
        <div className="row mt-5">
          <div className=" col-4 mt-5 offset-3   ">
            <h3 className="admin mt-1 offset-5   pt-1">SignUp </h3>
            <div className="row-signup offset-3">
              <div className="col-lg-6 ">
              <input
                type="Name"
                className="form-controlssss pt-2  "
                placeholder="Name"
              ></input>
              <input
                type="Name"
                className="form-controlssss pt-2 "
                placeholder="Full Name"
              ></input>
              <input
                type="Number"
                className="form-controlssss pt-2 "
                placeholder="Phone Number"
              ></input>
              <input
                type="Email"
                className="form-controlssss pt-2 "
                placeholder="Email"
              ></input>
              <input
                type="Password"
                className="form-controlssss pt-2 "
                placeholder="Password"
              ></input>
              </div>
            </div>

            <div>
              {" "}
              <button className="btn btn-primary mt-4 offset-5" id="button">
                SignUp
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
