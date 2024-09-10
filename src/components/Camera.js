import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const Camera = () => {
  const webcamRef = useRef(null);
  const [images, setImages] = useState([]);

  // 사진을 찍는 함수
  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImages((prevImages) => [...prevImages, imageSrc]);
    }
  };

  // 사진을 찍는 핸들러 (4장의 사진을 촬영)
  const takePictures = () => {
    if (images.length < 4) {
      capture();
    }
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={512}
        height={800}
      />
      <button onClick={takePictures} disabled={images.length >= 4}>
        사진 찍기
      </button>
      <div className="photo-frame">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`snapshot-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Camera;
