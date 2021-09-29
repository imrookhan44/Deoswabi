import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/upaise-logo.jpg'
export default function Home() {
    return (
        <>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col align-self-center' >
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <Link class="navbar-brand" to="/"><img src={logo} /></Link>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item active">
                                            <Link class="nav-link" to="/">Home </Link>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" to="#">Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <Link class="nav-link" to="login">Login</Link>
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
