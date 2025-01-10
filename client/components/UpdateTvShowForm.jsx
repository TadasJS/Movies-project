import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './UpdateStyle.css';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { GenreSelect } from './genreSelect';

export default function UpdateTvShowForm() {
  const { id } = useParams();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    window.location.reload();
  };
  const handleShow = () => setShow(true);

  const [titleErr, setTitleErr] = useState('');
  const [titleValid, setTitleValid] = useState(false);
  
  const [descriptionErr, setDescriptionErr] = useState('');
  const [descriptionValid, setDescriptionValid] = useState(false);
 
  const [imgUrlErr, setImgUrlErr] = useState('');
  const [imgUrlValid, setImgUrlValid] = useState(false);
 
  const [thumbUrlErr, setThumbUrlErr] = useState('');
  const [thumbUrlValid, setThumbUrlValid] = useState(false);
 
  const [yearErr, setYearErr] = useState('');
  const [yearValid, setYearValid] = useState(false);
 
  const [genreErr, setGenreErr] = useState(false);
  const [genreValid, setGenreValid] = useState(false);

  const [ratingErr, setRatingErr] = useState('');
  const [ratingValid, setRatingValid] = useState(false);


  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  //genre select from DB
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/genre/')
      .then((response) => {
        setGenreList(response.data.data);
      })
      .catch((error) => console.error('Fetching movie list failed:', error));
  }, []);

  //end genre select from DB

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/tvshows/${id}`)
      .then((response) => {
        setFormData(response.data.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Unable to get movie data:', error);
        setLoading(false);
      });
  }, [id]);

  const numFilter =  /^\d+$/

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title) {
      setTitleErr(`field can't be empty`);
      setTitleValid(false);
      return;
    } else {
      setTitleErr(false);
      setTitleValid(true);
    }

    if (!formData.description) {
      setDescriptionErr(`field can't be empty`);
      setDescriptionValid(false);
      return;
    } else {
      setDescriptionErr(false);
      setDescriptionValid(true);
    }

    if (!formData.img_url) {
      setImgUrlErr(`field can't be empty`);
      setImgUrlValid(false);
      return;
    } else {
      setImgUrlErr(false);
      setImgUrlValid(true);
    }

    if (!formData.thumbnail_url) {
      setThumbUrlErr(`field can't be empty`);
      setThumbUrlValid(false);
      return;
    } else {
      setThumbUrlErr(false);
      setThumbUrlValid(true);
    }

    if (!formData.year || formData.year < 1888 || formData.year > 2025 || !numFilter.test(formData.year)) {
      setYearErr(`field can't be empty, you can chose years from 1888-2025`);
      setYearValid(false);
      return;
    } else {
      setYearErr(false);
      setYearValid(true);
    }

    if (formData.genreid === 'Select genre') {
      setGenreErr(true);
      setGenreValid(false);
      return;
    } else {
      setGenreErr(false);
      setGenreValid(true);
    }

    if (!formData.rating || formData.rating < 1 || formData.rating > 10 || !numFilter.test(formData.rating)) {
      setRatingErr(`field can't be empty, use numbers from 1-10`);
      setRatingValid(false);
      return;
    } else {
      setRatingErr(false);
      setRatingValid(true);
    }


    axios
      .put(`http://localhost:3000/api/tvshows/${id}`, formData)
      .then((data) => console.log(data))
      .then(() => {
        handleShow()
      })
      .catch((error) => {
        console.error('Updating tv_shows failed:', error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!formData) {
    return <p>Error: tv_shows data not found.</p>;
  }

  return (
    <Container className="update-container">
      <Row>
        <Col className='update-form' md={{ span: 6, offset: 3 }}>
          <h2 className="formCenter">Update Tv_show</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2 update-group">
              <Form.Label className="fs-4">Title:</Form.Label>
              <Form.Control
                className={`form-control ${titleValid ? 'is-valid' : ''} ${titleErr ? 'is-invalid' : ''} `}
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
              <div className="invalid-feedback">{titleErr}</div>
            </Form.Group>

            <Form.Group className="mb-2 update-group">
              <Form.Label className="fs-4">Description:</Form.Label>
              <Form.Control
                className={`form-control ${descriptionValid ? 'is-valid' : ''} ${descriptionErr ? 'is-invalid' : ''} `}
                type="text"
                name="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
              <div className="invalid-feedback">{descriptionErr}</div>
            </Form.Group>

            <Form.Group className="mb-2 update-group">
              <Form.Label className="fs-4">Img URL:</Form.Label>
              <Form.Control
                className={`form-control ${imgUrlValid ? 'is-valid' : ''} ${imgUrlErr ? 'is-invalid' : ''} `}
                type="text"
                name="img_url"
                value={formData.img_url}
                onChange={(e) => setFormData({ ...formData, img_url: e.target.value })}
              />
              <div className="invalid-feedback">{imgUrlErr}</div>
            </Form.Group>

            <Form.Group className="mb-2 update-group">
              <Form.Label className="fs-4">Thumb URL:</Form.Label>
              <Form.Control
               className={`form-control ${thumbUrlValid ? 'is-valid' : ''} ${thumbUrlErr ? 'is-invalid' : ''} `}
               type="text"
               name="thumbnail_url"
               value={formData.thumbnail_url}
               onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
             />
             <div className="invalid-feedback">{thumbUrlErr}</div>
            </Form.Group>

            <Form.Group className="mb-2 update-group">
              <Form.Label className="fs-4">Years:</Form.Label>
              <Form.Control
              className={`form-control ${yearValid ? 'is-valid' : ''} ${yearErr ? 'is-invalid' : ''} `}
              type="text"
              name="year"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            />
            <div className="invalid-feedback">{yearErr}</div>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="fs-4" id="inputGroup-sizing-default">
                Genre:
              </Form.Label>
              <select
                name="genreid"
                value={formData.genreid}
                onChange={(e) => setFormData({ ...formData, genreid: e.target.value })}
                className={`update-select ${genreValid ? 'is-valid' : ''} ${
                  genreErr ? 'is-invalid' : ''
                } form-select-sm  `}
                aria-label=".form-select-sm example"
              >
                <option select="">Select genre</option>
                {genreList.map((genre) => (
                  <GenreSelect key={genre.id} id={genre.id} genreType={genre.genre_type} />
                ))}
              </select>
              <div className="invalid-feedback">{genreErr}</div>
            </Form.Group>

            <Form.Group className="mb-2 update-group">
              <Form.Label className="fs-4">Rating:</Form.Label>
              <Form.Control
               className={`form-control ${ratingValid ? 'is-valid' : ''} ${ratingErr ? 'is-invalid' : ''}  `}
               type="text"
               name="rating"
               value={formData.rating}
               onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
             />
             <div className="invalid-feedback">{ratingErr}</div>
            </Form.Group>

            <Button variant="secondary" type="submit" className="w-100 fs-5 btn-danger update-btn">
              Update
            </Button>
          </Form>
        </Col>
      </Row>

      <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modalStyle'>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <div className="textStyle" role="alert">
          TvShow updated successfully
        </div>
       <Modal.Footer className="textStyle2" >
         <Link to="/" type="button" className="btn btn-danger update-btn ms-3">
           Go to home page
         </Link>
       </Modal.Footer>
      </Modal>
      </>

    </Container>
  );
}
