import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartPage from "./components/StartPage";
import InstructionsPage from "./components/InstructionsPage";
// ... other components

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/instructions" element={<InstructionsPage />} />
        {/* ... other routes */}
      </Routes>
    </Router>
  );
}
