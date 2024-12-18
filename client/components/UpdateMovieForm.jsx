import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function UpdateMovieForm() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [formData, setFormData] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((response) => {
        setFormData(response.data.data);
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
      .put(`http://localhost:3000/api/movies/${id}`, formData)
      .then(() => {
        navigate('/');
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
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Update movie</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="fs-4">Title:</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fs-4">Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fs-4">Img URL:</Form.Label>
              <Form.Control
                type="text"
                name="img_url"
                value={formData.img_url}
                onChange={(e) => setFormData({ ...formData, img_url: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fs-4">Thumb URL:</Form.Label>
              <Form.Control
                type="text"
                name="thumbnail_url"
                value={formData.thumbnail_url}
                onChange={(e) => setFormData({ ...formData, thumbnail_url: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fs-4">Years:</Form.Label>
              <Form.Control
                type="number"
                name="year"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fs-4">Genre ID:</Form.Label>
              <Form.Control
                type="number"
                name="genreId"
                value={formData.genreId}
                onChange={(e) => setFormData({ ...formData, genreId: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fs-4">Rating:</Form.Label>
              <Form.Control
                type="number"
                name="rating"
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
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
