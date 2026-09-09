import { collection, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

export function useRealTimeTweet(postId, ) {
    const [post, setPost] = useState({});
    const [isLoading, setIsLoading] = useState(false);  
    const [error, setError] = useState("");
     
    useEffect(() => {

        const docRef = doc(db, 'posts', postId);
        const unsubscribe = onSnapshot(docRef, (doc) => {
            try{
                setIsLoading(true);
                setError("")
                    const postData = doc.data()
                    setPost(postData);
            } catch (err) {
                console.error("Error fetching real-time post:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
         

        });
        return () => unsubscribe(); 
    }, [postId]);

    return { post, isLoading, error };

}
