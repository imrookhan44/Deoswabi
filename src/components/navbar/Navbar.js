import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/upaise-logo.jpg";
export default function Home() {
    return (
        <>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col align-self-center' >
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <Link className="navbar-brand" to="/"><img style={{height:'70px'}} src={logo} alt='logo' /></Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/">Home </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="Updatedacc">Updatedacc</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="signup">Sign up</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
