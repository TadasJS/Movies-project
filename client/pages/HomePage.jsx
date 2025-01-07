
import { Link } from "react-router-dom";
import { MovieDataList } from "../components/MovieDataList";
import { TvShowDataList } from "../components/TvShowDatalist";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./HomePage.css"


export function HomePage() {

    const ctx = useContext(UserContext)
    const userLoggedIn = ctx.user.loggedIn
    
    return(
      <div className="HomePage-container"> 
     <h4 className=" mb-3 HomePage-form ">TOP MOVIES </h4> 
    {ctx.user.user_role === 'admin' && <Link to='/addcardmov' type="button" className="btn btn-success mb-3 me-2 HomePage-btn ">Create movies card</Link> }
    {ctx.user.user_role === 'admin' && <Link to='/genres' type="button" className="btn btn-success mb-3 me-2 HomePage-btn">Configure genres</Link> }
     <MovieDataList /> 
     <h4 className="mb-3  HomePage-form" >TOP TV_SHOWS</h4>   
     {ctx.user.user_role === 'admin' && <Link to='/addcardser' type="button" className="btn btn-success mb-3 HomePage-btn">Create tv_show card</Link>}
     <TvShowDataList /> 
   
    </div>
   
   
    )
}