
import { useState } from "react";
import { SearchMovieData } from "./SearchMoviesData";


export function MoviesSearch() {

  const[searchData, setSearchData]= useState('')
  const[reload, setReaoad] = useState('')
   
console.log(searchData)

   function handleSearch(){
  setReaoad(searchData)
}

  return (
    <>
     <div className="input-group" >
                    <input onChange={(e)=>setSearchData(e.target.value)} className="form-control form-control-lg" type="search" placeholder="Search by movie title" aria-label="Search"/>
                    <button onClick={handleSearch} className="btn btn-secondary px-4" type="submit">
                            <i className="bi bi-search">search</i>
                        </button>
                </div>
        <SearchMovieData  search={reload}  />
    </>
  );
}
