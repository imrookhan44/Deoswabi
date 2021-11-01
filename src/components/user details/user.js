import React from 'react'
import apca from '../../assets/images/apca.png'
import './user.css'
export default function user() {
  return (
    <div className="Container d-flex text-allign-center pt-5">
      <div class="container ">
  <div class="row">
    <div class="col">
      <img src={apca} alt="" />
    </div>
    <div class="col">
      <h1 className='heading'>About Me</h1>
      <h3 className="heading2">A Lead UX & UI designer based in Canada</h3>
      <p className="heading3">I design and develop services for customers of all sizes, <br /> specializing in creating stylish, modern websites, web <br /> services and online stores. My passion is to design <br /> digital user experiences through the bold interface and <br />digital user experiences through the bold interface and <br /> meaningful interactions</p>
     
    <div class="row pt-4">
    <div class="col ">
    <h6>Birthday  &nbsp;&nbsp;  / 20/04/2004</h6> 
    <h6>Age  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  / 17</h6> 
    <h6>Residance     / Pakistan</h6>
    <h6>Address  &nbsp;&nbsp; / Islamabad </h6>
    </div>
    <div class="col">
     <h6>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ imadik968@gmail.com </h6>
     <h6>Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/ +923431921863</h6>
     <h6>Skype &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / skype34579  </h6>
     <h6>Freelance &nbsp;/ Available</h6>
    </div>
    </div>
    </div>
    <div className="mainn">
    <div class="row">
    <div class="col">
    <h6 class="count offset-1 h2" data-to="850" data-speed="850">850</h6>
     <p class="text m-0px font-w-600">Happy Clients</p>
    </div>
    <div class="col">
    <h6 class="count offset-1 h2" data-to="850" data-speed="850">850</h6>
     <p class="text m-0px font-w-600">Project Completed</p>
    </div>
    <div class="col">
    <h6 class="count offset-1 h2" data-to="850" data-speed="850">850</h6>
     <p class="text m-0px font-w-600">Photo Capture</p>
    </div>
    <div class="col">
    <h6 class="count offset-1 h2" data-to="850" data-speed="850">850</h6>
     <p class="text m-0px font-w-600">Telephonic Talk</p>
     <div></div>
    </div>
  </div>
    </div>
    </div>
    </div>
    </div>
    
  )
}