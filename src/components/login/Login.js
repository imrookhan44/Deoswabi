import React from 'react'
import "../login/Login.css"
export default function Login() {
    return (
        <div>
            <div className="Main d-flex flex-row justify-content-center align-items-center">

                <div className="Data d-flex flex-column align-items-center justify-content-center p-5">
                    <div className="Logo pb-4">
                    </div>
                    <div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Login ID" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text" id="basic-addon2">Forgot Login id?</span>
                        </div>

                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text" id="basic-addon2">Forgot Password?</span>
                        </div>


                        <div>
                            <button type="button" className="buttons btn btn-secondary m-2">Sign Up</button>
                            <button type="button" className="buttons btn btn-success m-2">Login</button>
                        </div>

                    </div>





                </div>
            </div>
        </div>
    )
}
