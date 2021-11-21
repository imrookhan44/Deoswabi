import React from 'react';
import apca from '../../assets/images/apca.svg'

const easyDonation = () => {
    return (
      
      
      <div className="container-fluid userDetails">
      <div className="row pt-4">
        <div className="col-sm-6">
        <img src={apca} className="apca"/>
        </div>
        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        <div className="col-sm-6">
        <h2> <font color="blue">Enter Details</font></h2>
        <form className="form">
        <input type="name" placeholder="CNIC/PHONE"  name="name" className="form-control" style={{width:'200px'}}/><br/>
        {/* <input type="password" placeholder="Password" className="form-control" name="pass" style={{width:'200px'}}/><br/> */}
         <button style={{backgroundColor:'rgb(10, 78, 206)',width:'100px',color:'white',height:'40px',borderRadius:'10px',border:'none'}}>Submit</button>
        </form>
    </div>
      </div>
    </div>
          
      
    );
}
export default easyDonation;