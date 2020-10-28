import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import {motion} from "framer-motion";

function ProgressBar({file, setFile}) {
    //below takes the useEffect code from useStorage.js
    const{url, progress}=useStorage(file);

    useEffect(()=>{
        //if we receive an URL then set the file to be null, then progress bar shows none
        if(url){
            setFile(null)
        }
    },[url, setFile])
    
    return (
        <motion.div className="progressBar" 
            initial={{width:0}}
            animate={{width: progress+"%"}}
          
        ></motion.div>
    )
}

export default ProgressBar
