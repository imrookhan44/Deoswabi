import React from "react";
import { Formik, Form, Field } from "formik";
import "./Login.css";
import login from "../../assets/images/login.jpg";
import human from "../../assets/images/human.jpg";

function Login() {
  return (
    <div>
      <div className=" mt-4 adminpanel ">
        <div className="row ">
          <div className=" col-4 offset-4 ">
            <h3 className="admin mt-3">Login Page</h3>
            <input
              type="number"
              className="form-controls pt-2 "
              placeholder="Phone Number"
            ></input>
            <input
              type="password"
              className="form-controls mt-2 pt-2"
              placeholder="Password"
            />
            <div className="Checkbox mt-2">
              <input type="checkbox"></input> <b>Remember me</b>
              </div>
            
            <div>
              {" "}
              <button className="btn btn-primary mt-4" id="button">
                Login
              </button>{" "}
            </div>
          </div>

          <div className="  col-sm-3 col-3">
            {/* <img className="custom-img image " src={signin} alt='signup' /> */}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Login;