import React from 'react'
import {motion} from "framer-motion";

function Modal({selectedImg, setSelectedImg}) {
    const handleClick=(e)=>{

        //only set to null if i click outside the image
        if(e.target.classList.contains('backdrop')){
            setSelectedImg(null);    
        }
        
    }
    return (
        //fades while opening
        <motion.div className="backdrop" onClick={handleClick}
        initial={{opacity:0}}
        animate={{opacity:1}}
        >
            <motion.img src={selectedImg} alt="enlarged pic"
            initial={{y: "-100vh"}}
            animate={{y:0}}
            />
        </motion.div>
    )
}

export default Modal
