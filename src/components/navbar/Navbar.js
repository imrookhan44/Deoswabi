import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import logo from "../../assets/images/apca logo.png";
import { Navbar } from 'react-bootstrap';
export default function Home() {
    return (
        <>
            <div className='container-fluid'>

                <div className='row'>
                    <div className='col-lg-12 align-self-center' >
                        {/* <nav className="navbar navbar-expand-lg navbar-light bg-white"> */}
                        {/* <Navbar collapseOnSelect expand="lg"> */}
                        {/* <Link className="navbar-brand" to="/"><img style={{ height: '60px' }} src={logo} alt='logo' /></Link> */}

                        <Navbar collapseOnSelect expand="lg">
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
                                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>  */}
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <Link className="navbar-brand" to="/">
                                        <img style={{ height: "70px" }} src={logo} alt="logo" />
                                    </Link>
                                    <ul className="  navbar-nav ">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/">
                                                {" "}
                                                Home{" "}
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="History">
                                                History
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="signup">
                                                Sign Up
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="login">
                                                Login
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="Upload">
                                                Upload
                                            </Link>
                                        </li>
                                        <li className="nav-item"></li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="userdetails">
                                                User Details
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="Download">
                                                Download
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="Admin">
                                                Admin
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link className="nav-link" to="ImageUpload">
                                                ImageUpload
                                            </Link>
                                        </li>
                                        {/* <li> <a h   ef="javascript:void(0)" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-search"></i></a>
                                        </li> */}
                                    </ul>
                                </div>
                            </Navbar.Collapse>
                        </Navbar>
                        {/* </nav> */}
                    </div>
                </div>
            </div>
        </>
    );
}
