import React,{ useEffect, useState } from 'react'
import { firestore } from '../firebase';

function useFirestore(collection) {
    const[docs, setDocs]= useState([]);

    useEffect(()=>{
        //passing the prop
        const unsub= firestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snapshot)=>{
            let documents=[];
            snapshot.forEach((doc)=>{
                documents.push({...doc.data(), id: doc.id})
            })
     
        setDocs(documents);
    })
    return()=>unsub();
    },[collection])
    
    //unsubscribe the collection when we no longer use
    
    return{docs}
}
export default useFirestore;
