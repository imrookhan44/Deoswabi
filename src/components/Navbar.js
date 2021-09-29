import React from 'react'
import logo from '../components/assets/upaise-logo.jpg'
export default function Home() {
    return (
        <>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col align-self-center' >
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <a class="navbar-brand" href="#"><img src={logo} /></a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="#">Home </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Login</a>
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
