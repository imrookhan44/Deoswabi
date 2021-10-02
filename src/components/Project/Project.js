import React from 'react'
import '../Project/Project.css'
import { IoLogoFacebook } from "react-icons/io"
import { GrInstagram } from "react-icons/gr"
import { FiTwitter } from "react-icons/fi"
import { SiWhatsapp } from "react-icons/si"
const Project = () => {
    return (
        <>
            <div className="">
                <div className="four-sides ">
                    <div className="mt-3 four-side" >
                        <div className="footer-col">
                            <div className="footer-col2 ">
                                <h4 >New Paisa</h4>
                                <ul>
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Awards</a>
                                    </li>
                                    <li>
                                        <a href="#">Press</a>
                                    </li>
                                    <li>
                                        <a href="#">Work With Us</a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="footer-col">
                            <h4 >Helps</h4>
                            <ul>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li>
                                <a href="#">Schedule of Change</a>
                                </li>
                                <li>
                                    <a href="#">FAQs</a>
                                </li>

                            </ul>
                        </div>


                        <div className="footer-col">
                            <h4 >Policy</h4>
                            <ul>
                                <li>
                                    <a href="#">Contact us</a>
                                </li>
                                <li>
                                <a href="#">Schedule of Change</a>
                                </li>
                                <li>
                                    <a href="#">FAQS</a>
                                </li>


                            </ul>
                        </div>


                        <div className="footer-col">
                            <h4 > Contact Us</h4>
                            <div className="social-links">
                                <a href="">
                                    <IoLogoFacebook style={{ fontSize: "30px", color: " #4267B2" }} />
                                </a>
                                <a href="">
                                    <GrInstagram  />
                                </a>
                                <a href="">
                                    <FiTwitter style={{ fontSize: "30px", color: "   #1DA1F2" }} />
                                </a>
                                <a href="">
                                    <SiWhatsapp style={{ fontSize: "30px", color: "#de4b69" }} />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Project
