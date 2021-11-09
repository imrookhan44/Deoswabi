import React,{ useState } from 'react'
import { Nav, Modal} from 'react-bootstrap';


function Download() {
    const [show, setshow] = useState(false);

    const handleClose = () => setshow(false);
    const handleShow = () => setshow(true);

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title><h5>Login</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body >
          {" "}
          <form action="" method="post">
            <div className="modal-body">
              <div className="form-group">
                <label><h6>Email address</h6></label>
                <input type="text" className="form-control" required="required" />
              </div>
              <div className="form-group">
                <div className="clearfix">
                  <label><h6>Password</h6></label>
                  <a href="#" className="float-right text-muted " id="forget">
                   <h6> Forgot Password </h6>
                  </a>
                </div>

                <input
                  type="password"
                  class="form-control"
                  required="required"
                />
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <label className="form-check-label">
                <input type="checkbox" /> Remember me
              </label>
              <input type="submit" className="btn btn-info " value="Login" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
        </div>
    )
}

export default Download
