import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const useUser =() => useContext(UserContext)

export const UserProvider = ({children})=> {

    const [userName, setUsername] = useState("");

    const logIn = (name) =>{
        setUsername(name);
    }

    const logOut= ()=>{
        setUsername(null)
    };

    return (
        <UserContext.Provider value={{userName, logIn, logOut}}>
            {children}
        </UserContext.Provider>
    )
}