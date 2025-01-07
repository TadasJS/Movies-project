import { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import "./Header.css";


export function Header() {
    const navigate = useNavigate()
    const ctx = useContext(UserContext)
     
    

    function handleLogout () {
        ctx.logoutUser()
        // navigate('/')
    }
    
    return(
        <header className='header-container' >
          
            <Link to='/' type="button" className="btn btn-primary ms-3 header-btn ">Home</Link>
            {(ctx.user.user_role === 'user' || ctx.user.user_role === 'admin')&& <Link to='/movies' type="button" className="btn btn-primary ms-3 header-btn">Movies</Link> }
            {(ctx.user.user_role === 'user' || ctx.user.user_role === 'admin')&& <Link to='/tvshow' type="button" className="btn btn-primary ms-3 header-btn">TvShow</Link> }
            {(ctx.user.user_role === 'user' || ctx.user.user_role === 'admin')&& <Link to='/profile' type="button" className="btn btn-primary ms-3 header-btn">User Profile</Link> }
            {ctx.user.user_role === '' && <Link to='/login' type="button" className="btn btn-primary ms-3 header-btn ">Login</Link> }
            {(ctx.user.user_role === 'user' || ctx.user.user_role === 'admin') && <button to='/login' onClick={handleLogout} type="button" className="btn btn-primary ms-3 header-btn">Logout</button> }
        
        </header>
    )
}