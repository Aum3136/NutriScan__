import { Routes, Route, useNavigate } from "react-router-dom";
import Scan from "./pages/Scan";
import StressQuiz from "./pages/StressQuiz";
import DietPlan from "./pages/DietPlan";
function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <div className="logo">NutriScan</div>
        <div className="nav-links">
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={() => navigate("/scan")}>Scan</span>
          <span onClick={() => navigate("/quiz")}>Stress Quiz</span>
          <button onClick={() => navigate("/diet")}>
  Diet Plan
</button>
        </div>
      </div>

      <div className="hero">
        <div className="hero-text">
          <h1>
            Snap, Analyze, and <br /> Track Your Meals
          </h1>
          <p>
            NutriScan makes understanding your food's nutrition as simple
            as taking a picture.
          </p>

          <button
            className="cta-button"
            onClick={() => navigate("/scan")}
          >
            Scan Food Now
          </button>
        </div>

        <div className="hero-image">
          <img src="/hero.jpg" alt="Healthy food" />
        </div>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scan" element={<Scan />} />
      <Route path="/quiz" element={<StressQuiz />} />
        <Route path="/diet" element={<DietPlan />} />

    </Routes>
  );
}