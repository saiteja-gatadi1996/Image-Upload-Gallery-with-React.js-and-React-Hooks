import React, { useState } from 'react'
import ProgressBar from './ProgressBar';


function UploadForm() {
    const[file,setFile]= useState(null)
    const[error, setError]= useState(null)

    const types=['image/png', 'image/jpeg'];

    const changeHandler=(e)=>{
      
        let selected= e.target.files[0];

        //selected the user type
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('')    
        }else{
            setFile(null);
            setError('Please select the Image format either JPEG or PNG')
            
        }
    }
    return (
        <div className="uploadForm">
            <form>
            <label>
            <input type="file" onChange={changeHandler}/>
            <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
            {/* ouptut below only when file is selected */}
            {/* setting progressbar to null so that it will not show again */}
            {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
            </form>
        </div>
    )
}

export default UploadForm
