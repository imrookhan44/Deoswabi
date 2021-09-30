import React from 'react'
import '../Project/Project.css'
import { IoLogoFacebook } from "react-icons/io"
import { GrInstagram } from "react-icons/gr"
import { FiTwitter } from "react-icons/fi"
import { SiWhatsapp } from "react-icons/si"
const Projeoct = () => {
    return (
        <div>
            <div className="">
                <div className="four-sides">
                    <div className="footer-col">
                        <div className="footer-col ">
                            <h4>New Paisa</h4>
                            <ul>
                                <li>
                                    <a href="link">About Us</a>
                                </li>
                                <li>
                                    <a href="link">Awards</a>
                                </li>
                                <li>
                                    <a href="link">Press</a>
                                </li>
                                <li>
                                    <a href="link">Work With Us</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="margin">
                        <div className="footer-col">
                            <h4>Helps</h4>
                            <ul>
                                <li>
                                    <a href="link">Contact Us</a>
                                </li>
                                <li>
                                    <a href="link">Schedule of Change</a>
                                </li>
                                <li>
                                    <a href="link">FAQs</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="margin">
                        <div className="footer-col">
                            <h4>Policy</h4>
                            <ul>
                                <li>
                                    <a href="link">cotact us</a>
                                </li>
                                <li>
                                    <a href="link">shedule of changes</a>
                                </li>
                                <li>
                                    <a href="link">FAQS</a>
                                </li>


                            </ul>
                        </div>
                    </div>
                    <div className="margin">
                        <div className="footer-col">
                            <h4>Contact Us</h4>
                            <div className="social-links">
                                <a href="https://www.facebook.com/Brainspk-227703549197488">
                                    <IoLogoFacebook style={{ fontSize: "30px", color: " #4267B2" }} />
                                </a>
                                <a href="link">
                                    <GrInstagram style={{ fontSize: "30px", color: "#0077b5" }} />
                                </a>
                                <a href="link">
                                    <FiTwitter style={{ fontSize: "30px", color: "   #1DA1F2" }} />
                                </a>
                                <a href="link">
                                    <SiWhatsapp style={{ fontSize: "30px", color: "#de4b69" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projeoct
