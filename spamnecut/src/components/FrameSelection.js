import React, { useState } from "react";

function FrameSelection({ photos, onFrameSelect }) {
  const [selectedFrame, setSelectedFrame] = useState(null);

  const handleFrameClick = (frame) => {
    setSelectedFrame(frame);
    onFrameSelect(frame);
  };

  return (
    <div>
      {/* Display frame options */}
      {/* Pass selectedFrame to FinalImage */}
    </div>
  );
}
