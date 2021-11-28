import React from "react";
import './EasyDonation.css';

function CnicDonation() {
  return (
    <div>
      <div className=" mt-5 adminpanel ">
        <div className="row ">
          <div className=" col pt-5  ">
            <h3 className="admin mt-3">Easypaisa Donation</h3>
            <div className="row-easypaisa offset-2">
            <input
              type="Number"
              className="form-controlss pt-2 "
              placeholder="Account Here"
            ></input>
            &nbsp;
            <input
              type="password"
              className="form-controls mt-2 pt-2"
              placeholder="Pin Here"
            />
            </div>
            <div>
              {" "}
              <button className="btn btn-primary mt-4   " id="button">
                Submit
              </button>{" "}
            </div>
          </div>

          <div className="  col-sm-3 col-3">
          </div>
        </div>
      </div>
    </div>
  );
}

export default CnicDonation;

