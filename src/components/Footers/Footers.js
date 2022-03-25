import React from 'react'
import "./Footers.css"
import apcalogo from '../../assets/images/apcalogo1.png'
import brainspkn from "../../assets/images/brainspkn.png"
import { useHistory } from 'react-router-dom'

function Footers() {

    let history = useHistory()
    return (
        <div className="footers-dark">
            <footer>
                <div className="container-footers">
                    <div className="row-footers ms-5">
                    <div className="col-sm-6 col-md-3 item ">
                          <img className='footerlogo' src={apcalogo} />
                        </div>

                        <div className="col-sm-6 col-md-3 item ">
                            <h3>Deo female swabi</h3>
                            <ul>
                                <li><a type='button' onClick={() => { history.push("/") }}>Home</a></li>
                                <li><a type='button' onClick={() => { history.push("/importLink") }}>Upload Links</a></li>
                                <li><a type='button' onClick={() => { history.push("/navbarLink") }}>Links</a></li>
                                <li><a type='button' onClick={() => { history.push("/ImageUpload") }}>Upload files</a></li>
                                <li><a type='button' onClick={() => { history.push("/news") }}>News</a></li>
                                <li><a type='button' onClick={() => { history.push("/adminPage") }}>School Status</a></li>
                                <li><a type='button' onClick={() => { history.push("/manageUser") }}>Manage Users</a></li>
                                <li><a type='button' onClick={() => { history.push("/Download") }}>Download</a></li>
                                <li><a type='button' onClick={() => { history.push("/AllData") }}>All Data</a></li>
                                <li><a type='button' onClick={() => { history.push("/attendance") }}>Attendance</a></li>
                            </ul>
                        </div>
                        <br />
                        <br />
                        <div className="col-sm-6 col-md-3 items">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <br />
                        <br />
                        <div className="col-sm-6 col-md-3 items">
                        <h3>Follow Us</h3>
                        <ul>
                        <li><a
                                href="https://www.facebook.com/search/top?q=brainspk/"
                                style={{ color: "white", textDecorationColor: "white", textDecoration: "none" }}
                                target={"blank"}
                                className="fab fa-facebook fa-lg"
                            ></a></li>
                            <li> <a
                                href="https://www.instagram.com/brainspk2021/"
                                style={{ color: "white", textDecorationColor: "white", textDecoration: "none" }}
                                target={"blank"}
                                className="fab fa-instagram fa-lg">
                            </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='brainspk2021'>
                    <img className='brainspkimage' src={brainspkn} />
                    <p className="copyright">Brainspk © 2021-22</p>
                </div>
                </div>
            </footer>
        </div>
    )
}

export default Footers