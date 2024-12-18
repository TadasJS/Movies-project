
import { useNavigate } from "react-router-dom";

export function MovieCard(props) {
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate(`/update/${props.id}`); 
  };

  return (
    <div className="col">
      <div className="card">
        <img src={props.thumb} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Genre: {props.genre}</p>
          <p className="card-text">Rating: {props.rating}</p>
          <p className="card-text">Years: {props.year}</p>
          <button onClick={handleUpdateClick} className="btn btn-primary">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}





