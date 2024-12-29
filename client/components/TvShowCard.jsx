
import {useNavigate} from 'react-router-dom'
import { DeleteTvShow } from './DeleteTvShow';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export function TvShowCard(props) {
  const ctx = useContext(UserContext)
  const usserLogedIn = ctx.user.loggedIn

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
          <p className="card-text">Genre: {props.genreType}</p>
          <p className="card-text">Rating: {props.rating}</p>
          <p className="card-text">Years: {props.year}</p>
          {ctx.user.user_role === 'admin' && <button onClick={handleUpdateClick} className="btn btn-primary">
            Update
          </button>}
          {ctx.user.user_role === 'admin' &&<DeleteTvShow id = {props.id} />}
          </div>
        </div>
      </div>
   

    )
}