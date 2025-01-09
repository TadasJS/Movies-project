import axios from 'axios';
import { useEffect, useState } from 'react';
import { CreateGenre } from './CreateGenre';
import { GenreTable } from './GenreTable';
import './CreateCardForm.css';
import { GenreSelect } from './genreSelect';
import './CreateGenre.css'

export function GenreList() {
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/genre/')
      .then((response) => {
        setGenreList(response.data.data);
      })
      .catch((error) => console.error('Fetching movie list failed:', error));
  }, []);

  return (
    <div className="container">
      <CreateGenre />

      <table className="tableform5">
        <thead>
          <tr>
            <th className="tableform1">
              Id
            </th>
            <th className="tableform2">
              Genre Type
            </th>
            <th className="tableform3">
              Functions
            </th>
          </tr>
        </thead>
      </table>
      {genreList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        genreList.map((genre) => <GenreTable key={genre.id} id={genre.id} genreType={genre.genre_type} />)
      )}
    </div>
  );
}
