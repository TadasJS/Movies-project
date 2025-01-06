import axios from 'axios';
import { useEffect, useState } from 'react';
import { TvShowCard } from './TvShowCard';


export function SearchTvShowData(props) {
  const [tvShowList, setTvShowList] = useState([]);

  useEffect(() => {
    axios
      .post('http://localhost:3000/api/tvshows/search', { data: props.search })
      .then((response) => {
        setTvShowList(response.data.data);    
      })
      .catch((error) => console.error( error));
  }, [props.search]);

  if(tvShowList.length === 0) {
    return <h4>No data finded</h4>
  }  

  return (

        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4  g-4">
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
