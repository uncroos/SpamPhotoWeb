import React from "react";
import "./Instructions.css"; // CSS 파일을 import

const Instructions = () => {
  const handleNextClick = () => {};

  return (
    <div className="Inscontainer">
      <h1 className="Institle">Instructions</h1>
      <p className="instructionsText">
        사진을 4장 찍고
        <br />
        원하는 프레임을 선택하세요.
        <br />
        사진은 8초 간격으로 자동으로 촬영됩니다.
        <br />
        준비가 되셨으면 "다음" 버튼을 눌러주세요.
      </p>
      <button className="Insbutton" onClick={handleNextClick}>
        다음
      </button>
    </div>
  );
};

export default Instructions;
