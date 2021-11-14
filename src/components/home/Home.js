import React, { useState } from 'react'
import madik from '../../assets/images/education1.jpg'
import im1 from '../../assets/images/money1.jpg'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import im2 from '../../assets/images/money2.jpeg'
import { Icon } from "react-icons/ai";
import './Home.css'
import Navbar from "../navbar/Navbar"
import slider1 from "../../assets/images/education1.jpg";
import Donation from '../../assets/images/donation.png';
import easypaisa from '../../assets/images/easypaisa.jpg';
import bank from '../../assets/images/bank.png';
import cnic from '../../assets/images/cnic.jpg';
import { Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const checkbtn = () => {
    console.log('btnchecking', handleShow)
  }
  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal-home">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
          <h2 className="modelbutton">Donate Here </h2>
        </Modal.Header>
        <Modal.Body >
        <tr>
        <td><Link to= '/donation/easyDonation'> <img src={easypaisa} className="im1"/></Link></td>
        <td><a href="home"><img src={bank} className="im1"/></a></td>
        <td><a href="home"><img src={cnic} className="im1"/></a></td>
  
           </tr>

        </Modal.Body>
        
      </Modal>
      
      <div className='container-fluid'>
      <div className='bg_img'>
        <div className='ms-4 ps-4'>
          <img className='img img-responsive custom_width' src={Donation} />
        </div>
      <button className='btn btn-success custom_margin_btn' onClick={handleShow}>Donate Here</button>
      <div className=''></div>
      </div>
      </div>
    </>


  )
}
