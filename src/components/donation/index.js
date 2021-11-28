import React from 'react'
import { Link } from 'react-router-dom'
import easypaisa from '../../assets/images/easypaisa.jpg';
import bank from '../../assets/images/bank.png';
import cnic from '../../assets/images/cnic.jpg';

export default function index() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-3  col-sm-3 offset-1">
                <td><Link to= '/donation/easyDonation'><img src={easypaisa} className="im1"/></Link></td>
                </div>
                <div className="col-lg-3 col-md-3  col-sm-3 offset-1">
                <td><Link to= '/BankDonation/BankDonation'><img src={bank} className="im1"/></Link></td>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 offset-1  ">
                <td><Link to= '/CnicDonation/CnicDonation'><img src={cnic} className="im1"/></Link></td>
                </div>
            </div>
            <tr> 
        
        
           </tr>
        </div>
    )
}
