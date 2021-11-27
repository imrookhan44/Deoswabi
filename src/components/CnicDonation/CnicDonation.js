import React from "react";
import './CnicDonation.css';

function CnicDonation() {
  return (
    <div>
      <div className=" mt-5 adminpanel ">
        <div className="row ">
          <div className=" col pt-5">
            <h3 className="admin mt-4  ">CNIC Transaction</h3>
            <div className="row-cnic">
            <input
              type="Number"
              className="form-controlss pt-2 "
              placeholder="CNIC Here"
            ></input>
            &nbsp;
            {/* <input
              type="password"
              className="form-controls mt-2 pt-2"
              placeholder="Pin Here"
            /> */}
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
