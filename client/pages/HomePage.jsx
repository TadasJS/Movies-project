
import { MovieCard } from "../components/MovieCard";
import { MovieDataList } from "../components/MovieDataList";


export function HomePage() {


  
    return(
      <div className="container">
        <h4>Bendri klausimai</h4>
        <ul>
          <li> Gabrielė prašė sudėt Id an mygtukų nav barų ir dar kažko. Ant ko tiksliai reikia dėt ir kaip dedam? </li>
        </ul>
        
     <MovieDataList />    
   
    </div>
   
   
    )
}