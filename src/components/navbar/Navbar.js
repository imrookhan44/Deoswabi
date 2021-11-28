import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import logo from "../../assets/images/apca logo.png";
import { Navbar } from "react-bootstrap";
export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 align-self-center">
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
                      <Link className="nav-link" to="index">
                        Donate Here
                      </Link>
                    </li>
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
