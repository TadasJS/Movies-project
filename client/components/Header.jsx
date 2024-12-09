import {Link} from 'react-router-dom'


export function Header() {
    return(
        <header>
            HEADER CONTENT
            <Link to='/' type="button" className="btn btn-primary ms-3">Home</Link>
            <Link to='/addcardmov' type="button" className="btn btn-danger ms-3">Add card </Link>
            <br />
            <br />
            <br />
        </header>
    )
}