
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
        <div className=" userDetails pt-4" style={{width:'500px'}}>
      <div className="row pt-4 ">
      <div className="col-sm-12 col-lg-12">
        <h2 style={{marginLeft:'130px',marginTop:'100px'}}> Sign Up</h2>
        <form className="sign Up" style={{marginLeft:'120px',width:'250px'}}>
        <input type="name" placeholder="Full name"  name="name" className="form-control"title="Please enter your full name"/>
        <input type="number" placeholder="Phone Number" className="form-control" name="pass"title="Please enter only number"/>
        <input type="password" placeholder="Password" name="pass" className="form-control"title="Please enter your password"/>
        <input type="password" placeholder="Repeat Password" name="pass" className="form-control"title="Please enter your conform password"/>
        <button className="btn btn-primary mt-4"  onClick={() => handleSubmit()}>Register</button>
        <p className=' mt-2'>Already have an account&nbsp;<Link to='/signin'>Sign In?</Link> </p>
        </form>  
    </div>

        {/* <div className="col-sm-6 col-lg-6">
        <img src={signup}className='imgimgimg'/>
        </div> */}
        
      </div>
    </div>
    )
}
