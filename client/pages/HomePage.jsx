
import { Link } from "react-router-dom";
import { MovieDataList } from "../components/MovieDataList";
import { TvShowDataList } from "../components/TvShowDatalist";
import { TestuotojuPastabos } from "../components/TestuotojuPastabos";


export function HomePage() {


  
    return(
      <div className="container">
    <TestuotojuPastabos />
     <h4 className="mt-3 mb-3 bg-warning-subtle ">TOP MOVIES </h4> 
     <Link to='/addcardmov' type="button" className="btn btn-success mb-3">Add card Movies</Link>
     <MovieDataList /> 
     <h4 className="mt-3 mb-3 bg-warning-subtle" >TOP TV_SHOWS</h4>   
     <Link to='/addcardser' type="button" className="btn btn-success mb-3">Add card Tv show</Link>
     <TvShowDataList /> 
   
    </div>
   
   
    )
}