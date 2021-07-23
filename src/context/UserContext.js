import React, {createContext, useState} from 'react';

export const UserContext = createContext();

const initState = JSON.parse(localStorage.getItem("user"));

export default function UserContextProvider ({children}) {
    const [ user, setUser] = useState(initState);

    const login = (data) => {
        console.log( 'Inside Login ', data);
        setUser({...data , auth: true});
        localStorage.setItem('user', JSON.stringify(user))

      };
    
      // Logout updates the user data to default
      const logout = () => {
        console.log( 'Inside Logout ');
        setUser({auth: false});
        localStorage.removeItem("user");
      };

    return (
        <UserContext.Provider value ={{ user, login, logout}}> {children} </UserContext.Provider>
    )
}
