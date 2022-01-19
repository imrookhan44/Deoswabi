import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./user.css";
import { db, auth } from "../firebase";
toast.configure();
const User = () => {
  const notify = () => toast.success("Form Submitted", "complete form");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [loader, setLoader] = useState('')
  const [formData, setFormData] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const result = await auth.createUserWithEmailAndPassword(email, password);
    if (!email) {
      toast.warning("Please enter all the fields", "Incomplete form");
      return;
    }
    e.preventDefault();
    setLoader(true);

  }
  return (
    <div className="userDetails mt-5">
      <div className="row pt-4">
        <div className="col-sm-12 col-lg-12 col-md-12 mt-5">
          <h3 className=" offset-4 userdetailtext">Registration</h3>
          <form
            autoComplete="off"
            className="form offset-3 userdivform"
            onSubmit={handleSubmit}
          >
            <input
              required="required"
              value={email}
              type="email"
              placeholder="  Email Address"
              className="form-control1"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required="required"
              type="name"
              placeholder="School Name"
              name="name"
              className="form-control1"
            />

            <br />
            <input
              value={password}
              required="required"
              type="password"
              placeholder="Password"
              name="pass"
              className="form-control1"
              onChange={(e) => setPassword(e.target.value)}
            />
                <input
              value={password}
              required="required"
              type="password"
              placeholder="Confirm Password"
              name="pass"
              className="form-control1"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="submitbtnuser">
              <button className="  controlbutton " id="bTN" onClick={notify}  disabled={!email || !password}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default User;
