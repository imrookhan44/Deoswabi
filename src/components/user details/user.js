import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./user.css";
import { db, auth } from "../firebase";
toast.configure();
const User = () => {
  const notify = () => toast("Form Successfully Submitted");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [cnic, setCnic] = useState("");

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [qualification, setQualification] = useState("");
  const [station, setStation] = useState("");
  const [address, setAddress] = useState("");
  const [firstAppointment, setAppointment] = useState("");
  const [loader, setLoader] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const result = await auth.createUserWithEmailAndPassword(email, password);
    e.preventDefault();
    setLoader(true);
    db.collection("clerks")
      .add({
        fullName: fullName,
        password: password,
        cnic: cnic,
        email: email,
        mobile: mobile,
        dateOfBirth: dateOfBirth,
        qualification: qualification,
        station: station,
        address: address,
        firstAppointment: firstAppointment,
      })
      .then(() => {
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setFullName("");
    setPassword("");
    setCnic("");
    setEmail("");
    setMobile("");
    setDateOfBirth("");
    setQualification("");
    setStation("");
    setAddress("");
    setAppointment("");
  };
  return (
  
    <div className="userDetails mt-2">
      <div className="row pt-1">
        <div className="col-sm-12 col-lg-12 col-md-12">
          <h3 className="offset-5"> User Details</h3>
          <form
            autoComplete="off"
            className="form offset-3"
            onSubmit={handleSubmit} >
            <input
              value={fullName}
              required="required"
              type="name"
              placeholder="Full name"
              name="name"
              className="form-control1"
              onChange={(e) => setFullName(e.target.value)}
            />

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
              value={cnic}
              required="required"
              type="number"
              placeholder="CNIC"
              className="form-control1"
              name="pass"
              onChange={(e) => setCnic(e.target.value)}
            />

            <input
              required="required"
              value={email}
              type="email"
              placeholder="Email Address"
              className="form-control1"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              required="required"
              value={mobile}
              type="number"
              placeholder="Mobile number"
              className="form-control1"
              onChange={(e) => setMobile(e.target.value)}
            />

            <input
              required="required"
              value={dateOfBirth}
              type="date"
              id="birthday"
              name="birthday"
              className="form-control1"
              onChange={(e) => setDateOfBirth(e.target.value)}
            />

            <input
              required="required"
              value={qualification}
              type="Qualification"
              placeholder="Qualification"
              className="form-control1"
              name="pass"
              onChange={(e) => setQualification(e.target.value)}
            />

            <input
              required="required"
              value={station}
              type="text"
              placeholder="Station"
              className="form-control1"
              name="pass"
              onChange={(e) => setStation(e.target.value)}
            />

            <input
              required="required"
              value={address}
              type="Address"
              placeholder="Address"
              className="form-control1"
              onChange={(e) => setAddress(e.target.value)}
            />

            <input
              required="required"
              value={firstAppointment}
              type="text"
              placeholder="First Appointment"
              className="form-control1"
              onChange={(e) => setAppointment(e.target.value)}
            />

            <br />
           <div className="submitbtnuser">

            <button
              className="btn-primary  controlbutton "
              id="bTN"
              onClick={notify}
              
              >
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
