// src/components/Start.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Start.css"; // Import the CSS file

const Start = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    // Navigate to /instructions when the user clicks the start button
    navigate("/instructions");
  };

  return (
    <div className="container">
      <h1 className="title">SpamNeCut</h1>
      <button className="button" onClick={handleStartClick}>
        시작하기
      </button>
    </div>
  );
};

export default Start;
