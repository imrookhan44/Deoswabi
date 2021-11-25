import React from 'react'
import signin from '../../assets/images/signin.jpg'
import "./Admin.css"

function Admin() {
    
    return (
        <div >
            <div className=" mt-5 adminpanel ">
                <div className="row ">
                    <div className="col-md-4  col-lg-4 offset-2 pt-3  ">
                        <h3 className="admin mt-5">Admin</h3>
                        <input type="number" className="form-controls pt-4 Form" placeholder='Phone Number'></input>&nbsp;
                        <input type="password" className="form-controls pt-4" placeholder="Password"  />
                   <div>    <button className="btn btn-primary mt-4   " id="button" >Login</button> </div> 
                       </div>
                        
                    <div className="  col-sm-3 col-3">
                    <img className="custom-img image " src={signin} alt='signup' />
                    
                    </div>

                    </div>
                   
                    </div>
                     </div>   
        
    
    )
}

export default Admin



















// import React, { Component, component } from 'react'
// import firebase from '../firebase'
// import './Admin.css'
// export class Admin extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             files: null
//         }

//     }
//     handleChange = (files) => {
//         this.setState({
//             files: files

//         })
//     }
//     handleSave = () => {
//         let bucketName = 'images'
//         let files = this.state.files[0]
//         let storageRef = firebase.storage().ref(`${bucketName}/${files.name}`)
//         let UploadTask = storageRef.put(files)
//         UploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
//             () => {
//                 let downloadURL = UploadTask.snapshot.downloadURL
//             })
//     }
//     showImage = () => {
//         let storageRef = firebase.storage().ref()
//         let spaceRef = storageRef.child('images/' + this.state.files[""].name)
//         storageRef.child('images/' + this.state.files[""].name).getDownloadURL().then((url) => {
//             console.log(url)
//             document.getElementById('new-img').src = url
            
//         })
//         const setPasswordHandler=(e)=>{
//             setPassword(e.target.value)

//         }
//     }
//     render() {
//         return (
            
//             <div>  
//                   <div className="container mt-5 ">
//             <div className="row mt-5 ">
//                 <div className="col-sm-3 offset-0">
//                     <h3 className="signup mt-5">Admin</h3>
//                     <input type='text' className='form-control pt-4' placeholder='Full Name'  title="Please Enter your full name"></input>
//                     <input type="number" className="form-control pt-4" placeholder='Phone Number'></input>
//                     <input type="password" className="form-control pt-4" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//                     <input type="password" className="form-control pt-4" placeholder="Repeat Password" />
//                     <button className="btn btn-primary mt-4" >Register</button>
//                     <p className=' mt-2'>Already have an account  </p>
//                 </div>
//                 <div className='col-sm-3 mt-5'>
//                     <img  alt='signup' />
//                 </div>
//             </div> 
//         </div>

//             </div>

//         )
//     }
// }
// export default Admin
