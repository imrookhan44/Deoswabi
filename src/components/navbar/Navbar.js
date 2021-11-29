import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import logo from "../../assets/images/apca logo.png";
import { Navbar } from 'react-bootstrap';

export default function Home() {
    return (
        <>
            <div className='container-fluid' id="Main">

                <div className='row'>
                    <div className='col-lg-12 align-self-center' >
                       
                        <Navbar collapseOnSelect expand="lg" >
                            <Navbar.Toggle
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            />
                            <Navbar.Collapse>
                               
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <Link className="navbar-brand" to="/">
                                        <img style={{ height: "43px", width:"35px" }} src={logo} alt="logo" />
                                    </Link>
                                    <ul className="  navbar-nav ">
                                        <li className="nav-item active">
                                            <Link  className="nav-link" to="/" id="first">
                                                {" "}
                                                Home{" "}
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="History" id="second"> 
                                                History
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="signup" id="third">
                                                Sign Up
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="login" id="fourth">
                                                Login
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="Upload" id="fifth">
                                                Upload
                                            </Link>
                                        </li>
                                        <li className="nav-item"></li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="userdetails" id="sixth">
                                                User Details
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="Download" id="seven">
                                                Download
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="Admin" id="eight">
                                                Admin
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="ImageUpload" id="nine">
                                                ImageUpload
                                            </Link>
                                        </li>
                                        
                                        
                                        <li className="nav-item">
                                            <Link className="nav-link" to="index" id="ten">Donate Here</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                
                    </div>
                </div>
            </div>
        </>
    );
}
