import React, { useEffect, useState } from 'react'

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Navigate, Outlet } from 'react-router';

function ProtectedLayoute() {
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const [isLoading,setIsLoading] =useState(true)
    const auth = getAuth();


    useEffect(()=>{

        const unsubscribe= onAuthStateChanged(auth, (user) => {
            setIsAuthenticated(!!user)
            setIsLoading(false)
 
});


return ()=> unsubscribe()
    },[auth])

    if(isLoading) return <p>Loading...</p>
    if(!isAuthenticated) return <Navigate to={"/signin"} replace={true}/>
    
  return (
   <Outlet/>
  )
}

export default ProtectedLayoute