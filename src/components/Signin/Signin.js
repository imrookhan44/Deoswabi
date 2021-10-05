import React from 'react'
 import "../Signin/signin.css"
import signin from "../../assets/images/signin.jpg";
export default function Signin() {
    return (
        <div className="container-fluid ">
            <div className="container mt-5 ">
                <div className="row mt-5 ">
                    <div className="col-sm-3 offset-3">
                        <h3 className="signup mt-5">SignIn</h3>
                        <input type="text" className="form-control pt-4" placeholder="Email"></input>
                        <input type="password" className="form-control pt-4" placeholder="Password" />
                        <button type="button" className="btn btn-primary mt-4">Sign In</button>
                    </div>
                    <div className='col-sm-3 mt-5'>
                        <img className='custom_img' src={signin} alt='signup' />
                    </div>
                </div>
            </div>
        </div>
    )
}
