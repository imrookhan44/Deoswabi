import React,{ useState } from 'react'
import { Nav, Modal} from 'react-bootstrap';
// import { Button,NavDropdown,Navbar,Container,FormControl,Form, } from 'react-bootstrap';
import logo from "../../assets/images/upaise-logo.jpg";
import { Link } from 'react-router-dom'



function Download() {


// // Create a reference to the file we want to download
// var starsRef = storageRef.child('images/stars.jpg');

// // Get the download URL
// starsRef.getDownloadURL()
// .then((url) => {
//   // Insert url into an <img> tag to "download"
// })
// .catch((error) => {
//   // A full list of error codes is available at
//   // https://firebase.google.com/docs/storage/web/handle-errors
//   switch (error.code) {
//     case 'storage/object-not-found':
//       // File doesn't exist
//       break;
//     case 'storage/unauthorized':
//       // User doesn't have permission to access the object
//       break;
//     case 'storage/canceled':
//       // User canceled the upload
//       break;

//     // ...

//     case 'storage/unknown':
//       // Unknown error occurred, inspect the server response
//       break;
//   }
// });







  return(
    {/* <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <Link className="navbar-brand" to="/"/><img style={{ height: '70px' }} src={logo} alt='logo' />
      <Nav className="me-auto my-2 my-lg-0 "style={{ maxHeight: '100px' }}navbarScroll>
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">History</Nav.Link>
        <Nav.Link href="#action1">Sing Up</Nav.Link>
        <Nav.Link href="#action2">Login</Nav.Link>
        <Nav.Link href="#action1">Upload</Nav.Link>
        <Nav.Link href="#action2">user Details</Nav.Link>
        <Nav.Link href="#action1">Download</Nav.Link>
        <Nav.Link href="#action2">Admin</Nav.Link>
      </Nav>
    </Navbar.Collapse> */}


  )
    
}

export default Download
