import React from "react";
import "./Admin.css";

function Admin() {
  return (
    <div>
      <div className=" mt-5 adminpanel ">
        <div className="row ">
          <div className=" col-4 offset-4 pt-3  ">
            <h3 className="admin mt-5">Admin</h3>
            <input
              type="number"
              className="form-controls pt-2 "
              placeholder="Phone Number"
            ></input>
            &nbsp;
            <input
              type="password"
              className="form-controls mt-2 pt-2"
              placeholder="Password"
            />
            <div>
              {" "}
              <button className="btn btn-primary mt-4   " id="button">
                Login
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

export default Admin;


