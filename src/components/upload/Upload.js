import React from 'react'
import './Upload.css'
import education from '../../assets/images/education.jpg'
import upload from '../../assets/images/upload.jpeg'

export default function Upload() {
    return (
     
<div class="container">
<img className="container-img22" src= {upload}></img>
<button  class="btnupload">
<input type="file" style={{backgroundColor:'none', width:'200px'}}></input>
</button>
                                      
</div>  
    )
}
