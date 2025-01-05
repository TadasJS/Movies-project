import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {jwtDecode} from 'jwt-decode'
import {  useNavigate } from "react-router-dom";
import { Login } from "../pages/Login";



function getUserFromLocalStorage() {
    let user = localStorage.getItem('user_data')
  
    if (!user){
        return  {email:'', username: '', role_name:''}
    }
    
    return JSON.parse(user)
}


export const UserContext = createContext()


export function UserProvider ({children}) {  
    
    const navigate = useNavigate()
    
    const [user, setUser] = useState (getUserFromLocalStorage())
    const [token, setToken] = useState()
    const [response, setResponse] = useState()
       
    
    
    
    function loginUser(person) {      
      
            axios
            .post ('http://localhost:3000/api/users/login', person)
            .then((res) => {
                console.log('cia response data...',res.data);
                localStorage.setItem('token', res.data.token);
                const decoded = jwtDecode(res.data.token.toString());
                setUser({...user, email: decoded.email, username:decoded.username, role_name: decoded.role_name });
                localStorage.setItem('user_data', JSON.stringify(decoded));
                navigate('/profile')
            })
            .catch ((error) => {
                console.error(error)
                
            })
            
          
            
            
        
    }
    
    function logoutUser() {
        setUser({...user, email:'', username:'', role_name:''})
        localStorage.removeItem('user_data')
        localStorage.removeItem('token')
        // setResponse('')
        
    }
    
   
    return(

        
       <UserContext.Provider value={{user, loginUser, logoutUser, response, setToken}}>
        {children}
       </UserContext.Provider>
    )
}