import React from "react";
import apca from "../../assets/images/apca.svg";
import "./user.css";
export default function user() {
  return (
    <div className="userDetails mt-4">
      <div className="row pt-5">
        <div className="col-sm-12 col-lg-12">
          <h3 className="offset-4"> User Details</h3>
          <form className="form offset-3">
            <input
              type="name"
              placeholder="Full name"
              name="name"
              className="form-control"
      
            />
            <input
              type="text"
              placeholder="Username"
              className="form-control"
              name="pass"
              
            />
            <input
              type="password"
              placeholder="Password"
              name="pass"
              className="form-control"
             
            />
            <input
              type="number"
              placeholder="CNIC"
              className="form-control"
              name="pass"
              
            />
            <input
              type="number"
              placeholder="Mobile number"
              className="form-control"
            
            />
            <input
              type="text"
              placeholder="DOB"
              className="form-control"
              name="pass"
            
            />
            <input
              type="Qualification"
              placeholder="Qualification"
              className="form-control"
              name="pass"
          
            />
            <input
              type="text"
              placeholder="Station"
              className="form-control"
              name="pass"
          
            />
            <input
              type="Address"
              placeholder="Address"
              className="form-control"
      
            />
            <input
              type="text"
              placeholder="First Appointment"
              className="form-control"
      
            />
            <br />
            <button className="btn-primary  control-button " id="bTN">Submit</button>&nbsp;
          </form>
        </div>
      </div>
    </div>
  );
}
