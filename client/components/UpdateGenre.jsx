import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from 'react-bootstrap';
import { useState } from "react";
import axios from "axios";
import './CreateCardForm.css'


export function UpdateGendre(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[genre, setGenre] = useState('')
    const[genreErr, setGenreErr] = useState('')
    const[genreValid, setGenreValid] = useState(false)

    const [formErr, setFormErr] = useState('')
    const [formValid, setFormValid] = useState('')

        function updateGenre(e) {
            setGenre(e.target.value)
        }
        const symbList ='`~!@#$%^&*()_+-=[]{}|":;?/>.<,\'0123456789'

        function handleOnSubmit(){  
      
            if(!genre || genre.length > 20 ){
                setGenreErr(`field can't be empty and more then 20 symbols`)
                setGenreValid(false)
                return
            }else{
                setGenreErr(false)
                setGenreValid(true)
            }    

            for (const i of symbList){
                for(const j of genre){
                    if(i === j){                    
                       return setGenreErr(`can't use symbols`)                    
                    }
                }
            }       


        axios
        .put(`http://localhost:3000/api/genre/${props.id}`,
            {
                genre:genre
            }
        )
        .then((response) => {console.log(response)
            console.log(response.data.status)
            if(response.data.status === 'ok'){
                setFormValid(response.data.msg)
                setFormErr('')
            }
        })  
        .catch((error) => {
            console.error(error)
            if(error.response.data.status === 'err'){
            setFormErr(error.response.data.msg)
            setFormValid('')
            }              
        })
    }
    return (
        <>
        <Button className="ms-2 pe-3 ps-3 me-3" variant="outline-success" onClick={handleShow}>
          Update
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <div className="modal-dialog" role="document">
            <div className="modal-content rounded-4 shadow">
        {formValid && (<div className="ms-5 me-5 alert alert-success mt-3 " role="alert">
        <h4 className="alert-heading">Well done!</h4> 
         <p className="mb-0">{formValid}</p>
          </div>)}
          {formErr && (<div className="ms-5 me-5 alert alert-danger mt-3 " role="alert">
        <h4 className="alert-heading">Error message</h4> 
         <p className="mb-0">{formErr}</p>
          </div>)}
              <div className="modal-header p-5 pb-4 border-bottom-0">
                <h1 className="fw-bold mb-0 fs-3 text-dark">
                  Update genre 
                </h1>               
              </div>
              <Form.Group className="mb-2">
                <Form.Control onChange={updateGenre}  type="text" className={`genreupdate form-control ${genreValid ? 'is-valid': ''} ${genreErr ? 'is-invalid': ''}  `} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                <div className="invalid-feedback ms-4">
                  {genreErr}
                </div>
                </Form.Group>
  
              <div className="modal-body p-5 pt-0">
                <form >
                    <button className="buttonSize ms-1
                   mb-2 btn btn-lg rounded-3 btn-outline-success" type="button" onClick={handleOnSubmit}>Update</button>
                  <button onClick={handleClose}
                    className="buttonSize ms-1
             mb-2 btn btn-lg rounded-3 btn-outline-success"
                    type="submit"
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Modal>
      </>
        
    )
}