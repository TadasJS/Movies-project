import axios from 'axios';
import { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';
import "./MovieDataList.css";

export function MovieDataList(props) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/movies')
      .then((response) => {
        setMovieList(response.data.data);
      })
      .catch((error) => console.error('Fetching movie list failed:', error));
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4  g-4  MovieDataList-container">
      {movieList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        movieList.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            description={movie.description}
            img={movie.img_url}
            thumb={movie.thumbnail_url}
            year={movie.year}
            rating={movie.rating}
            genreType={movie.genre_type}
          />
        ))
      )}
    </div>
  );
}
