import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"


export function CreateCardSerial() {

    const[title, setTitle] = useState()
    const[description, setDescription] = useState()
    const[imgUrl, setImgUrl] = useState()
    const[thumbUrl, setThumbUrl] = useState()
    const[year, setYear] = useState()
    const[genre, setGenre] = useState()
    const [rating, setRating] = useState()

    function updateTitle(e) {
        setTitle(e.target.value)
    }
    function updateDescription(e) {
        setDescription(e.target.value)
    }
    function updateImgUrl(e) {
        setImgUrl(e.target.value)
    }
    function updateThumbUrl(e) {
        setThumbUrl(e.target.value)
    }
    function updateYear(e) {
        setYear(e.target.value)
    }
    function updateGenre(e) {
        setGenre(e.target.value)
    }
    function updateRating(e) {
        setRating(e.target.value)
    }



function handleSubmit (e) {
    e.preventDefault()

  

   axios
    .post('http://localhost:3000/api/tvshows',{
        title ,
        description,
        img_url: imgUrl,
        thumbnail_url:thumbUrl,
        year, 
        genreid:genre, 
        rating,
    })
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error))

}



    return (



        <div className="container">

<div className="bd-example-snippet bd-code-snippet">
  <div className="bd-example m-0 border-0">    
        <nav>
          <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
            <Link to='/addcardmov' className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false" tabIndex="-1">Add Movie card</Link>
            <Link to='/addcardser' className="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" tabIndex="-1">Add Tv_show card</Link>
          </div>
        </nav>       
  </div>
</div>
 <h5 className="mb-3" >Add Tv_show card</h5>
        <form onSubmit={handleSubmit} action="">
            <div className="input-group mb-3">
                <span  className="input-group-text serialform_title_color " id="inputGroup-sizing-default">Title</span>
                <input onChange={updateTitle} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text serialform_title_color " id="inputGroup-sizing-default">Description</span>
                <input onChange={updateDescription} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text serialform_title_color " id="inputGroup-sizing-default">Img url</span>
                <input onChange={updateImgUrl} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text serialform_title_color " id="inputGroup-sizing-default">Thubnail url</span>
                <input onChange={updateThumbUrl} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text serialform_title_color " id="inputGroup-sizing-default">Year    </span>
                <input onChange={updateYear} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text serialform_title_color " id="inputGroup-sizing-default">Genre</span>
                <select onChange={updateGenre} className="form-select form-select-sm" aria-label=".form-select-sm example">
            <option select="">Select genre</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text serialform_title_color" id="inputGroup-sizing-default">Rating</span>
                <input onChange={updateRating} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-outline-success" type="submit">Submit</button>
            </div>
        </form>


        </div>





    )
}