import React from "react";
import award from "../assets/quiz-complete.png";

function Summary({
  answers,
}: {
  answers: {
    question: string;
    text: string | null;
    status: string;
  }[];
}) {
  const skipped = answers.filter((a) => a.text === null).length;
  const correctAnswers = answers.filter((a) => a.status === "correct").length;
  const skippedShare = Math.round((skipped / answers.length) * 100);
  const correctAnswersShare = Math.round(
    (correctAnswers / answers.length) * 100,
  );
  return (
    <div id="summary">
      <img src={award} />
      <h2>Quiz Complete</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">Correct</span>
        </p>
        <p>
          <span className="number">
            {100 - skippedShare - correctAnswersShare}%
          </span>
          <span className="text">Incorrect</span>
        </p>
      </div>
      <ol>
        {answers.map((ans, index) => {
          return (
            <li key={ans.question}>
              <h3>{index + 1}</h3>
              <p className="question">{ans.question}</p>
              <p
                className={
                  ans.text
                    ? ans.status === "correct"
                      ? "user-answer correct"
                      : "user-answer wrong"
                    : "user-answer skipped"
                }
              >
                {ans.text ? ans.text : "Skipped"}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Summary;
