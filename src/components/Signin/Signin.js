import "../Signin/signin.css";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

export default function Signin() {
  const [email] = useState("");
  const [password] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    console.log(email, password);
    try {
      const result = await auth
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          console.log("res ", res);
          history.push("/");
        });
      console.log("RESULT CONST :", result);
    } catch (err) {
      console.log("err ;  :", err);
    }
  };

  return (
    <div className=" userDetails" style={{ width: "500px" }}>
      <div className="row pt-4 ">
        <div className="col-sm-6 col-lg-6">
          <h2 style={{ marginLeft: "130px", marginTop: "100px" }}> Sign In</h2>
          <form
            className="sign Up"
            style={{ marginLeft: "120px", width: "200px" }}
          >
            <input
              type="number"
              placeholder="Phone Number"
              className="form-control"
              name="pass"
              title="Please enter only number"
            />
            <input
              type="password"
              placeholder="Password"
              name="pass"
              className="form-control"
              title="Please enter your password"
            />
            <button
              className="btn btn-primary mt-4"
              onClick={() => handleSubmit()}
            >
              Sign In
            </button>
          </form>
        </div>

        <div className="col-sm-6 col-lg-6"></div>
      </div>
    </div>
  );
}
