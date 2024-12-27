import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateCardForm.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { GenreSelect } from './genreSelect';

export default function UpdateMovieForm() {
  const { id } = useParams(); 

 //genre select from DB
 const [genreList, setGenreList] = useState([]);
  
 useEffect(() => {
   axios
     .get('http://localhost:3000/api/genre/')
     .then((response) => {
       setGenreList(response.data.data);
     })
     .catch((error) => console.error("Fetching movie list failed:", error));
 }, []);

//end genre select from DB
  

  const navigate = useNavigate();

  const [formData, setFormData] = useState(null); 
  const [newData, setNewData] = useState(null)
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((response) => {
        setFormData(response.data.data[0]);
        setLoading(false);         
      })
      .catch((error) => {
        console.error('Unable to get movie data:', error);
        setLoading(false);
      });
  }, [id]);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/api/movies/${id}`, newData)
      .then((data) => console.log(data))
      .then(() => {
        // navigate('/');
      })
      .catch((error) => {
        console.error('Updating movie failed:', error);
      });
  };

  if (loading) {
    return <p>Loading...</p>; 
  }

  if (!formData) {
    return <p>Error: movie data not found.</p>; 
  }

  return (
    <Container className="">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className='formCenter' >Update movie</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label className="fs-4">Title:</Form.Label>
              <Form.Control
                type="text"
                name="title"
               
                onChange={(e) => setNewData({ ...newData, title: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="fs-4">Description:</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
              
                onChange={(e) => setNewData({ ...newData, description: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="fs-4">Img URL:</Form.Label>
              <Form.Control
                type="text"
                name="img_url"
           
                onChange={(e) => setNewData({ ...newData, img_url: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="fs-4">Thumb URL:</Form.Label>
              <Form.Control
                type="text"
                name="thumbnail_url"
             
                onChange={(e) => setNewData({ ...newData, thumbnail_url: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="fs-4">Years:</Form.Label>
              <Form.Control
                type="text"
                name="year"
        
                onChange={(e) => setNewData({ ...newData, year: e.target.value })}
              />
            </Form.Group>

             <Form.Group className="mb-2">
                        <Form.Label className="fs-4" id="inputGroup-sizing-default">Genre:</Form.Label>
                        <select name='genreid' onChange={(e) => setNewData({ ...newData, genreid: e.target.value })} 
                        className={`form-control  form-select-sm  `} aria-label=".form-select-sm example" required>
                    <option select="">Select genre</option>
                     { genreList.map((genre) => ( 
                            <GenreSelect
                              key={genre.id}
                              id={genre.id}
                              genreType={genre.genre_type}
                            />))}
                  </select>
                        </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="fs-4">Rating:</Form.Label>
              <Form.Control
                type="text"
                name="rating"
               
                onChange={(e) => setFormData({ ...newData, rating: e.target.value })}
              />
            </Form.Group>

            <Button variant="secondary" type="submit" className="w-100 fs-5">
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
