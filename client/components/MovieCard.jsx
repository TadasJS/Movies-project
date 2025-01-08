import { useNavigate } from 'react-router-dom';
import { DeleteMovie } from './DeleteMovie';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { MovieCardInfo } from '../pages/MovieCardInfo';

export function MovieCard(props) {
  const navigate = useNavigate();

  const ctx = useContext(UserContext);

  const handleUpdateClick = () => {
    navigate(`/updateMovie/${props.id}`);
  };

  function handleOnClick(){
    navigate(`/moviecardinfo/${props.id}`)
 }

  return (
    <div className="col">
      <div className="card" >
        <img src={props.thumb} className="card-img-top" alt={props.title} onClick={handleOnClick} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Genre: {props.genreType}</p>
          <p className="card-text">Rating: {props.rating}</p>
          <p className="card-text">Years: {props.year}</p>
          {ctx.user.user_role === 'admin' && (
            <button onClick={handleUpdateClick} className="btn btn-primary">
              Update
            </button>
          )}
          {ctx.user.user_role === 'admin' && <DeleteMovie id={props.id} />}
        </div>
        <MovieCardInfo id={props.id} />
      </div>
    </div>
  );
}
