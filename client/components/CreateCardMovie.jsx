import { Link } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'


export function CreateCardMovie() {

    const[title, setTitle] = useState('')
    const[titleErr, setTitleErr] = useState('')
    const[titleValid, setTitleValid] = useState(false)
    const[description, setDescription] = useState('')
    const[descriptionErr, setDescriptionErr] = useState('')
    const[descriptionValid, setDescriptionValid] = useState(false)
    const[imgUrl, setImgUrl] = useState('')
    const[imgUrlErr, setImgUrlErr] = useState('')
    const[imgUrlValid, setImgUrlValid] = useState(false)
    const[thumbUrl, setThumbUrl] = useState('')
    const[thumbUrlErr, setThumbUrlErr] = useState('')
    const[thumbUrlValid, setThumbUrlValid] = useState(false)
    const[year, setYear] = useState('')
    const[yearErr, setYearErr] = useState('')
    const[yearValid, setYearValid] = useState(false)
    const[genre, setGenre] = useState('Select genre')
    const[genreErr, setGenreErr] = useState(false)
    const[genreValid, setGenreValid] = useState(false)
    const [rating, setRating] = useState('')
    const [ratingErr, setRatingErr] = useState('')
    const [ratingValid, setRatingValid] = useState(false)
   


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

    const symbList ='`~!@#$%^&*()_+-=[]{}|":;?/>.<,\''
    const symbList2 ='`~!@#$%^&*()_+-=[]{}|":;?/>.<,\'qwertyuioplkjhgfdsazxcvbnmąčęėįšųūQWERTYUIOPLKJHGFDSAZXCVBNMĄČĘĖĮŠŲŪ'

    
    function handleSubmit (e) {
        e.preventDefault()  

      //validacijos pradzia 

        if(!title){
            setTitleErr(`field can't be empty`)
            setTitleValid(false)
            return
        }else{
            setTitleErr(false)
            setTitleValid(true)
        }

        for (const i of symbList){
            for(const j of title){
                if(i === j){                    
                   return setTitleErr(`can't use symbols`)                    
                }
            }
        }

        if(!description){
            setDescriptionErr(`field can't be empty`)
            setDescriptionValid(false)
            return
        }else{
            setDescriptionErr(false)
            setDescriptionValid(true)
        }

        for (const i of symbList){
            for(const j of description){
                if(i === j){                    
                   return setDescriptionErr(`can't use symbols`)                    
                }
            }
        }

        if(!imgUrl){
            setImgUrlErr(`field can't be empty`)
            setImgUrlValid(false)
            return
        }else{
            setImgUrlErr(false)
            setImgUrlValid(true)
        }

        for (const i of symbList){
            for(const j of imgUrl){
                if(i === j){                    
                   return setImgUrlErr(`can't use symbols`)                    
                }
            }
        }

        if(!thumbUrl){
            setThumbUrlErr(`field can't be empty`)
            setThumbUrlValid(false)
            return
        }else{
            setThumbUrlErr(false)
            setThumbUrlValid(true)
        }
       
        for (const i of symbList){
            for(const j of thumbUrl){
                if(i === j){                    
                   return setThumbUrlErr(`can't use symbols`)                    
                }
            }
        }
        
        if(!year || year < 1888 || year > 2025){
            setYearErr(`field can't be empty, you can chose years from 1888-2025`)
            setYearValid(false)
            return
        }else{
            setYearErr(false)
            setYearValid(true)
        }

        for (const i of symbList2){
            for(const j of year){
                if(i === j){                    
                   return setYearErr(`can't use symbols and letters`)                    
                }
            }
        }

        if( genre === 'Select genre'){
            setGenreErr(true)
            setGenreValid(false)
            console.log('trueeeee')
            return
        }else{
            setGenreErr(false)
            setGenreValid(true)
            console.log('false')
        }


        if(!rating || rating < 1 || rating > 10){
            setRatingErr(`field can't be empty, use numbers from 1-10`)
            setRatingValid(false)
            return
        }else{
            setRatingErr(false)
            setRatingValid(true)
        }

        for (const i of symbList2){
            for(const j of rating){
                if(i === j){                    
                   return setRatingErr(`can't use symbols and letters`)                    
                }
            }
        }

        //validacijos pabaiga  
       

    
        axios
        .post('http://localhost:3000/api/movies',{
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
        <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
            <Link to='/addcardmov' className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Add Movie card</Link>
            <Link to='/addcardser' className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" tabIndex="-1">Add Tv_show card</Link>
          </div>
          <h5 className="mb-3" >Add Movie card</h5>
        <form onSubmit={handleSubmit} action="">


            <div className="input-group mb-3">
                <span className="input-group-text movieform_title_color movieform_title_color " id="inputGroup-sizing-default">Title</span>
                <input onChange={updateTitle}  type="text" className={`form-control ${titleValid ? 'is-valid': ''} ${titleErr ? 'is-invalid': ''} `} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                <div className="invalid-feedback">
                  {titleErr}
                </div>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text movieform_title_color" id="inputGroup-sizing-default">Description</span>
                <input onChange={updateDescription}  type="text" className={`form-control ${descriptionValid ? 'is-valid': ''} ${descriptionErr ? 'is-invalid': ''}  `} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                <div className="invalid-feedback">
                  {descriptionErr}
                </div>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text movieform_title_color" id="inputGroup-sizing-default">Img url</span>
                <input onChange={updateImgUrl}  type="text" className={`form-control ${imgUrlValid ? 'is-valid': ''} ${imgUrlErr ? 'is-invalid': ''}  `} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                <div className="invalid-feedback">
                  {imgUrlErr}
                </div>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text movieform_title_color" id="inputGroup-sizing-default">Thubnail url</span>
                <input onChange={updateThumbUrl}  type="text" className={`form-control ${thumbUrlValid ? 'is-valid': ''} ${thumbUrlErr ? 'is-invalid': ''}  `} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            <div className="invalid-feedback">
                  {thumbUrlErr}
                </div>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text movieform_title_color" id="inputGroup-sizing-default">Year    </span>
                <input onChange={updateYear}  type="text" className={`form-control ${yearValid ? 'is-valid': ''} ${yearErr ? 'is-invalid': ''}  `} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            <div className="invalid-feedback">
                  {yearErr}
                </div>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text movieform_title_color" id="inputGroup-sizing-default">Genre</span>
                <select onChange={updateGenre} className={`form-control ${genreValid ? 'is-valid': ''} ${genreErr ? 'is-invalid': ''} form-select-sm  `} aria-label=".form-select-sm example" required>
            <option select="">Select genre</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
            <div className="invalid-feedback">
                  {genreErr}
                </div>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text movieform_title_color" id="inputGroup-sizing-default">Rating</span>
                <input onChange={updateRating}  type="text" className={`form-control ${ratingValid ? 'is-valid': ''} ${ratingErr ? 'is-invalid': ''}  `} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                <div className="invalid-feedback">
                  {ratingErr}
                </div>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-outline-primary " type="submit">Submit</button>
            </div>
        </form>

        </div>





    )
}