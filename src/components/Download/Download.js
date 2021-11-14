import React,{ useState } from 'react'
import { Nav, Modal} from 'react-bootstrap';
import { Button,NavDropdown,Navbar,Container,FormControl,Form, } from 'react-bootstrap';
import logo from "../../assets/images/upaise-logo.jpg";
import { Link } from 'react-router-dom'



function Download() {


    return (
        <div>
           {/* <div className='row mt-4'> 
        <div className='col-sm-6 offset-3'>
        <div class="file btn btn-lg btn-primary">
            File Upload
        <input type="file" name="file" className="input-Admin" />
        </div>
        </div>
        </div>  */}

<Navbar bg="white" expand="lg" >
  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll" />
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
    </Navbar.Collapse>
  </Container>
</Navbar>
        
        </div>

        
    )
}

export default Download
