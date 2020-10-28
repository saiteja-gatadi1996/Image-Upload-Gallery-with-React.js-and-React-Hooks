import React,{ useEffect, useState } from 'react'
import { firestore, storage,timestamp } from '../firebase';

function useStorage(file) {
    const[progress, setProgress]= useState(0);
    const[url, setUrl]=useState(null);
    const[error, setError]= useState(null);

    useEffect(()=>{

        //create a ref
        const storageRef= storage.ref(file.name);
        const collectionRef= firestore.collection('images')

        //upload that file
        storageRef.put(file).on('state_changed', (snap)=>{
            let percentage= (snap.bytesTransferred/snap.totalBytes)*100;
            setProgress(percentage);
        },(err)=>{
            setError(err)
        }, async()=>{
            const url= await storageRef.getDownloadURL();
            const createdAt= timestamp();
            collectionRef.add({
                url,createdAt

            })
            setUrl(url);
        }
        )
    },[file])

    return {progress, url, error}
}

export default useStorage
