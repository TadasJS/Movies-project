
import { useNavigate } from "react-router-dom";
import { DeleteMovie } from "./DeleteMovie";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./MovieDataList.css"



export function MovieCard(props) {
  const navigate = useNavigate();

  const ctx = useContext(UserContext);

  const handleUpdateClick = () => {
    navigate(`/updateMovie/${props.id}`);
  };

  return (
    <div className="col ">
      <div className="card MovieDataList-card">
        <img src={props.thumb} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Genre: {props.genreType}</p>
          <p className="card-text">Rating: {props.rating}</p>
          <p className="card-text">Years: {props.year}</p>

          {ctx.user.user_role === 'admin' && (
            <button onClick={handleUpdateClick} className="btn btn-primary MovieDataList-btn">
              Update
            </button>
          )}
          {ctx.user.user_role === 'admin' && <DeleteMovie id={props.id} />}
        </div>
      </div>
    </div>
  );
}
