import React from "react";
import { Link } from "react-router-dom";
import easypaisa from "../../assets/images/easypaisa.jpg";
import bank from "../../assets/images/bank.png";
import cnic from "../../assets/images/cnic.jpg";
import "./index.css";

export default function index() {
  return (
    <div className="container">
      <div className="row pt-5">
        <div className=" colssss py-2 col-lg-3 col-md-3  col-sm-3 offset-1">
          <td>
            <Link to="/donation">
              <img src={easypaisa} className="im1" />
            </Link>
          </td>
        </div>
        <div className=" colssss col-lg-3 col-md-3  col-sm-3 offset-1" id="col2">
          <td>
            <Link to="/BankDonation">
              <img src={bank} className="im1" />
            </Link>
          </td>
        </div>
        <div className=" colssss col-lg-3 py-2 col-md-3 col-sm-3 offset-1  ">
          <td>
            <Link to="/CnicDonation">
              <img src={cnic} className="im1" />
            </Link>
          </td>
        </div>
      </div>
      <tr></tr>
    </div>
  );
}
