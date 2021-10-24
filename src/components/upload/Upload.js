import React from 'react'
import './Upload.css'
import education from '../../assets/images/education.jpg'
import login from '../../assets/images/login.jpg'

export default function Upload() {
    return (

        <div className="body-a">

            <center>
                <div class="upload-btn-wrapper mt-5">
                    <button class="btnnn " >Upload a file</button>
                    <input type="file" name="myfile" />
                </div>
            </center>
            {/* <div className="img">
                        <img src= {login}>
                        </img>
                    </div> */}
        </div>
    )
}
