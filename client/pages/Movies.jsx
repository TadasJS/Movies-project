import { MoviesSearch } from '../components/MoviesSearch';
import { SearchMovieData } from '../components/SearchMoviesData';

export function Movies() {
  return (
    <div className="container">
      <h1 className="">Movies</h1>
      <MoviesSearch />
      <div className="row">
        <SearchMovieData />
      </div>
    </div>
  );
}
