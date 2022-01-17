import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import logo from "../../assets/images/apcalogo1.png";
import { Navbar, NavDropdown } from "react-bootstrap";
import { auth } from "../firebase";
function AdminNavbar() {
  return (
    <div>
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
                      <li className="nav-item active"></li>
                      <li className="nav-item"></li>
                      <li className="nav-item"></li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/adminpage" id="second">
                        Admin
                      </Link>
                    </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="ImageUpload" id="ten">
                          Upload File
                        </Link>
                      </li>
                      <li className="nav-item"></li>
                      <li className="nav-item">
                        <Link className="nav-link" to="userdetails" id="sixth">
                          User Details
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Navbar.Collapse>
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
              </Navbar>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default AdminNavbar;
