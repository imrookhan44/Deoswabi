import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import firebase from "firebase";
import { db } from "../firebase";
import "./Login.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useToast } from "react-toastify";
toast.configure();

function Login() {
  
  
  const notify = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        toast("Login Successfully");
      })
      .catch((err) => {
        toast("Register First ");
      })
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(firebase.auth());
  const signInHandler = () => {
    
  }
  return (
    <div>
      <div  autoComplete="off">
        <div className=" mt-5 adminpanel ">
          <div className="row ">
            <div className=" col-5 offset-4 ">
              <h3 className="admin mt-5 pt-4 ">Login Page</h3>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-controls pt-2 "
                placeholder=" Email address"
              
              ></input>
            
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-controls mt-2 pt-2"
                placeholder="Password"
                
              />{" "}
          
              <div className="Checkbox mt-2">
                <input type="checkbox"></input> <b>Remember me</b>
              </div>
              <div>
                {" "}
                <button
                  onClick={(signInHandler, notify)}
                  className="btn btn-primary mt-4"
                  id="button"
                >
                  Login
                </button>{" "}
              </div>
              <br />
            </div>

            <div className>
              {/* <img className="custom-img image " src={signin} alt='signup' /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
