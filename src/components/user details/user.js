import React from 'react'
import apca from '../../assets/images/apca.svg'
import './user.css'
export default function user() {
  return (
    <div className="userDetails">
      <div className="row pt-5">
      <div className="col-sm-12 col-lg-12">
        <h3 className="offset-5"> User Details</h3>
        <form className="form offset-3">
        <input type="name" placeholder="Full name"  name="name" className="form-control" style={{width:'250px'}}/>
        <input type="text" placeholder="Username" className="form-control" name="pass"style={{width:'250px'}}/>
        <input type="password" placeholder="Password" name="pass" className="form-control"style={{width:'250px'}}/>
        <input type="number" placeholder="CNIC" className="form-control" name="pass"style={{width:'250px'}}/>
        <input type="number" placeholder="Mobile number" className="form-control"style={{width:'250px'}}/>
        <input type="text" placeholder="DOB" className="form-control" name="pass"style={{width:'250px'}}/>
        <input type="Qualification" placeholder="Qualification" className="form-control" name="pass"style={{width:'250px'}}/>
        <input type="text" placeholder="Station" className="form-control" name="pass"style={{width:'250px'}}/>
        <input type="Address" placeholder="Address" className="form-control"style={{width:'250px'}}/>
        <input type="text" placeholder="First Appointment" className="form-control"style={{width:'250px'}}/><br/>
         <button className="control-button ">Submit</button>&nbsp;
        </form>
        
    </div>
{/* <div className="col-sm-4 col-lg-4">
        <img src={apca} className="apca  "/>
        </div> */}
        
      </div>
    </div>
    
      
    

    
  )
}