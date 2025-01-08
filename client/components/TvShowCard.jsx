import { useNavigate } from 'react-router-dom';
import { DeleteTvShow } from './DeleteTvShow';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import "./TvShowDatalist.css"

export function TvShowCard(props) {
  const ctx = useContext(UserContext);

  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate(`/updateTvshow/${props.id}`);
  };

  function handleOnClick() {
    navigate(`/tvshowcardinfo/${props.id}`);
  }

  return (
    <div className="col">

      <div className="card TvShowDataList-card">
        {/* <h5>{props.id}</h5> */}
        <img src={props.thumb} className="card-img-top" alt={props.title} onClick={handleOnClick} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Genre: {props.genreType}</p>
          <p className="card-text">Rating: {props.rating}</p>
          <p className="card-text">Years: {props.year}</p>
          {ctx.user.user_role === 'admin' && (
            <button onClick={handleUpdateClick} className="btn btn-primary TvShowDataList-btn">
              Update
            </button>
          )}
          {ctx.user.user_role === 'admin' && <DeleteTvShow id={props.id} />}
        </div>
      </div>
    </div>
  );
}
