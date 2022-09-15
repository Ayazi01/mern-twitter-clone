import { createContext,useEffect,useState } from "react";
import { API_URL, MY_PROFILE_PATH } from "../../constants/Constants";

export const CurrentUserContext = createContext(null);
export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [status, setStatus] = useState("loading");
    // Fetch the user data from the API (/api/me/profile)
    
    useEffect(()=>{
      fetch(API_URL+MY_PROFILE_PATH)
      .then(data=>{
          data.json().then(d=>{
              setCurrentUser(d.profile);
          setStatus("idle");
          })
          
      });},[])
    // When the data is received, update currentUser.
    // Also, set `status` to `idle`
  
    return (
      <CurrentUserContext.Provider value={{ currentUser, status }}>
        {children}
      </CurrentUserContext.Provider>
    );
  };