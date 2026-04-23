import React, { useCallback, useEffect, useState } from "react";
import QUSTIONS from "../question";
import QuestionTimer from "./QuestionTimer";
import Summary from "./Summary";

function Quiz() {
  const [answers, setAnswers] = useState<
    { question: string; text: string | null; status: string }[]
  >([]);

  const activeQuesIndex = answers.length;

  const handleAnswerSelection = (ans: {
    question: string;
    text: string | null;
    status: string;
  }) => {
    setAnswers((prev) => {
      return [...prev, ans];
    });
  };

  const handleTimedOutAnswer = useCallback(() => {
    handleAnswerSelection({
      question: QUSTIONS[activeQuesIndex].text,
      text: null,
      status: "incorrect",
    });
  }, [activeQuesIndex]);

  if (activeQuesIndex == QUSTIONS.length) {
    return <Summary answers={answers} />;
  }

  const shuffledAnswers = [...QUSTIONS[activeQuesIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={QUSTIONS[activeQuesIndex].id}
          timeout={10000}
          onTimeout={handleTimedOutAnswer}
        />
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
      </div>
    </div>
  );
}

export default Quiz;
