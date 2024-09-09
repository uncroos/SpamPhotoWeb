// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import InstructionScreen from "./screens/InstructionScreen";
import CameraScreen from "./screens/CameraScreen";
import FrameChoiceScreen from "./screens/FrameChoiceScreen";
import FinScreen from "./screens/FinScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/instructions" element={<InstructionScreen />} />
        <Route path="/camera" element={<CameraScreen />} />
        <Route path="/frame-choice" element={<FrameChoiceScreen />} />
        <Route path="/final" element={<FinScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
