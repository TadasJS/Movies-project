import { useState, useEffect } from "react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


export function DeleteGenre(props){
    
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [formData, setFormData] = useState(null); 
    const [loading, setLoading] = useState(true); 
    
    
    function handleOnSubmit() {
    
    axios
    .delete(`http://localhost:3000/api/genre/${props.id}`)
    .then((response) => {console.log(response)
    })  
    .catch((error) => console.error(error))

}


 
      
    return(
        <>
      <Button className="ms-2 pe-3 ps-3" variant="outline-danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="form-register2 modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-5 text-danger">
                Are you sure you want to delete this genre from your
                system{" "}
              </h1>
              {/* <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>

            <div className="modal-body p-5 pt-0">
              <form onSubmit={handleOnSubmit}>
              <Button
                  onClick={handleClose}
                  className="buttonSize ms-1 mb-2 me-2 btn btn-lg rounded-3 btn-success"
                  type="submit"
                >Yes
              </Button>
              <Button
                  onClick={handleClose}
                  className="buttonSize mb-2 btn btn-lg rounded-3 btn-success"
                  variant="secondary"
                > No
              </Button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
      
    )
}