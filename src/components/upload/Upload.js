import React from 'react'
import './Upload.css'
import education from '../../assets/images/education.jpg'
import upload from '../../assets/images/upload.jpeg'

export default function Upload() {
    return (
       
        <div className="container2">

<div class="container2">

<img className="img22" src= {upload}>
                        </img> 
                       
  <button className="btnnn">Upload a file</button>
  <input type="file" name="myfile" />
</div>
{/* 
            <center>
                <div class="upload-btn-wrapper mt-5">
                    <button class="btnnn " >Upload a file</button>
                    <input type="file" name="myfile" />
                </div>
            </center> */}
            {/* <div className="img">
                        <img src= {login}>
                        </img>
                    </div> */}
        </div>
    )
}
