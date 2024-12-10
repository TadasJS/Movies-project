import { Link } from "react-router-dom"


export function CreateCardSerial() {


    function handleSubmit (e) {
        e.preventDefault()
        console.log('sending serial...')
    }

    return (



        <div className="container">

<div className="bd-example-snippet bd-code-snippet">
  <div className="bd-example m-0 border-0">    
        <nav>
          <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
            <Link to='/addcardmov' className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false" tabIndex="-1">Add Movie card</Link>
            <Link to='/addcardser' className="nav-link active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" tabIndex="-1">Add tv_show card</Link>
          </div>
        </nav>       
  </div>
</div>
 <h5 className="mb-3" >Add Tv_show card</h5>
        <form onSubmit={handleSubmit} action="">
            <div className="input-group mb-3">
                <span className="input-group-text serialform_title_color " id="inputGroup-sizing-default">Title</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text serialform_title_color " id="inputGroup-sizing-default">Description</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text serialform_title_color " id="inputGroup-sizing-default">Img url</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text serialform_title_color " id="inputGroup-sizing-default">Thubnail url</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text serialform_title_color " id="inputGroup-sizing-default">Year    </span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text serialform_title_color " id="inputGroup-sizing-default">Genre</span>
                <select className="form-select form-select-sm" aria-label=".form-select-sm example">
            <option select="">Select genre</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text serialform_title_color" id="inputGroup-sizing-default">Rating</span>
                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-outline-success" type="submit">Submit</button>
            </div>
        </form>


        </div>





    )
}