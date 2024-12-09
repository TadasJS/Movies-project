import { Link } from "react-router-dom"
import './CreateCardForm.css'


export function CreateCardMovie() {




function handleSubmit (e) {
    e.preventDefault()
    console.log('sending movies...')
}


    return (        
        <div className="container">
        <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
            <Link to='/addcardmov' className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Add movie card</Link>
            <Link to='/addcardser' className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" tabIndex="-1">Add Tv_show card</Link>
          </div>
          <h5 className="mb-3" >Add Movie card</h5>
        <form onSubmit={handleSubmit} action="">
            <div className="input-group mb-3">
                <span className="input-group-text movieform_title_color movieform_title_color" id="inputGroup-sizing-default">Title</span>
                <input  type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text movieform_title_color" id="inputGroup-sizing-default">Description</span>
                <input  type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text movieform_title_color" id="inputGroup-sizing-default">Img url</span>
                <input  type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text movieform_title_color" id="inputGroup-sizing-default">Thubnail url</span>
                <input  type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text movieform_title_color" id="inputGroup-sizing-default">Year    </span>
                <input  type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text movieform_title_color" id="inputGroup-sizing-default">Genre</span>
                <select class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option selected="">Select genre</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text movieform_title_color" id="inputGroup-sizing-default">Rating</span>
                <select  type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-outline-primary " type="submit">Submit</button>
            </div>
        </form>


        </div>





    )
}