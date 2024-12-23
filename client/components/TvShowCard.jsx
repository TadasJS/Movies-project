
import {useNavigate} from 'react-router-dom'
import { DeleteTvShow } from './DeleteTvShow';

export function TvShowCard(props) {
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate(`/updateTvshow/${props.id}`); 
  };
 
    return (

      <div className="col">
        <div className="card">
          {/* <h5>{props.id}</h5> */}
          <img src={props.thumb} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Genre: {props.genre}</p>
          <p className="card-text">Rating: {props.rating}</p>
          <p className="card-text">Years: {props.year}</p>
          <button onClick={handleUpdateClick} className="btn btn-primary">
            Update
          </button>
          <DeleteTvShow id = {props.id} />
          </div>
        </div>
      </div>
   

    )
}