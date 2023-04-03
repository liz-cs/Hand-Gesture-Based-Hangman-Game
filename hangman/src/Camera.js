import React, { useState, useRef } from "react";

function Camera() {
    // State to hold the captured photo
    const [photo, setPhoto] = useState("");
  
    // Ref to hold the video element
    const videoRef = useRef(null);
  
    // Function to start the camera
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error("Error starting the camera", error);
      }
    };
  
    // Function to take a photo
    const takePhoto = () => {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      // canvas.width = 320;
      // canvas.height = 240;
      canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
      const dataUrl = canvas.toDataURL("image/png");
      setPhoto(dataUrl);
    };
  
    return (
      <div>
        <video ref={videoRef} width="320" height="240" autoPlay />
        <button onClick={startCamera}>Start camera</button>
        <button onClick={takePhoto}>Take photo</button>
        {photo && <img src={photo} alt="Captured photo" style={{ width: "40%", filter: "grayscale(100%)" }}/>}
      </div>
    );
  }
  
  export default Camera;