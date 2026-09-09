import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase"

export const useComments =(postId)=>{



    const [comments,setComments] = useState ([])
    const[isLoading,setIsLoading]= useState (false)
    const [error,setError] = useState ("")
    
    useEffect(()=>{
        const q = query(collection(db,"posts"),where("postId","==",postId),orderBy("createdAt","desc") )
        const unsub = onSnapshot(q,(snapshot)=>{
            const data = snapshot.docs.map(doc=>(
                {id:doc.id,...doc.data()}
                
                
            ))
            setComments(data)
        })
        return ()=>unsub()



    },[postId])
    return{comments,isLoading,error}
}