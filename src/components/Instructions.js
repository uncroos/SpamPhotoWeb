// src/components/Instructions.js
import React from "react";

const Instructions = () => {
  const handleNextClick = () => {
    // 아무 동작도 하지 않도록 함수는 빈 상태로 유지
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Instructions</h1>
      <p style={styles.instructionsText}>
        사진을 4장 찍고 원하는 프레임을 선택하세요. 사진은 8초 간격으로 자동으로
        촬영됩니다. 준비가 되셨으면 "다음" 버튼을 눌러주세요.
      </p>
      <button style={styles.button} onClick={handleNextClick}>
        다음
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
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  instructionsText: {
    fontSize: "1.25rem",
    marginBottom: "2rem",
    textAlign: "center",
    maxWidth: "600px",
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

export default Instructions;
