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
                      {/* <Link className="nav-link" to="donation" id="ten">
                        Donate Here
                      </Link> */}
                    </li>
                    <li className="nav-item">
                      {admin && (
                        <Link className="nav-link" to="ImageUpload" id="ten">
                          Upload File
                        </Link>
                      )}
                    </li>
                    <li className="nav-item"></li>
                    <li className="nav-item">
                      {admin && (
                        <Link className="nav-link" to="userdetails" id="sixth">
                          User Details
                        </Link>
                      )}
                    </li>
                    <li className="nav-item"></li>
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
                    <NavDropdown
                    className="navdropDown   " style={{border: "solid ", backgroundColor: "white", marginLeft: "65rem"}}
                    title={
                      <span>
                        <BsThreeDotsVertical  />
                      </span>
                    }
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item
                      onClick={() => {
                        history.push("Admin");
                      }}
                    >
                      Admin
                    </NavDropdown.Item>
                  </NavDropdown>
                  </ul>
       
                  <div className="offset-4" style={{backgroundColor: "white"}}>
                    {auth?.currentUser?.uid && (
                      <NavDropdown title={auth?.currentUser?.email}>
                        <NavDropdown.Item
                          onClick={() => {
                            auth?.signOut();
                          }}
                        >
                          Logout
                        </NavDropdown.Item>
                      </NavDropdown>
                    )}
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
