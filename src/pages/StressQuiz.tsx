import React, { useState } from "react";

interface Question {
  question: string;
  options: { text: string; score: number }[];
}

const questions: Question[] = [
  {
    question: "How often do you feel overwhelmed?",
    options: [
      { text: "Never", score: 0 },
      { text: "Sometimes", score: 1 },
      { text: "Often", score: 2 },
      { text: "Always", score: 3 },
    ],
  },
  {
    question: "Do you have trouble sleeping?",
    options: [
      { text: "No", score: 0 },
      { text: "Rarely", score: 1 },
      { text: "Frequently", score: 2 },
      { text: "Everyday", score: 3 },
    ],
  },
  {
    question: "Do you feel tired without reason?",
    options: [
      { text: "No", score: 0 },
      { text: "Sometimes", score: 1 },
      { text: "Often", score: 2 },
      { text: "Always", score: 3 },
    ],
  },
  {
    question: "Do you get irritated easily?",
    options: [
      { text: "No", score: 0 },
      { text: "Sometimes", score: 1 },
      { text: "Often", score: 2 },
      { text: "Very Easily", score: 3 },
    ],
  },
  {
    question: "Do you find it hard to concentrate?",
    options: [
      { text: "No", score: 0 },
      { text: "Rarely", score: 1 },
      { text: "Often", score: 2 },
      { text: "Always", score: 3 },
    ],
  },
];

const StressQuiz: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (value: number) => {
    const newScore = score + value;
    setScore(newScore);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const getResultLevel = (): "low" | "moderate" | "high" => {
    if (score <= 4) return "low";
    if (score <= 8) return "moderate";
    return "high";
  };

  const getResultText = () => {
    if (score <= 4) return "Low Stress";
    if (score <= 8) return "Moderate Stress";
    return "High Stress";
  };

  const stressTips: Record<string, string[]> = {
    low: [
      "Maintain 7–8 hours of sleep daily.",
      "Continue light exercise like walking.",
      "Eat balanced meals with protein and fiber.",
      "Practice 5 minutes of gratitude journaling."
    ],
    moderate: [
      "Practice 4-7-8 breathing for 10 minutes.",
      "Reduce caffeine and sugar intake.",
      "Try yoga or stretching for 20–30 minutes.",
      "Follow a fixed sleep schedule."
    ],
    high: [
      "Do box breathing (4-4-4-4 technique).",
      "Take short breaks every 2 hours.",
      "Eat small, protein-rich meals.",
      "Consider speaking with a counselor or trusted person."
    ],
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2>Mental Stress Quiz</h2>

      {finished ? (
        <div>
          <h3>Your Stress Level: {getResultText()}</h3>
          <p>Total Score: {score}</p>

          <h4>Recommended Stress Reduction Tips:</h4>
          <ul style={{ listStyleType: "disc", textAlign: "left", maxWidth: "500px", margin: "0 auto" }}>
            {stressTips[getResultLevel()].map((tip, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                {tip}
              </li>
            ))}
          </ul>

          <button
            onClick={() => {
              setCurrent(0);
              setScore(0);
              setFinished(false);
            }}
            style={{ marginTop: "20px", padding: "10px 20px" }}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h3>{questions[current].question}</h3>
          {questions[current].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.score)}
              style={{
                display: "block",
                margin: "10px auto",
                padding: "10px 20px",
              }}
            >
              {option.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default StressQuiz;