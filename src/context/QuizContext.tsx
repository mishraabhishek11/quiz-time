import React, { useCallback, useContext, useEffect, useState } from "react";
import QUSTIONS from "../question";

export const QuizContext = React.createContext({
  skippedTimeOut: 10000 as number,
  isQuizComplete: false as boolean,
  answers: [] as { question: string; text: string | null; status: string }[],
  question: {} as {
    id: string;
    text: string;
    answers: { text: string; status: string }[];
  },
  handleAnswerSelection: (ans: {
    question: string;
    text: string | null;
    status: string;
  }): void => {
    return;
  },
  handleTimedOutAnswer: (): void => {
    return;
  },
});

export const QuizContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
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

  return (
    <QuizContext.Provider
      value={{
        skippedTimeOut: 10000,
        isQuizComplete: activeQuesIndex === QUSTIONS.length,
        question: QUSTIONS[activeQuesIndex],
        answers,
        handleAnswerSelection,
        handleTimedOutAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);
