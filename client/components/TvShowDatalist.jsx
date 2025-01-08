
import axios from "axios"
import { useEffect, useState } from "react"
import { TvShowCard } from "./TvShowCard"
import "./TvShowDatalist.css"

export function TvShowDataList() {
  const [tvShowList, setTvShowList] = useState();



  useEffect(() => {
    axios
      .get('http://localhost:3000/api/tvshows')
      .then((data) => setTvShowList(data.data.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 TvShowDataList-container">
      {tvShowList?.map((key) => (
        <TvShowCard
          key={key.id}
          id={key.id}
          title={key.title}
          description={key.description}
          img={key.img_url}
          thumb={key.thumbnail_url}
          year={key.year}
          genreType={key.genre_type}
          rating={key.rating}
        />
      ))}
    </div>
  );
}
