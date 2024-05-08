import React, { useRef } from 'react';

const Camera = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // Function to start the camera stream
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  // Function to stop the camera stream
  const stopCamera = () => {
    if (streamRef.current) {
      const tracks = streamRef.current.getTracks();
      tracks.forEach(track => {
        track.stop();
      });
    }
  };

  // Start the camera when the component mounts
  React.useEffect(() => {
    startCamera();
    // Clean up the camera stream when component unmounts
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div>
      <h2>Camera Component</h2>
      <video ref={videoRef} autoPlay playsInline muted />
      <button onClick={stopCamera}>Turn Off Camera</button>
    </div>
  );
};

export default Camera;
