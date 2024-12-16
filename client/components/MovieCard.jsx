
export function MovieCard(props) {

  console.log(props.thumb)
    return (

      <div className="col">
        <div className="card">
          <img src={props.thumb} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title{props.title}</h5>
            <p className="card-text">{props.genre}</p>
          </div>
        </div>
      </div>
   

    )
}