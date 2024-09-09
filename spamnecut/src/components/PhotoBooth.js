import React, { useState, useEffect, useRef } from "react";
import Webcam from "react-webcam"; // Or your preferred webcam library

function PhotoBooth() {
  const webcamRef = useRef(null);
  const [photos, setPhotos] = useState([]);
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    let intervalId;
    if (photos.length < 4) {
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            capturePhoto();
            return 8;
          } else {
            return prevCountdown - 1;
          }
        });
      }, 1000);
    } else {
      // Navigate to frame selection after 4 photos
    }

    return () => clearInterval(intervalId);
  }, [photos]);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhotos((prevPhotos) => [...prevPhotos, imageSrc]);
  };

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <div>Countdown: {countdown}</div>
    </div>
  );
}
