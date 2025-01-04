import axios from "axios";
import { createContext, useState } from "react";
import {jwtDecode} from 'jwt-decode'



function getUserFromLocalStorage() {
    let user = localStorage.getItem('user_data')
    console.log(user)
    if (!user){
      return  {email:'', username: '', role_name:''}
    }
    
    return JSON.parse(user)
}


export const UserContext = createContext()

export function UserProvider ({children}) {
    
    const [user, setUser] = useState (getUserFromLocalStorage())
    const [token, setToken] = useState()
    const [response, setResponse] = useState('err')

    
    
    function loginUser(person) {
        
   
            axios
            .post ('http://localhost:3000/api/users/login', person)
            .then((res) => {
                console.log('cia response data...',res.data)
                setResponse(res.data)
                setToken(res.data.token)

                console.log('cia tokenas...', token)
                // localStorage.setItem('token', res.data.token)
                const decoded = jwtDecode(token.toString())
                setUser({...user, email: decoded.email, username:decoded.username, role_name: decoded.role_name })
                localStorage.setItem('user_data', JSON.stringify(decoded))
                
            })
            
     
        console.log('user antrinis', user)
        console.log('cia user context response....', response)
        
        // if (person === 'admin') {
        //     setUser({...user, email: person, user_role:'admin'})            
        //     localStorage.setItem('token', JSON.stringify({email: person, user_role:'admin'}))
           
        // }  

        // if(person === 'user'){          
        //     setUser({...user, email: person, user_role:'user'})
        //     localStorage.setItem('token', JSON.stringify({email: person, user_role:'user'}))
                       
        // }   
        
    }
    
    function logoutUser() {
        setUser({...user, email:'', username:'', role_name:''})
        localStorage.removeItem('user_data')

    }
 
    return(
       <UserContext.Provider value={{user, loginUser, logoutUser, response}}>
        {children}
       </UserContext.Provider>
    )
}