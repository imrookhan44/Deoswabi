import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { auth, db } from "../firebase";
import logo from "../../assets/images/apcalogo1.png";
import { Navbar, NavDropdown } from "react-bootstrap";
// import { auth } from "../firebase";
import { BsThreeDotsVertical, RiAccountCircleFill } from "react-icons/all";

export default function Home({ admin }) {
  console.log("admin:", admin);
  let history = useHistory();
  const [currentUser, setUserDetails] = useState(null);
  // useEffect(() => {
  //   if (auth?.currentUser?.email) {
  //     console.log(" user ", auth?.currentUser?.email);
  //     db.collection("clerksData")
  //       .where("email", "==", auth?.currentUser?.email)
  //       .get()
  //       .then((res) => {
  //         console.log("current user details", res.docs.map((item) => item.data()));
  //         let user = res.docs.map((item) => item.data());
  //         user = user[0];
  //         setUserDetails(user);
  //       })
  //       .catch((e) => console.error(e));

  //   }
  //   // });
  // }, []);
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
                    {/* <li className="nav-item">
                      {!admin && (
                        <Link className="nav-link" to="userdetails" id="sixth">
                          Registration
                        </Link>
                      )}
                    </li> */}
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
                          Data Page
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
                    {/* <li className="nav-item">
                      {!admin && (
                        <Link
                          className="nav-link"
                          to="admin"
                          id="second"
                          onClick={() => {
                            history.push("Admin");
                          }}
                        >
                          Admin
                        </Link>
                      )}
                    </li> */}
                  </ul>
                  {auth?.currentUser?.uid && (
                    <NavDropdown
                      title={auth?.currentUser?.email} className="Logout offset-6 mr-4"  >

                      <NavDropdown.Item
                        onClick={() => {
                          auth?.signOut().then(res => console.log("sign out res ", res)).catch(e => console.error(e))
                          console.log("signOut:", currentUser)
                          window.location.reload();
                        }}
                      >
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  )}
                </div>
                {/* <NavDropdown
                  className="nav "
                  title={
                    <span>
                      <BsThreeDotsVertical />
                    </span>
                  }
                  id="eleven"
                >
                  <NavDropdown.Item
                  className="item"
                    id="eleven"
                    onClick={() => {
                      history.push("userDetails");
                    }}
                  >
                    Registration
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    id="eleven"
                    onClick={() => {
                      history.push("login");
                    }}
                  >
                    Login
                  </NavDropdown.Item>
                </NavDropdown> */}
                <button on type="button" className="btn btn-primary me-2"
                  onClick={() => {
                    history.push("userDetails");
                  }}
                >Sign-up</button>&nbsp;
                <button type="button" className="btn btn-outline-primary me-2"

                  onClick={() => {
                    history.push("login");
                  }}
                >Login</button>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}
