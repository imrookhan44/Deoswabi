import "../Signup/Signup.css";
import signup from "../../assets/images/signup.jpg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { useFormik, ErrorMessage } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("First name is required." )
    .min(4, "Minimum 4 characters required"),
  
  password: yup
    .string()
    .required("password is required.")
    .min(6, "Minimum 6 characters required"),
  repeatPassword: yup
    .string()
    .required("password is required.")
    .min(6, "Minimum 6 characters required"),
  mobileNumber: yup.number("enter valid number")
  .integer()
});

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      mobileNumber: undefined,
      password: "",
      repeatPassword: "",
    },
    onSubmit: (values) => {
      alert(
        "Registration Form Submitted \n " + JSON.stringify(values, null, 2)
      );
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const handleSubmit = async (e) => {
    // e.preventdefault()
    console.log(email, password);
    try {
      const result = await auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          console.log("res ", res);
          history.push("/");
        });
      // window.M.toast({ html: 'welcome ${result,user,email}', classes: "green " })
      console.log("RESULT CONST :", result);
    } catch (err) {
      console.log("err ;  :", err);
      // window.M.toast({ html: err.messsage, classes: "green " })
    }
  };

  return (
    // <div className="container-fluid">
    //     <div className="container mt-5 ">
    //         <div className="row mt-5 ">
    //             <div className="col-sm-3 offset-0">
    //                 <h3 className="signup mt-5">Sign Up</h3>
    //                 <input type='text' className='form-control pt-4' placeholder='Full Name'  title="Please Enter your full name"></input>
    //                 <input type="number" className="form-control pt-4" placeholder='Phone Number'></input>
    //                 {/* <input type="email" className="form-control pt-4" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input> */}
    //                 <input type="password" className="form-control pt-4" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
    //                 <input type="password" className="form-control pt-4" placeholder="Repeat Password" />
    //                 <button className="btn btn-primary mt-4"  onClick={() => handleSubmit()}>Register</button>
    //                 <p className=' mt-2'>Already have an account <Link to='/signin'>Sign In?</Link> </p>
    //             </div>
    //             <div className='col-sm-3 mt-5'>
    //                 <img src={signup} alt='signup' />
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className=" userDetails pt-4">
      <div className="row pt-4 ">
        <div className="col-sm-6 col-lg-6">
          <h2 style={{ marginLeft: "120px", marginTop: "100px" }}> Sign Up</h2>
          <form autoComplete="off"
            className="sign Up"
            style={{ marginLeft: "100px", width: "250px" }}
            onSubmit={formik.handleSubmit}
          >
            <input
              type="name"
              placeholder="Full name"
              name="name"
              className="form-control"
              title="Please enter your full name"
              {...formik.getFieldProps("fullName")}
            />
            {renderErrorMessage("fullName")}
            <input
              type="number"
              placeholder="Phone Number"
              className="form-control"
              name="pass"
              title="Please enter only number"
              {...formik.getFieldProps("mobileNumber")}
            />
            {renderErrorMessage("mobileNumber")}
            <input
              type="password"
              placeholder="Password"
              name="pass"
              className="form-control"
              title="Please enter your password"
              {...formik.getFieldProps("password")}
            />
            {renderErrorMessage("password")}
            <input
              type="password"
              placeholder="Repeat Password"
              name="pass"
              className="form-control"
              title="Please enter your conform password"
              {...formik.getFieldProps("repeatPassword")}
            />
            {renderErrorMessage("repeatPassword")}
            <button
              className="btn btn-primary mt-4"
              onClick={() => handleSubmit()}
            >
              Register
            </button>
            <p className=" mt-2">
              Already have an account <Link to="/signin">Sign In?</Link>{" "}
            </p>
          </form>
        </div>

        <div className="col-sm-6 col-lg-6">
          <img src={signup} className="imgimgimg" />
        </div>
      </div>
    </div>
  );
}
