import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import apca from "../../assets/images/apca.svg";
import "./user.css";
import { db, auth } from "../firebase";
import { useFormik } from "formik";
import * as yup from "yup";

toast.configure();

const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Name is required.")
    .min(4, "Minimum 4 characters required"),

  Password: yup
    .string()
    .required("password is required.")
    .min(6, "Minimum 6 characters required"),
  CNIC: yup
    .string()
    .required("Enter your CNIC")
    .min(13, "Minimum 3 characters required"),
  email: yup.string().required("Enter valid Email"),

  mobileNumber: yup
    .string()
    .required("Enter valid phone")
    .min(10, "minimum 10 characters required"),
  dateOfBirth: yup.string().required("Enter Your DateOfBirth"),
  qualification: yup.string().required("Required"),
  station: yup.string().required("Required"),
  address: yup.string().required("Required"),
  appointment: yup.string().required("Required"),
});

const User = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      password: "",
      cnic: "",
      email: "",
      mobileNumber: "",
      dateOfBirth: "",
      qualification: "",
      station: "",
      address: "",
      appointment: "",
    },
    onSubmit: (values) => {
      alert("Form submitted");
    },
    validationSchema: validationSchema,
  });

  const renderErrorMessage = (field) => {
    return (
      formik.touched[field] && (
        <div class="text-error">{formik.errors[field]}</div>
      )
    );
  };
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
        // alert("Your message has been submitted");
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
      <div className="row pt-2">
        <div className="col-sm-12 col-lg-12">
          <h3 className="offset-4"> User Details</h3>
          <form
            autoComplete="off"
            className="form offset-3"
            onSubmit={(handleSubmit, formik.handleSubmit)}
          >
            <input
              value={fullName}
              type="name"
              placeholder="Full name"
              name="name"
              className="form-control"
              onChange={(e) => setFullName(e.target.value)}
              {...formik.getFieldProps("fullName")}
            />
            {renderErrorMessage("fullName")}

            <input
              value={password}
              type="password"
              placeholder="Password"
              name="pass"
              className="form-control"
              {...formik.getFieldProps("Password")}
              onChange={(e) => setPassword(e.target.value)}
            />
            {renderErrorMessage("Password")}
            <input
              {...formik.getFieldProps("CNIC")}
              value={cnic}
              type="number"
              placeholder="CNIC"
              className="form-control"
              name="pass"
              onChange={(e) => setCnic(e.target.value)}
            />
            {renderErrorMessage("CNIC")}
            <input
              {...formik.getFieldProps("email")}
              value={email}
              type="email"
              placeholder="Email Address"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
            {renderErrorMessage("email")}
            <input
              {...formik.getFieldProps("mobile")}
              value={mobile}
              type="number"
              placeholder="Mobile number"
              className="form-control"
              onChange={(e) => setMobile(e.target.value)}
            />
            {renderErrorMessage("mobile")}
            <input
              {...formik.getFieldProps("dateOfBirth")}
              value={dateOfBirth}
              type="date"
              id="birthday"
              name="birthday"
              className="form-control"
              name="pass"
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
            {renderErrorMessage("dateOfBirth")}
            <input
              {...formik.getFieldProps("qualification")}
              value={qualification}
              type="Qualification"
              placeholder="Qualification"
              className="form-control"
              name="pass"
              onChange={(e) => setQualification(e.target.value)}
            />
            {renderErrorMessage("qualification")}
            <input
              value={station}
              {...formik.getFieldProps("station")}
              type="text"
              placeholder="Station"
              className="form-control"
              name="pass"
              onChange={(e) => setStation(e.target.value)}
            />
            {renderErrorMessage("station")}
            <input
              {...formik.getFieldProps("address")}
              value={address}
              type="Address"
              placeholder="Address"
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
            />
            {renderErrorMessage("address")}
            <input
              {...formik.getFieldProps("appointment")}
              value={firstAppointment}
              type="text"
              placeholder="First Appointment"
              className="form-control"
              onChange={(e) => setAppointment(e.target.value)}
            />
            {renderErrorMessage("appointment")}
            <br />
            <button
              className="btn-primary  control-button "
              id="bTN"
              onClick={(notify, handleSubmit)}
              style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default User;
