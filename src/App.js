// src/App.js
import React, { useState } from "react";
import CameraScreen from "./screen/CameraScreen";
import FrameChoiceScreen from "./screen/FrameChoiceScreen";
import FinScreen from "./screen/FinScreen";

function App() {
  const [photos, setPhotos] = useState([]);
  const [frame, setFrame] = useState("");
  const [currentScreen, setCurrentScreen] = useState("camera");

  const handlePhotosTaken = (photos) => {
    setPhotos(photos);
    setCurrentScreen("frameChoice");
  };

  const handleFrameSelected = (frame) => {
    setFrame(frame);
    setCurrentScreen("fin");
  };

  return (
    <div>
      {currentScreen === "camera" && (
        <CameraScreen onPhotosTaken={handlePhotosTaken} />
      )}
      {currentScreen === "frameChoice" && (
        <FrameChoiceScreen onFrameSelected={handleFrameSelected} />
      )}
      {currentScreen === "fin" && <FinScreen photos={photos} frame={frame} />}
    </div>
  );
}

export default App;
