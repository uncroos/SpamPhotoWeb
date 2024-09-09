import { useNavigate } from "react-router-dom";

function StartPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/instructions");
  };

  return (
    <div>
      <h1>Welcome to SpamNeCut!</h1>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}
