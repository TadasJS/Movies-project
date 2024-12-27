import { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserContext } from '../context/UserContext'


export function Header() {
    const navigate = useNavigate()
    const ctx = useContext(UserContext)
     
    const userLoggedIn = ctx.user.loggedIn

    function handleLogout () {
        ctx.logoutUser()
        navigate('/')
    }

    return(
        <header>
            HEADER CONTENT
            <Link to='/' type="button" className="btn btn-primary ms-3">Home</Link>
            <Link to='/registration' type="button" className="btn btn-primary ms-3">Register</Link>
           {!userLoggedIn && <Link to='/login' type="button" className="btn btn-primary ms-3">Login</Link> }
           {userLoggedIn && <button to='/login' onClick={handleLogout} type="button" className="btn btn-primary ms-3">Logout</button> }
            <br />
            <br />
            <br />
        </header>
    )
}