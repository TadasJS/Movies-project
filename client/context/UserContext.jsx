import { createContext, useState } from "react";

const initialUser = {
    loggedIn: false,   
}

export const UserContext = createContext(undefined)

export function UserContextValues () {
    const [user, setUser] = useState (initialUser)
    
    function loginUser() {
        console.log('loggin in ...')
        setUser(prew => ({...prew, loggedIn: true}))
    }

    function logoutUser() {
        console.log('logout in ...')
        setUser(prew => ({...prew, loggedIn: false}))
    }
    
    // function updateUsername(newUsername) {
        //     console.log('loggin in ...')
        //     setUser(prew => ({...prew, username: newUsername}))
        // }
        
        return {
            user,  
            loginUser, 
            logoutUser, 
        }
}

export function UserCntextProvider ({children}) {
    return(
       <UserContext.Provider value={UserContextValues()}>
        {children}
       </UserContext.Provider>
    )
}