import React from "react";
import { useState } from "react";

export default function App() {
  const [score, setScore] = useState(4);
  const handleScoreChange = (event) => {
    setScore(Number(event.target.value));
  };
  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${score * 10}%`;

    // 2- Compute color (optional)
    let scoreColor;
    if (scoreColor < 3) {
      scoreColor = "#e74c3c";
    } else if (score < 7) {
      scoreColor = "#f3bc47";
    } else {
      scoreColor = "#2ecc71";
    }

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={score} onChange={handleScoreChange}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
