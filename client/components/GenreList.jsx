import { useEffect, useState } from "react";
import axios from "axios";

export function CategoriesText() {
  const [genre, setGenre] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/genre")
      .then((data) => {
        setGenre(data.data);
      })
      .catch((error) => console.log(error));
  }, []);



  return (
    <>
      {genre?.map((genre) => (
          <MovieCard key={genre.id} id={genre.id} genreType={genre.genre_type} />
        ))}
    </>
  );
}