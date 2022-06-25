import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { auth, db } from "../firebase";
import logo from "../../assets/images/apcalogo1.png";
import { Navbar, NavDropdown } from "react-bootstrap";
import Navbar2 from "./Navbar2";
export default function Home({ admin }) {
  console.log("admin:", admin);
  let history = useHistory();
  const [currentUser, setUserDetails] = useState(null);
  return (
    <>
      <div className="container-fluid" id="Main">
        <Navbar2 />

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



                  <div className="abccc">

                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        {!admin && (
                          <Link className="nav-link" to="/Home" id="first">
                            {" "}
                            Home{" "}
                          </Link>
                        )}

                      </li>
                      <li className="nav-item">
                        {admin && (
                          <Link className="nav-link" to="importLink" id="ten">
                            Upload Links
                          </Link>
                        )}
                      </li>
                      <li className="nav-item">
                        {admin && (
                          <Link className="nav-link" to="navbarLink" id="ten">
                            Links
                          </Link>
                        )}
                      </li>
                      <li className="nav-item">
                        {admin && (
                          <Link className="nav-link" to="ImageUpload" id="ten">
                            Upload Files
                          </Link>
                        )}
                      </li>

                      <li className="nav-item">


                        {admin && (
                          <Link className="nav-link" to="news" id="sixth">
                            News
                          </Link>
                        )}
                      </li>
                      <li className="nav-item">
                        {admin && (
                          <Link className="nav-link" to="adminPage" id="sixth">
                            School Status
                          </Link>
                        )}
                      </li>
                      <li className="nav-item">
                        {admin && (
                          <Link className="nav-link" to="manageUser" id="sixth">
                            ManageUsers
                          </Link>
                        )}
                      </li>
                      <li className="nav-item">
                        {admin && (
                          <Link className="nav-link" to="Download" id="ten">
                            Download
                          </Link>
                        )}
                      </li>
                      <li className="nav-item">
                        {!admin && (
                          <Link
                            className="nav-link"
                            to="SchoolStatus"
                            id="second"
                          >
                            School Status
                          </Link>
                        )}
                      </li>
                      <li className="nav-item">
                        {admin && (
                          <Link
                            className="nav-link"
                            to="AllData"
                            id="second"

                          >
                            All Data
                          </Link>
                        )}
                      </li>
                      <li className="nav-item">
                        {admin && (
                          <Link
                            className="nav-link"
                            to="attendance"
                            id="second"
                          >
                            Attendance
                          </Link>
                        )}
                      </li>
                      <li className="nav-item">
                        {!admin && (
                          <Link
                            className="nav-link"
                            to="attendance1"
                            id="second"
                          >
                            Attendance
                          </Link>
                        )}
                      </li>
                      <li className="nav-item">
                        {!admin && (
                          <Link
                            className="nav-link"
                            to="donation"
                            id="second"
                          >
                            Donation
                          </Link>
                        )}
                      </li>
                    </ul>
                  </div>
                  <div className="aabc" style={{ backgroundColor: "white" }}>
                    {auth?.currentUser?.uid && (
                      <NavDropdown
                        title={auth?.currentUser?.email} className="Logout"  >
                        <NavDropdown.Item
                          onClick={() => {
                            auth?.signOut().then(res => console.log("sign out res ", res)).catch(e => console.error(e))
                            history.push("/login")
                            console.log("signOut:", currentUser)
                            window.location.reload();
                          }}
                        >
                          Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                    )}
                  </div>&nbsp;
                  <div className="logaandSign" >
                    <button type="button" className="btn btn-info mx-2"
                      onClick={() => {
                        history.push("userDetails");
                      }}
                    >Sign-up</button>
                    <button type="button" className="btn btn-outline-info "

                      onClick={() => {
                        history.push("login");
                      }}
                    >Login</button>
                  </div>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}
