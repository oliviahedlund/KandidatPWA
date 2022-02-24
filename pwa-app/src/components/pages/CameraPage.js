import React from "react";
import "../../App.css";
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { useState, useRef } from "react";

function CameraPage() {
  const [errorMessage, setErrorMessage] = useState('');

  function handleCameraError (error) {
    setErrorMessage(error.toString());
  }

  return (
    <div id="container" className="container">
      <h1>Hello from Camera!</h1>
      <p className="error">{errorMessage}</p>
      <Camera 
        isSilentMode={true}
        onCameraError={(error) => {handleCameraError(error);}}
        isDisplayStartCameraError={false}
      />
    </div>
  );
}

export default CameraPage;