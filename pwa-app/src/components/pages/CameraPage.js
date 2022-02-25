import React from "react";
import "../../App.css";
import Camera from 'react-html5-camera-photo';
/*import 'react-html5-camera-photo/build/css/index.css';*/
import './CameraPage.css'
import { useState } from "react";
/*import ImagePreview from "./ImagePreview";*/

function CameraPage() {

  const [errorMessage, setErrorMessage] = useState('');
  const [dataUri, setDataUri] = useState('');

  function handleCameraError (error) {
    setErrorMessage(error.toString());
  }

  function handleTakePhoto (dataUri) {
    setDataUri(dataUri);
  }

  function closePic () {
    setDataUri('');
  }

  return (
    <div id="container" className="container">
      <h1>Hello from Camera!</h1>
      <p className="error">{errorMessage}</p>
      
        {
          (dataUri)
          ? <div className="react-html5-camera-photo">
              <div className="btn" >
                <i class="far fa-times-circle" onClick={closePic}></i>
                </div>
              <img src={dataUri} alt="webcam"/>
            </div>
          : <Camera 
              isSilentMode={true}
              onTakePhoto = {handleTakePhoto}
              onCameraError={(error) => {handleCameraError(error);}}
              isDisplayStartCameraError={false}
              isFullscreen={false}
          />
        }
      
  
    </div>
  );
}

export default CameraPage;