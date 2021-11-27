import React from 'react'
import { Formik, Form, Field } from 'formik';
import './Login.css'
import login from '../../assets/images/login.jpg'
import human from '../../assets/images/human.jpg'

export default function Login() {
    return (

//         <div class="">

//             <div className='container-fluid'>
//                 <div className='row'>
//                     <div className='col-sm-4'>
// &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//  <img className='img-fluid' src={login}/>
//  <br />
// 
//                         <form >
//                             <input className="border" type="text" placeholder="Username" style={{ outline: "none", borderRadius: "20px", width: "70%", padding: "12px 20px", margin: "8px 0px", display: "inline-block", border: "1px solid #ccc", boxsizing: "border-box", backgroundcolor: "#f1f1f1" }}></input><br />
//                             <input className="border" type="password" placeholder="Password" style={{ outline: "none", borderRadius: "20px", width: "70%", padding: "12px 20px", margin: "8px 0px", display: "inline-block", border: "1px solid #ccc", boxsizing: "border-box", backgroundcolor: "#f1f1f1" }}></input><br /><br />
//                             <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input> <b>Remember Username</b> <br /><br />
//                            &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <button className="k" style={{ width: "30%", borderRadius: "20px", height: "6vh"}}>Sign In</button>
//                         </form>
//                     </div>
//                     <div className='col-sm-8'>
//                     <br />
//                     <br />
//                     <img className='img' src={human}/>
//                     </div>
//                 </div>
//             </div>
//         </div>
<div className=" userDetails" style={{width:'500px'}}>
      <div className="row pt-4 ">
      <div className="col-sm-12 col-lg-12">
        <p style={{marginLeft:'100px'}}>
          {/* <img className='img-fluid' src={login}/> */}
         <h2 className="h2">APCA Education</h2>
        <h4> All Pakistan Clerk Association</h4>
      </p>
         
        <form className="sign Up" style={{marginLeft:'100px',width:'250px',marginTop:'60px'}}>
        <input type="text" placeholder="Username"  name="name" className="form-control"title="Please enter your full name"/><br/>
        <input type="password" placeholder="Password" name="pass" className="form-control"title="Please enter your password"/><br/>
     <input type="checkbox"></input> <b>Remember Username</b> 
        <button className="btn btn-primary mt-4">Sign In</button>
        </form>  
    </div>

        {/* <div className="col-sm-6 col-lg-6">
        <img src={human}className='imgimgimg' style={{width:'400px',height:'300px'}}/>
        </div> */}
      </div> 
    </div>

    )
}
