import React from "react";
import "../../App.css";
import Camera, {FACING_MODES} from 'react-html5-camera-photo';
import './CameraPage.css'
import { useState } from "react";
import { MobileView } from 'react-device-detect';

function CameraPage() {
  
  const [errorMessage, setErrorMessage] = useState('');
  const [dataUri, setDataUri] = useState('');
  const [facingMode, setFacingMode] = useState(FACING_MODES.USER);
  const [mirroredMode, setMirroredMode] = useState(true);

  function handleCameraError (error) {
    setErrorMessage(error.toString());
  }

  function handleTakePhoto (dataUri) {
    setDataUri(dataUri);
  }

  function closePic () {
    setDataUri('');
  }

  function switchCamera () {
    (mirroredMode) 
    ? setMirroredMode(false) 
    : setMirroredMode(true);
  }

  return (
    <div id="container" className="container">
      <h1>Hello from Camera!</h1>
      <p className="error">{errorMessage}</p>
      
        {
          (dataUri)
          ? <div className="react-html5-camera-photo">
              <div className="btn">
                  <i class="far fa-times-circle" onClick={closePic}></i>
              </div>
              <img src={dataUri} alt="webcam"/>
            </div>
          : 
          <div className="react-html5-camera-photo">
            <MobileView className="btn" >
              <i class="fas fa-exchange-alt" onClick={switchCamera}></i>
            </MobileView>
            <Camera
              isSilentMode={true}
              onTakePhoto = {handleTakePhoto}
              onCameraError={(error) => {handleCameraError(error);}}
              isDisplayStartCameraError={false}
              isFullscreen={false}
              idealFacingMode = {(mirroredMode)? FACING_MODES.USER: FACING_MODES.ENVIRONMENT}
              isImageMirror = {mirroredMode}
            />
          </div>
        }
    </div>
  );
}

export default CameraPage;