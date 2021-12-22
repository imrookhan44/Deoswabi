import React from "react";
import "./EasyDonation.css";

function EasyDonation() {
  return (
    <div>
      <div className=" mt-5 adminpanel ">
        <div className="row">
          <div className=" col-12 pt-5  ">
            <h3 className="admins offset-3">EasyPaisa Donation</h3>
            <div className="row-easypaisa offset-3">
              <b>Enter Receiver's Details</b> <br />
              Enter Mobile Number
              <input
                type="Number"
                className="form-controls23 mt-2 p-2 "
                placeholder="Account Here"
              ></input>
              <input
                Password="password"
                type="Number"
                className="form-controls23 mt-2 p-2"
                placeholder="Pin Here"
              />
              <div>
                {" "}
                <button className="btn btn-primary mt-4 offset-4  " id="button">
                  Next
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EasyDonation;
