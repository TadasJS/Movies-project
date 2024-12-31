
import { useState, useEffect } from "react"
import axios from "axios"
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { GenreSelect } from "./genreSelect";
import { Link } from "react-router-dom";



export function CreateCardSerial() {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);
    const handleClose = () =>{
        setShow(false);
        window.location.reload()     
    } 
    const handleShow = () => setShow(true);

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

    const [formErr, setFormErr] = useState('')
    const [formValid, setFormValid] = useState('')

//genre select from DB
    const [genreList, setGenreList] = useState([]);
  
    useEffect(() => {
      axios
        .get('http://localhost:3000/api/genre/')
        .then((response) => {
          setGenreList(response.data.data);
        })
        .catch((error) => console.error("Fetching movie list failed:", error));
    }, []);
  
//end genre select from DB

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

if(!year || year < 1928 || year > 2025){
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
    return
}else{
    setGenreErr(false)
    setGenreValid(true)   
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
    .post('http://localhost:3000/api/tvshows',{
        title ,
        description,
        img_url: imgUrl,
        thumbnail_url:thumbUrl,
        year, 
        genreid:genre, 
        rating,
    })
    .then((data) => {
        if(data.data.status === 'ok'){
            setFormValid(data.data.msg)
            setFormErr('')
            handleShow()
          }
          if(data.data.status === 'err'){
            setFormErr(data.data.msg)
            setFormValid('')
          }
    })

    .catch((error) => console.error(error))

}

function handleCreateNew(){
    window.location.reload()  
}

    return (

        

        <Container className="">
        <Row>
    <Col md={{ span: 6, offset: 3 }}>
      <h2 className='formCenter' >Create Tv_Show</h2>

      {formValid && (<div className="ms-5 me-5 alert alert-success " role="alert">
        <h4 className="alert-heading">Well done!</h4> 
         <p className="mb-0">{formValid}</p>
          </div>)}

          {formErr && (<div className="ms-5 me-5 alert alert-danger " role="alert">
        <h4 className="alert-heading">Error message</h4> 
         <p className="mb-0">{formErr}</p>
          </div>)}

         <form onSubmit={handleSubmit} action="">
        <Form.Group className="mb-2">
            <Form.Label className="fs-4 " id="">Title:</Form.Label>
            <Form.Control onChange={updateTitle}  type="text" className={`form-control ${titleValid ? 'is-valid': ''} ${titleErr ? 'is-invalid': ''} `} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            <div className="invalid-feedback">
              {titleErr}
            </div>
            </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label className="fs-4" id="inputGroup-sizing-default">Description:</Form.Label>
            <Form.Control onChange={updateDescription}  type="text" className={`form-control ${descriptionValid ? 'is-valid': ''} ${descriptionErr ? 'is-invalid': ''}  `} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            <div className="invalid-feedback">
              {descriptionErr}
            </div>
            </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label className="fs-4" id="inputGroup-sizing-default">Img url:</Form.Label>
            <Form.Control onChange={updateImgUrl}  type="text" className={`form-control ${imgUrlValid ? 'is-valid': ''} ${imgUrlErr ? 'is-invalid': ''}  `} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            <div className="invalid-feedback">
              {imgUrlErr}
            </div>
            </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label className="fs-4" id="inputGroup-sizing-default">Thubnail url:</Form.Label>
            <Form.Control onChange={updateThumbUrl}  type="text" className={`form-control ${thumbUrlValid ? 'is-valid': ''} ${thumbUrlErr ? 'is-invalid': ''}  `} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        <div className="invalid-feedback">
              {thumbUrlErr}
            </div>
            </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label className="fs-4" id="inputGroup-sizing-default">Year:    </Form.Label>
            <Form.Control onChange={updateYear}  type="text" className={`form-control ${yearValid ? 'is-valid': ''} ${yearErr ? 'is-invalid': ''}  `} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        <div className="invalid-feedback">
              {yearErr}
            </div>
            </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label className="fs-4" id="inputGroup-sizing-default">Genre:</Form.Label>
            <select onChange={updateGenre} className={`form-control ${genreValid ? 'is-valid': ''} ${genreErr ? 'is-invalid': ''} form-select-sm  `} aria-label=".form-select-sm example" required>
        <option select="">Select genre</option>
         { genreList.map((genre) => ( 
                <GenreSelect
                  key={genre.id}
                  id={genre.id}
                  genreType={genre.genre_type}
                />))}
      </select>
        <div className="invalid-feedback">
              {genreErr}
            </div>
            </Form.Group>
        <Form.Group className="mb-2">
            <Form.Label className="fs-4" id="inputGroup-sizing-default">Rating:</Form.Label>
            <input onChange={updateRating}  type="text" className={`form-control ${ratingValid ? 'is-valid': ''} ${ratingErr ? 'is-invalid': ''}  `} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            <div className="invalid-feedback">
              {ratingErr}
            </div>
            </Form.Group>
        <div className="d-grid gap-2">
            <button className="btn btn-outline-primary " type="submit">Submit</button>
        </div>
    </form>
    </Col>
  </Row>
  <>     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="alert alert-success" role="alert">
                  Movie created successfully
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCreateNew}>
            Create Another Tv_Show
          </Button>
          <Link to='/' type='button' className="btn btn-success ms-3" >
            Go to home page
          </Link>
        </Modal.Footer>
      </Modal>
    </>
    </Container>

    )
}