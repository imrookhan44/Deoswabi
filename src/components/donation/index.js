import React from "react";
import { Link } from "react-router-dom";
import easypaisa from "../../assets/images/easypaisa.jpg";
import bank from "../../assets/images/bank.png";
import cnic from "../../assets/images/cnic.jpg";
import "./index.css";

export default function index() {
  return (
    <div className="container ms-5">
      <div className="row pt-5 ">
        <div className=" colssss  col-lg-4 col-md-4  col-sm-4">
          <td>
            <Link to="/EasyDonation">
              <img src={easypaisa} className="im1" alt="easyPaisaImage" />
            </Link>
          </td>
        </div>
        <div
          className=" colssss col-lg-4 col-md-4 col-sm-4 "
          
        >
          <td>
            <Link to="/BankDonation">
              <img src={bank} className="im1" alt="bankDonationImage" />
            </Link>
          </td>
        </div>
        <div className=" colssss col-lg-4  col-md-4 col-sm-4   ">
          <td>
            <Link to="/CnicDonation">
              <img src={cnic} className="im1" alt="CnicDonationImage" />
            </Link>
          </td>
        </div>
      </div>
      <tr></tr>
    </div>
  );
}
