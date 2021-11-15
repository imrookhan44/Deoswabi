import React from 'react';
import apca from '../../assets/images/apca.svg'

const CnicDonation = () => {
    return (
        <>
      <div>
      <div className="container userDetails">
      <div className="row pt-4">
        <div className="col-sm-6">
        <img src={apca} className="apca"/>
        </div>
        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
        <div className="col-sm-6">
        <h2> <font color="blue">Cnic Donation</font></h2>
        <form className="form">
        <input type="name" placeholder="CNIC/PHONE"  name="name" className="form-control"/>
        <input type="password" placeholder="Password" className="form-control" name="pass"/><br/>
         <button style={{backgroundColor:'rgb(10, 78, 206)',width:'100px',color:'white',height:'40px',borderRadius:'10px',border:'none'}}>Submit</button>
        </form>
    </div>
      </div>
    </div>
            </div>
        </>
    );
}
export default CnicDonation;