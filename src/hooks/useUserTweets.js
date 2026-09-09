import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

export function useUserTweets(userId) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);  
    const [error, setError] = useState("");
     
    useEffect(() => {

        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"), where("userId", "==", userId),where("postId","==",null));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            try{
                setIsLoading(true);
                setError("")
                    const postData = snapshot.docs.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    }));
                    setPosts(postData);
            } catch (err) {
                console.error("Error fetching real-time posts:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
         

        });
        return () => unsubscribe(); 
    }, [userId]);

    return { posts, isLoading, error };

}
