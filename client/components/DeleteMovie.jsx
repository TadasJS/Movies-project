import { useState, useEffect } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function DeleteMovie(props) {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => {
    setShow1(false);
    window.location.reload();
  };
  const handleShow1 = () => setShow1(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/movies/${props.id}`)
      .then((response) => {
        setFormData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Unable to get movie data:', error);
        setLoading(false);
      });
  }, []);

  function handleOnSubmit(e) {
    e.preventDefault();
    axios
      .delete(`http://localhost:3000/api/movies/${props.id}`, formData)
      .then((data) => {
        if (data.data.status === 'ok') {
          setMessage(data.data.msg);
        }
      })
      .then(() => {
        // navigate('/');
      })
      .catch((error) => {
        console.error('Updating movie failed:', error);
      });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!formData) {
    return <p>Error: movie data not found.</p>;
  }

  if (message) {
    handleShow1();
    setMessage('');
  }
  return (
    <>
      <Button className="ms-2 pe-3 ps-3" variant="danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="form-register2 modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header p-5 pb-4 border-bottom-0">
              <h1 className="fw-bold mb-0 fs-5 text-danger">
                Are you sure you want to delete this card {props.id} from your system{' '}
              </h1>
              {/* <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>

            <div className="modal-body p-5 pt-0">
              <form onSubmit={handleOnSubmit}>
                <Button
                  className="buttonSize mb-2 btn btn-lg rounded-3 btn-success"
                  variant="secondary"
                  onClick={handleClose}
                >
                  No
                </Button>
                <button
                  onClick={handleClose}
                  className="buttonSize ms-1
           mb-2 btn btn-lg rounded-3 btn-danger"
                  type="submit"
                >
                  Yes
                </button>
              </form>
            </div>
          </div>
        </div>
      </Modal>

      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>

        <div class="alert alert-success" role="alert">
          Movie deleted successfully
        </div>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
