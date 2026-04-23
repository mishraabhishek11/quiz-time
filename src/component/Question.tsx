import React from "react";
import QUSTIONS from "../question";

function Question({
  activeQuesIndex,
  handleAnswerSelection,
}: {
  activeQuesIndex: number;
  handleAnswerSelection: (ans: {
    question: string;
    text: string | null;
    status: string;
  }) => void;
}) {
  const shuffledAnswers = [...QUSTIONS[activeQuesIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);
  return (
    <>
      <h2>{QUSTIONS[activeQuesIndex].text}</h2>
      <ul id="answers">
        {shuffledAnswers.map((ans) => {
          return (
            <li key={ans.text} className="answer">
              <button
                onClick={() => {
                  handleAnswerSelection({
                    question: QUSTIONS[activeQuesIndex].text,
                    ...ans,
                  });
                }}
              >
                {ans.text}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Question;
