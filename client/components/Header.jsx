import {Link} from 'react-router-dom'


export function Header() {
    return(
        <header>
            HEADER CONTENT
            <Link to='/' type="button" className="btn btn-primary ms-3">Home</Link>
            <br />
            <br />
            <br />
        </header>
    )
}