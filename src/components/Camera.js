import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const Camera = () => {
  const webcamRef = useRef(null);
  const [images, setImages] = useState([]);

  // 사진을 캡처하고 512x612로 조정하는 함수
  const capture = () => {
    if (webcamRef.current) {
      // 웹캠에서 이미지를 캡처
      const imageSrc = webcamRef.current.getScreenshot();

      // 캡처한 이미지를 특정 크기로 조정하기 위해 canvas 사용
      const image = new Image();
      image.src = imageSrc;

      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = 512;
        canvas.height = 612;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, 512, 612);

        // 조정된 이미지를 data URL 형식으로 저장
        const resizedImageSrc = canvas.toDataURL("image/jpeg");
        setImages((prevImages) => [...prevImages, resizedImageSrc]);
      };
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
        height={612}
        screenshotWidth={512} // 기본 캡처 너비 설정
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
