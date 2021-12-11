import "../Signup/Signup.css";
import signup from "../../assets/images/signup.jpg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Name is required.")
    .min(4, "Minimum 4 characters required"),

  password: yup
    .string()
    .required("password is required.")
    .min(6, "Minimum 6 characters required"),
  repeatPassword: yup
    .string()
    .required("password is required.")
    .min(6, "Minimum 6 characters required"),
  mobileNumber: yup
    .string()
    .required("Enter valid phone")
    .min(10, "minimum 10 characters required"),
});

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      mobileNumber: "",
      password: "",
      repeatPassword: "",
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
  const [email] = useState("");
  const [password] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    console.log(email, password);
    try {
      const result = await auth
        .createUserWithEmailAndPassword(email, password)
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
    <div className=" adminpanel mt-5">
      <div className="row mt-3">
        <div className="col-4 offset-3">
          <h3 className="admin  offset-5   pt-2">SignUp </h3>
          <form
            autoComplete="off"
            className="row-signup offset-3"
            onSubmit={formik.handleSubmit}
          >
            <div>
              <input
                type="name"
                placeholder="Full name"
                name="name"
                className="form-controlsssss pt-2 "
                title="Please enter your full name"
                {...formik.getFieldProps("fullName")}
              />
              {renderErrorMessage("fullName")}
              <input
                type="number"
                placeholder="Phone Number"
                className="form-controlsssss pt-2 "
                name="pass"
                title="Please enter only number"
                {...formik.getFieldProps("mobileNumber")}
              />
              {renderErrorMessage("mobileNumber")}
              <input
                type="password"
                placeholder="Password"
                name="pass"
                className="form-controlsssss pt-2 "
                title="Please enter your password"
                {...formik.getFieldProps("password")}
              />
              {renderErrorMessage("password")}
              <input
                type="password"
                placeholder="Repeat Password"
                name="pass"
                className="form-controlsssss pt-2 "
                title="Please enter your conform password"
                {...formik.getFieldProps("repeatPassword")}
              />
              {renderErrorMessage("repeatPassword")}&nbsp;
              <button
                lassName="btn  mt-4 offset-5"
                id="button"
                onClick={() => handleSubmit()}
              >
                Register
              </button>
              <p className=" mt-2">
                Already have an account <Link to="/signin">Sign In?</Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
