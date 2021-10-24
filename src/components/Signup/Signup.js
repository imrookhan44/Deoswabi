
import "../Signup/Signup.css";
import signup from "../../assets/images/signup.jpg"; 
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { auth } from "../firebase";
import { useHistory } from 'react-router-dom'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const handleSubmit = async (e) => {
        // e.preventdefault()
        console.log(email, password)
        try {
            const result = await auth.createUserWithEmailAndPassword(email, password).then(res => {
                console.log("res ", res);
                history.push('/')
            })
            // window.M.toast({ html: 'welcome ${result,user,email}', classes: "green " })
            console.log('RESULT CONST :', result);

        } catch (err) {
            console.log('err ;  :', err);
            // window.M.toast({ html: err.messsage, classes: "green " })
        }
    }

    return (
        <div className="container-fluid">
            <div className="container mt-5 ">
                <div className="row mt-5 ">
                    <div className="col-sm-3 offset-3">
                        <h3 className="signup mt-5">Sign Up</h3>
                        <input type='text' className='form-control pt-4' placeholder='Full Name'></input>
                        <input type="number" className="form-control pt-4" placeholder='Phone Number'></input>
                        {/* <input type="email" className="form-control pt-4" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input> */}
                        <input type="password" className="form-control pt-4" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" className="form-control pt-4" placeholder="Repeat Password" />
                        <button className="btn btn-primary mt-4"  onClick={() => handleSubmit()}>Register</button>
                        <p className=' mt-2'>Already have an account <Link to='/signin'>Sign In?</Link> </p>
                    </div>
                    <div className='col-sm-3 mt-5'>
                        <img src={signup} alt='signup' />
                    </div>
                </div>
            </div>
        </div>
    )
}
