import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export function TvShowCardInfo() {
  const { id } = useParams();

  const [tvShowData, setTvShowData] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/tvshows/${id}`)
      .then((response) => {
        setTvShowData(response.data.data[0]);
      })
      .catch((error) => {
        console.error('Unable to get movie data:', error);
      });
  }, [id]);

  if (!tvShowData) {
    return <h5>Loading...</h5>;
  }
  return (
    <>
      <div className="card mb-3">
        <img src={tvShowData.img_url} className="card-img-top" alt={tvShowData.title} />

        <div className="card-body">
          <h2 className="card-title">{tvShowData.title}</h2>
          <p className="card-text">{tvShowData.description}</p>
          <p className="card-text">Genre: {tvShowData.genre_type}</p>
          <p className="card-text">Year: {tvShowData.year}</p>
          <p className="card-text">Rating: {tvShowData.rating}</p>
          <p className="card-text">
            <small className="text-body-secondary">Updated: {tvShowData.updated_at}</small>
          </p>
        </div>
      </div>
    </>
  );
}
