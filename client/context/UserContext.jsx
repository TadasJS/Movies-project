import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const UserContext = createContext()

export function UserProvider ({children}) {
    
    const [user, setUser] = useState ({
        email:'',
        user_role: []
    })
    

    
    function loginUser(person) {

        if (person === 'admin') {
            setUser({email: person, user_role: ['admin']})
        }  

        if(person === 'user'){
            setUser({email: person, user_role: ['user']})
        }   
        
      console.log('login end....')
    }
    
    function logoutUser() {
        setUser({
            email: '',
            user_roles: [],
               
        })        
    }
 
    return(
       <UserContext.Provider value={{user, loginUser, logoutUser}}>
        {children}
       </UserContext.Provider>
    )
}