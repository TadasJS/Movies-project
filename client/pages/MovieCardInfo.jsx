import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export function MovieCardInfo() {
  const { id } = useParams();

  const [movieData, setMovieData] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((response) => {
        setMovieData(response.data.data[0]);
      })
      .catch((error) => {
        console.error('Unable to get movie data:', error);
      });
  }, [id]);

  if (!movieData) {
    return <h5>Loading...</h5>;
  }
  return (
    <>
      <div className="card mb-3">
        <img src={movieData.img_url} className="card-img-top" alt={movieData.title} />
        <div className="card-body">
          <h2 className="card-title">{movieData.title}</h2>
          <p className="card-text">{movieData.description}</p>
          <p className="card-text">Genre: {movieData.genre_type}</p>
          <p className="card-text">Year: {movieData.year}</p>
          <p className="card-text">Rating: {movieData.rating}</p>
          <p className="card-text">
            <small className="text-body-secondary">Updated: {movieData.updated_at}</small>
          </p>
        </div>
      </div>
    </>
  );
}
