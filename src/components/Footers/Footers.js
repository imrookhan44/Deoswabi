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
                    <div className="col-sm-6 col-md-3 items ">
                          <img className='footerlogo' src={apcalogo} />
                        </div>

                        <div className="col-sm-6 col-md-3 items ">
                            <h3>Deo female swabi</h3>
                            <ul>
                                <li><a >Home</a></li>
                                <li><a >Upload Links</a></li>
                                <li><a >Links</a></li>
                                <li><a >Upload files</a></li>
                                <li><a >News</a></li>
                                <li><a >School Status</a></li>
                                <li><a >Manage Users</a></li>
                                <li><a >Download</a></li>
                                <li><a >All Data</a></li>
                                <li><a >Attendance</a></li>
                            </ul>
                        </div>
                        <br />
                        <br />
                        <div className="col-sm-6 col-md-3 itemss">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <br />
                        <br />
                        <div className="col-sm-6 col-md-3 itemss">
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