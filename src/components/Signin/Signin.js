
 import "../Signin/signin.css"
import signin from "../../assets/images/signin.jpg";
import React, {useState} from 'react'
import {auth} from "../firebase";
import {useHistory} from 'react-router-dom'

export default function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const handleSubmit = async (e) => {
        // e.preventdefault()
        console.log(email, password)
        try {
            const result = await auth.signInWithEmailAndPassword(email, password).then(res => {
                console.log("res ", res);
                history.push('/')
            })
            //  window.M.toast({ html: 'welcome ${result,user,email}', classes: "green " })
            console.log('RESULT CONST :', result);

        } catch (err) {
            console.log('err ;  :', err);
            //  window.M.toast({ html: err.messsage, classes: "green " })
        }
    }



    return (
        // <div className="container-fluid ">
        //     <div className="container mt-5 ">
        //         <div className="row mt-5 ">
        //             <div className="col-sm-3 offset-3">
        //                 <h3 className="signup mt-5">SignIn</h3>
        //                 <input type="number" className="form-control pt-4" placeholder='Phone Number'></input>
        //                 <input type="password" className="form-control pt-4" placeholder="Password"  onChange={(e)=>setPassword(e.target.value)}  />
        //                 <button type="button" className="btn btn-primary mt-4"  onClick={()=> handleSubmit()}>Sign In</button>
        //             </div>
        //             <div className='col-sm-3 mt-5'>
        //                 <img className='custom_img' src={signin} alt='signup'/>
    
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className=" userDetails">
      <div className="row pt-4 ">
      <div className="col-sm-6 col-lg-6">
        <h2 style={{marginLeft:'130px',marginTop:'100px'}}> Sign In</h2>
        <form className="sign Up" style={{marginLeft:'120px',width:'200px'}}>
        <input type="number" placeholder="Phone Number" className="form-control" name="pass" title="Please enter only number"/>
        <input type="password" placeholder="Password" name="pass" className="form-control" title="Please enter your password"/>
        <button className="btn btn-primary mt-4"  onClick={() => handleSubmit()}>Sign In</button>
        {/* <p className=' mt-2'>Already have an account <Link to='/signin'>Sign In?</Link> </p> */}
        </form>  
    </div>

        <div className="col-sm-6 col-lg-6">
        {/* <img src={signin} style={{}} className="imgimgimg1"/> */}
        </div>
        </div>
        </div>
    )
}
