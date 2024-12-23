import axios from "axios"
import { useEffect, useState } from "react"
import { TvShowCard } from "./TvShowCard"




export function TvShowDataList () {

 const [tvShowList, setTvShowList] = useState()
 

   useEffect(() => {
       axios
       .get('http://localhost:3000/api/tvshows')
       .then ((data) => setTvShowList(data.data.data))
       .catch ((error) => console.log(error))
      
   },[])
    return(
      
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4  g-4">
            { tvShowList?.map((key)=>(<TvShowCard key={key.id} id={key.id} title={key.title} description={key.description}
            img={key.img_url} thumb={key.thumbnail_url} year={key.year} genre={key.genreid} rating={key.rating} />))}  
        
        </div>
            
                            
       
    )
}