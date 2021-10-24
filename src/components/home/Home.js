import React from 'react'
import madik from '../../assets/images/education1.jpg'
import im1 from '../../assets/images/money1.jpg'
import im2 from '../../assets/images/money2.jpeg'
import './Home.css'
import Navbar from "../navbar/Navbar"
import slider1 from "../../assets/images/education1.jpg";

export default function Home() {
  return (
    // <div className='container-fluid'> 


    //    <img src={slider1} className='img-fluid' />        


    // </div>

    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={madik} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={im1} class="d-block w-100" alt="" />
        </div>
        <div class="carousel-item">
          <img src={im2} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}
