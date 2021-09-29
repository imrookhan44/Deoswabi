import React from 'react'
import '../footer/Footer.css'
import { IoLogoFacebook } from "react-icons/io"
import { GrInstagram } from "react-icons/gr"
import { FiTwitter } from "react-icons/fi"
import { SiWhatsapp } from "react-icons/si"
const Footer = () => {
    return (
       <div>

            <footer className="footer">



                <div className="container">

                    <div

                        style={{

                            display: "flex",

                        }}>

                        <div className="footer-col">

                            <h4>New Paisa</h4>

                            <ul>

                                <li>

                                    <a href="link">About Us</a>

                                </li>

                                <li>

                                    <a href="link">Awards</a>

                                </li>

                                <li>



                                    <a href="link">Press</a>

                                </li>

                                <li>

                                    <a href="link">Work With Us</a>

                                </li>

                                <li>

                                    <a href="link"></a>

                                </li>

                                <li>

                                    <a href="link"></a>

                                </li>

                            </ul>

                        </div>





                        <div className="footer-col">

                            <h4>Helps</h4>

                            <ul>

                                <li>

                                    <a href="link">Contact Us</a>

                                </li>

                                <li>

                                    <a href="link">Schedule of Change</a>

                                </li>

                                <li>

                                    <a href="link">FAQs</a>

                                </li>

                                <li>

                                    <a href="link"></a>

                                </li>

                            </ul>

                        </div>

                        <div className="footer-col">

                            <h4>Policy</h4>

                            <ul>

                                <li>

                                    <a href="link">umiar amjd</a>

                                </li>

                                <li>

                                    <a href="link">umiar amjd </a>

                                </li>

                                <li>

                                    <a href="link">umiar amjd</a>

                                </li>

                                <li>

                                    <a href="link">umiar amjd</a>

                                </li>

                                <li>

                                    <a href="link">umiar amjd</a>

                                </li>

                            </ul>

                        </div>

                        <div className="footer-col">

                            <h4>Contact Us</h4>




                            <div className="social-links col-sm-6">

                                <div>

                                    <a href="link"><IoLogoFacebook style={{ fontSize: "30px" }} /></a>

                                </div>

                                <div>  <a href="link"><GrInstagram  style={{ fontSize: "30px" }}/> </a></div>




                                <div>

                                    <a href="link"> <FiTwitter style={{ fontSize: "30px" }} /></a>

                                </div>



                                <div>

                                    <a href="link"><SiWhatsapp  style={{ fontSize: "30px" }}/></a>

                                </div>

                            </div>

                            {/* <div className="social-links">

                  <a href="https://www.facebook.com/Brainspk-227703549197488">

                    <AiFillFacebook style={{ fontSize: "30px", color: " #4267B2" }} />

                  </a>

                  <a href="link">

                    <AiFillLinkedin style={{ fontSize: "30px", color: "#0077b5" }} />

                  </a>

                  <a href="link">

                    <AiOutlineTwitter style={{ fontSize: "30px", color: "   #1DA1F2" }} />

                  </a>

                  <a href="link">

                    <AiFillInstagram style={{ fontSize: "30px", color: "#de4b69" }} />

                  </a>

                 </div> */}

                        </div>

                    </div>

                </div>

            </footer>

        </div >



    )

}



export default Footer