// src/components/Start.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    // 사용자가 시작 버튼을 클릭하면 /instructions 페이지로 이동
    navigate("/instructions");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>SpamNeCut</h1>
      <button style={styles.button} onClick={handleStartClick}>
        시작하기
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "2rem",
  },
  button: {
    fontSize: "1.5rem",
    padding: "1rem 2rem",
    backgroundColor: "#6200ea",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Start;
