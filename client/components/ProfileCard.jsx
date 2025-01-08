import { useState } from 'react'
import './ProfileCard.css'
import { useNavigate } from 'react-router-dom'

export function ProfileCard(props) {

    const navigate = useNavigate()

    const [hover, setHover] = useState(false)

    function handleOnClick(){
       console.log('paspausta ant korteles...')
        setHover(true)
    }
    if(hover){
        navigate('/cardinfo')
    }

    return(
         <div className="col profileCard profileCard-form" onClick={handleOnClick}>
             <div className="profileCard-group">
               <img src={props.thumb} className="card-img-top" alt={props.title}  />
               <div className="card-body">
                 <h5 className="card-title">{props.title}</h5>
                 <p className="card-text">Genre: {props.genreType}</p>
                 <p className="card-text">Rating: {props.rating}</p>
                 <p className="card-text">Years: {props.year}</p>
                 
               </div>
             </div>
           </div>
    )

}