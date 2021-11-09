import React from 'react'
import madik from '../../assets/images/education1.jpg'
import im1 from '../../assets/images/money1.jpg'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import im2 from '../../assets/images/money2.jpeg'
import { Icon} from "react-icons/ai";
import './Home.css'
import Navbar from "../navbar/Navbar"
import slider1 from "../../assets/images/education1.jpg";
import donation from '../../assets/images/donation.png';

export default function Home() {
    return (
        // <div className='container-fluid'> 
           
        
        //    <img src={slider1} className='img-fluid' />        
                
            
        // </div>
<>
 <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
  
    <div className="carousel-item active">
    <div className="row">
      <div className="col-sm-3  cumstim_donate">
      {/* <button className='btn btn-success mt-4'>Donate Here</button> */}
      
      <button class="btnik">Donate Here</button>
    <img className="donation" src={donation}/>
      </div>
    </div>
    
      <img src={madik} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <button class="btnik">Donate Here</button>
        <img className="donation" src={donation}/>
      <img src={im1} className="d-block w-100" alt=""/>
    </div>
    <div className="carousel-item">
    <button class="btnik">Donate Here</button>
        <img className="donation" src={donation}/>
      <img src={im2} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* <button className='btn btn-danger mt-4'>donation button</button> */}
</>
    )
}
