import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import "./App.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [step, setStep] = useState(1);
  const frameRef = useRef(null);

  // 사진 촬영 처리
  const takePhoto = () => {
    if (photos.length < 4) {
      const newPhoto = {
        id: photos.length + 1,
        src: `https://randomuser.me/api/portraits/men/${
          photos.length + 10
        }.jpg`,
      };
      setPhotos([...photos, newPhoto]);
    }
  };

  // 이미지 다운로드 처리
  const downloadImage = () => {
    html2canvas(frameRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "spamcut-photo.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="app">
      {step === 1 && (
        <div className="start-screen">
          <h1>스팸네컷</h1>
          <button onClick={() => setStep(2)}>시작하기</button>
        </div>
      )}

      {step === 2 && (
        <div className="guide">
          <h2>안내 페이지</h2>
          <p>사진 촬영을 진행해 주세요.</p>
          <button onClick={() => setStep(3)}>촬영 시작</button>
        </div>
      )}

      {step === 3 && (
        <div className="camera">
          <h2>사진 촬영</h2>
          <div
            className="photo-frame"
            style={{ width: "512px", height: "612px" }}
          >
            {photos.map((photo) => (
              <img key={photo.id} src={photo.src} alt={`photo-${photo.id}`} />
            ))}
          </div>
          {photos.length < 4 && <button onClick={takePhoto}>사진 촬영</button>}
          {photos.length === 4 && (
            <button onClick={() => setStep(4)}>완료</button>
          )}
        </div>
      )}

      {step === 4 && (
        <div className="result">
          <h2>촬영된 사진</h2>
          <div
            className="final-photo-frame"
            ref={frameRef}
            style={{
              width: "1200px",
              height: "1800px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
            }}
          >
            {photos.map((photo) => (
              <img
                key={photo.id}
                src={photo.src}
                alt={`final-photo-${photo.id}`}
                style={{ width: "600px", height: "900px" }}
              />
            ))}
          </div>
          <button onClick={downloadImage}>다운로드</button>
        </div>
      )}
    </div>
  );
};

export default App;
