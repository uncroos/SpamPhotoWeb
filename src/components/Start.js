// src/components/Start.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Start.css"; // Import the CSS file
import logo from "../assets/spam_logo.png"; // Adjust the path according to your folder structure

const Start = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    // Navigate to /instructions when the user clicks the start button
    navigate("/instructions");
  };

  return (
    <div className="Stacontainer">
      <img src={logo} alt="SpamNeCut Logo" className="Stalogo" />{" "}
      {/* Logo Image */}
      <h1 className="StaStatitle">스팸네컷</h1>
      <button className="Stabutton" onClick={handleStartClick}>
        시작하기
      </button>
    </div>
  );
};

export default Start;
