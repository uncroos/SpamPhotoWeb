// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./components/Start";
import Instructions from "./components/Instructions"; // 추가적인 화면들

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/instructions" element={<Instructions />} />
        {/* 다른 화면들도 여기에 추가 */}
      </Routes>
    </Router>
  );
}

export default App;
