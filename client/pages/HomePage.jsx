
import { MovieCard } from "../components/MovieCard";
import { MovieDataList } from "../components/MovieDataList";
import { TvShowCard } from "../components/TvShowCard";
import { TvShowDataList } from "../components/TvShowDatalist";
import { TestuotojuPastabos } from "../components/TestuotojuPastabos";


export function HomePage() {


  
    return(
      <div className="container">
        <h4>Bendri klausimai</h4>
        <ul>
          <li> Testuotojų pageidavimai </li>
        </ul>
    <TestuotojuPastabos />
     <h4>TOP MOVIES FOR TODAY</h4> 
     <MovieDataList /> 
     <h4>TOP TVS_HOWS FOR TODAY</h4>   
     <TvShowDataList /> 
   
    </div>
   
   
    )
}