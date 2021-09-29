import React from 'react'
import "../login/Login.css"
import Logo from "../../assets/login/Logo.png"
export default function Login() {
    return (
        <div>
            <div className="Main d-flex flex-row justify-content-center align-items-center">
            
            <div className="Data d-flex flex-column align-items-center justify-content-center p-5">
                <div className="Logo pb-4">
                    <img src={Logo} alt="Logo"/>
                </div>
            <div>
            <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Login ID" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">Forgot Login id?</span>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Password" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">Forgot Password?</span>
</div>


<div>
<button type="button" class="buttons btn btn-secondary m-2">Sign Up</button>
<button type="button" class="buttons btn btn-success m-2">Login</button>
</div>

            </div>





            </div>
            </div>
        </div>
    )
}
