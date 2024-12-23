import {Link} from 'react-router-dom'


export function Header() {
    return(
        <header>
            HEADER CONTENT
            <Link to='/' type="button" className="btn btn-primary ms-3">Home</Link>
            <Link to='/registration' type="button" className="btn btn-primary ms-3">Register</Link>
            <br />
            <br />
            <br />
        </header>
    )
}