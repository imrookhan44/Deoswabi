import React from 'react'
import apca from '../../assets/images/apca.svg'
import './user.css'
export default function user() {
  return (
    <div className="container userDetails">
      <div className="row pt-4">
        <div className="col-sm-6">
        <img src={apca} className="apca"/>
        </div>{/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        <div className="col-sm-6">
        <h2> User Details</h2>
        <form className="form">
        <input type="name" placeholder="Full name"  name="name" className="form-control"/>
        <input type="text" placeholder="Username" className="form-control" name="pass"/>
        <input type="password" placeholder="Password" name="pass" className="form-control"/>
        <input type="number" placeholder="CNIC" className="form-control" name="pass"/>
        <input type="number" placeholder="Mobile number" className="form-control"/>
        <input type="text" placeholder="DOB" className="form-control" name="pass"/>
        <input type="Qualification" placeholder="Qualification" className="form-control" name="pass"/>
        <input type="text" placeholder="Station" className="form-control" name="pass"/>
        <input type="Address" placeholder="Address" className="form-control"/>
        <input type="text" placeholder="First Appointment" className="form-control"/><br/>
         <button className="control-button">Submit</button>&nbsp;
        </form>
    </div>
      </div>
    </div>
    
      
    

    
  )
}