import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import logo from "../../assets/images/apcalogo1.png";
import { Navbar, NavDropdown } from "react-bootstrap";
// import { auth } from "../firebase";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function Home({ admin }) {
  console.log("admin:", admin);
  let history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      if (currentUser) setCurrentUser(currentUser);
      else setCurrentUser(null);
    });
  }, []);
  return (
    <>
      <div className="container-fluid" id="Main">
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
                    <img
                      style={{ height: "45px", width: "45px" }}
                      src={logo}
                      alt="logo"
                    />
                  </Link>
                  <ul className="  navbar-nav ">
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
                          Links
                        </Link>
                      )}
                    </li>
                    <li className="nav-item">
                      {!admin && (
                        <Link className="nav-link" to="navbarLink" id="ten">
                          Links
                        </Link>
                      )}
                    </li>
                    <li className="nav-item">
                      {admin && (
                        <Link className="nav-link" to="ImageUpload" id="ten">
                          Upload
                        </Link>
                      )}
                    </li>
                    <li className="nav-item"></li>
                    <li className="nav-item">
                      {!admin && (
                        <Link className="nav-link" to="userdetails" id="sixth">
                          Registration
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
                          AdminPage
                        </Link>
                      )}
                    </li>
                    <li className="nav-item">
                      {!admin && (
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
                  </ul>

                  {auth?.currentUser?.uid && (
                    <NavDropdown title={auth?.currentUser?.email} className="Logout">
                      <NavDropdown.Item
                        onClick={() => {
                          auth?.signOut();
                        }}
                      >
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}

                  <NavDropdown
                    className="nav  offset-7"
                    title={
                      <span>
                        <BsThreeDotsVertical />
                      </span>
                    }
                    id="eleven"
                  >
                    <NavDropdown.Item
                      id="eleven"
                      onClick={() => {
                        history.push("Admin");
                      }}
                    >
                      Admin
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}
