import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/images/apca logo.png";
import { Navbar } from "react-bootstrap";
import { auth } from "../../../components/firebase";

export default function AdminNavbar() {
  return (
    <>
      <div className="container-fluid" id="Main">
        I am admin
        <div className="row">
          <div className="col-lg-12 align-self-center">
            <div
              onClick={() => {
                auth?.signOut();
              }}
            >
              {" "}
              Admin {auth?.currentUser?.email}{" "}
            </div>
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
                    <img
                      style={{ height: "43px", width: "35px" }}
                      src={logo}
                      alt="logo"
                    />
                  </Link>
                  <ul className="  navbar-nav ">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/" id="first">
                        {" "}
                        admin page 1{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="History" id="second">
                        admin page 2
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="login" id="fourth">
                        Login
                      </Link>
                    </li>

                    <li className="nav-item"></li>
                    <li className="nav-item">
                      <Link className="nav-link" to="userdetails" id="sixth">
                        User Details
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="index" id="ten">
                        Donate Here
                      </Link>
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
