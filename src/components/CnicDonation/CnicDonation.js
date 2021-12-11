import React from "react";
import "./CnicDonation.css";

function CnicDonation() {
  return (
    <div>
      <div className=" mt-5 adminpanel ">
        <div className="row ">
          <div className=" col pt-2">
            <h3 className="admin mt-4  ">CNIC Transfer</h3>
            <br />
            <div className="row-cnic pt-2">
              Enter CNIC Number
              <br />
              <input
                type="Number"
                className="form-controlss p-2 "
                placeholder="for example: 61101-9876543-2"
              ></input>
              <br />
              Enter Mobile Number
              <input
                type="Number"
                className="form-controlss p-2 "
                placeholder="Enter Receiver's Number"
              ></input>
            </div>
            <div>
              {" "}
              <button className="btn btn-primary mt-4" id="button">
                Submit
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CnicDonation;
