import React, { useState } from "react";
import firebase from "firebase";
// import { useToasts } from 'react-toast-notifications'
import "./Admin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function Admin() {
  const notify = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        toast("Login Succesfully");
      })
      .catch((err) => {
        toast("invalid Email/Password ");
      });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(firebase.auth());
  const signInHandler = () => {
    // firebase.auth().signInWithEmailAndPassword(email, password)
    // .then((auth) => {
    // })
  };

  return (
    <div>
      <div className=" mt-5 adminpanel ">
        <div className="row ">
          <div className=" col-4 offset-4 pt-3  ">
            <h3 className="admin mt-5">Admin</h3>
            <form>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-controls pt-2 "
                placeholder="Enter your email"
                required="required"
              ></input>

              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-controls mt-2 pt-2"
                placeholder="Password"
                required="required"
              />
            </form>
            <div>
              {" "}
              <button
              onSubmit="return validate()"
                onClick={(signInHandler, notify)}
                className="btn btn-primary mt-4   "
                id="button"
              >
                Login
              </button>{" "}
            </div>
          </div>

          <div className="  col-sm-3 col-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
