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
    <div className="container">
      <img src={logo} alt="SpamNeCut Logo" className="logo" />{" "}
      {/* Logo Image */}
      <h1 className="title">스팸네컷</h1>
      <button className="button" onClick={handleStartClick}>
        시작하기
      </button>
    </div>
  );
};

export default Start;
