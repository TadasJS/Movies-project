import { useEffect, useState } from "react";
import axios from "axios";



export function MovieCardInfo (props) {

  const [movieData, setMovieData] = useState()
    
    useEffect(() => {
        axios
          .get(`http://localhost:3000/api/movies/${props.id}`)
          .then((response) => {
            console.log(response)
            setMovieData(response.data)
           
          })
          .catch((error) => {
            console.error('Unable to get movie data:', error);
         
          });
      }, []);

      console.log('cia set movie data', movieData)
   
    return(
        <>
       <div>cia bus card info id {}</div> 
        <div>card info title {}</div> 
        
        
        </>
    )
}