export function LoginCard(props) {
    console.log(props.thumd)
    return (
      <div className="col">
        <div className="card">
          <img src={props.thumb} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Login {props.title}</h5>
            <p className="card-text">{props.genre}</p>
          </div>
        </div>
      </div>
    );
  }
  