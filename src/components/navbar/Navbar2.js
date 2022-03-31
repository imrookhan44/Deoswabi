import React from 'react'
import { useHistory } from 'react-router-dom';
import logo from "../../assets/images/apcalogo1.png";


function Navbar2() {
    let history = useHistory()
    return (
        <div className='navbar-n2'>
           
            <div className='row-N2'>
            <div className='col-2-n2 mt-2'>
                <img onClick={() => history.push("/")}
                    style={{ height: "80px", width: "80px" }}
                    src={logo}
                    alt="logo"
                />
            </div>
                <div className="col-10 rowfirst">    بسم الله الرحمن الرحيم
                </div>
            </div>
        </div>
    )
}

export default Navbar2
