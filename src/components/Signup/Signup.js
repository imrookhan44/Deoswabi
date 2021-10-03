import React from "react";
import "../Signup/Signup.css";
import signup from "../../assets/images/signup.jpg";
// import { RiUserFill } from 'react-icons/ri';
export default function Signup() {
  return (
    <div className="container-fluid">
      <div className="container mt-5 ">
        <div className="row mt-5 ">
            <div className="col-sm-3 offset-3">
                <h3 className="signup mt-5">SignUp</h3>
                <input type='text' className='form-control pt-4' placeholder='Full Name'></input>
                <input type="text" className="form-control pt-4" placeholder="Email"></input>
                <input type="text" className="form-control pt-4" placeholder='Phone Number'></input>
                <input type="text" className="form-control pt-4" placeholder="Password" />
                <input type="text" className="form-control pt-4" placeholder="Repeat Password" />
                <button type="button" className="btn btn-primary mt-4">Register</button>
                <p className=' mt-2'>Already have an account <a href='/'> Signin </a></p>
                
                
            </div>
            <div className='col-sm-3 mt-5'>
                <img src={signup} alt='signup' />
            </div>
        </div> 
      </div>
    </div>
  );
}
