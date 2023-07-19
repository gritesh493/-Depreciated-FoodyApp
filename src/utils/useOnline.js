import { useEffect, useState } from "react";

const useOnline=()=>{
    const [isOnline,setIsOnline]=useState(/*true*/navigator.onLine);

    
    
    useEffect(()=>{
        const handleOnline=()=>{
            console.log("--true")
            setIsOnline(true);
        }
        const handleOffline=()=>{
            console.log("--false")
            setIsOnline(false);
        }
        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);
        console.log("useeffect");

        return()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }
    },[])
    
    return isOnline;
}

export default useOnline;