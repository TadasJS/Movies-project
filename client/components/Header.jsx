import { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserContext } from '../context/UserContext'


export function Header() {
    const navigate = useNavigate()
    const ctx = useContext(UserContext)
     
    

    function handleLogout () {
        ctx.logoutUser()
        // navigate('/')
    }

    console.log('cia loginu user role po logout...',ctx.user.user_role)
    
    return(
        <header>
            HEADER CONTENT
            <Link to='/' type="button" className="btn btn-primary ms-3">Home</Link>
            <Link to='/registration' type="button" className="btn btn-primary ms-3">Register</Link>
           {ctx.user.user_role === 'user'&& <Link to='/profile' type="button" className="btn btn-primary ms-3">User Profile</Link> }
           {ctx.user.user_role === '' && <Link to='/login' type="button" className="btn btn-primary ms-3">Login</Link> }
           {(ctx.user.user_role === 'user' || ctx.user.user_role === 'admin') && <button to='/login' onClick={handleLogout} type="button" className="btn btn-primary ms-3">Logout</button> }
           
            <br />
            <br />
            <br />
        </header>
    )
}