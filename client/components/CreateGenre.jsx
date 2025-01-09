import { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Modal } from 'react-bootstrap';
import "./CreateGenre.css"



export function CreateGenre() {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => {
    setShow1(false);
    window.location.reload();
  };
  const handleShow1 = () => setShow1(true);

  const [genre, setGenre] = useState('');
  const [genreErr, setGenreErr] = useState('');
  const [genreValid, setGenreValid] = useState(false);

  const [formErr, setFormErr] = useState('');
  const [formValid, setFormValid] = useState('');

  function updateGenre(e) {
    setGenre(e.target.value);
  }

  const symbList = '`~!@#$%^&*()_+-=[]{}|":;?/>.<,\'0123456789';

  function handleSubmit(e) {
    e.preventDefault();

    //validacijos pradzia

    if (!genre) {
      setGenreErr(`field can't be empty`);
      setGenreValid(false);
      return;
    } else {
      setGenreErr(false);
      setGenreValid(true);
    }

    for (const i of symbList) {
      for (const j of genre) {
        if (i === j) {
          return setGenreErr(`can't use symbols`);
        }
      }
    }

    //validacijos pabaiga

    axios
      .post('http://localhost:3000/api/genre', {
        genre: genre,
      })
      .then((data) => {
        if (data.data.status === 'ok') {
          setFormValid(data.data.msg);
          setFormErr('');
          handleShow1()
        }
      })
      // .then(() => {navigate('/')})
      .catch((error) => {
        console.error(error);

        if (error.response.data.status === 'err') {
          setFormErr(error.response.data.msg);
          setFormValid('');
        }
      });
  }

  return (
    <Container className="">
      <Row className="CreateGenre-back">
        <Col md={{ span: 6, offset: 3 }} className="CreateGenre-back">
          <h2 className="formCenter">Create Genre</h2>


          {formValid && (
            <div className="ms-5 me-5 alert alert-success " role="alert">
              <h4 className="alert-heading">Well done!</h4>
              <p className="mb-0">{formValid}</p>
            </div>
          )}

          {formErr && (
            <div className="ms-5 me-5 alert alert-danger " role="alert">
              <h4 className="alert-heading">Error message</h4>
              <p className="mb-0">{formErr}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} action="">
            <Form.Group className="mb-2 CreateGenre-back">
              <Form.Label className="fs-4" id="inputGroup-sizing-default">
                New genre name:
              </Form.Label>
              <Form.Control
                onChange={updateGenre}
                type="text"
                className={`form-control ${genreValid ? 'is-valid' : ''} ${genreErr ? 'is-invalid' : ''} CreateGenre-group `}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
              <div className="invalid-feedback ">{genreErr}</div>
            </Form.Group>

            <div className="d-grid gap-2">
              <button className="btn btn-outline-danger CreateGenre-btn" type="submit">
                Create
              </button>
            </div>
          </form>
        </Col>
      </Row>
              
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header className='modalStyle'>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <div className=" textStyle2" role="alert">
          Genre created successfully
        </div>
      </Modal>
        </Container>
        
    )
}

