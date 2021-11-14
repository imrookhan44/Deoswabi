import React from 'react';
import apca from '../../assets/images/apca.svg'


const easyDonation = () => {
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
        <h2> User Details</h2>
        <form className="form">
        <input type="name" placeholder="Full name"  name="name" className="form-control"/>
        <input type="text" placeholder="Username" className="form-control" name="pass"/>
         <button className="control-button">Submit</button>&nbsp;
        </form>
    </div>
      </div>
    </div>
            </div>
        </>
    );
}
export default easyDonation;