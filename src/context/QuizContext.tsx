import React, { useCallback, useContext, useEffect, useState } from "react";
import QUSTIONS from "../question";

export const QuizContext = React.createContext({
  skippedTimeOut: 10000 as number,
  isQuizComplete: false as boolean,
  answered: [] as { question: string; text: string | null; status: string }[],
  activeQuestion: {} as {
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
  const [answered, setAnswered] = useState<
    { question: string; text: string | null; status: string }[]
  >([]);

  const activeQuesIndex = answered.length;

  const handleAnswerSelection = (ans: {
    question: string;
    text: string | null;
    status: string;
  }) => {
    setAnswered((prev) => {
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
        activeQuestion: QUSTIONS[activeQuesIndex],
        answered,
        handleAnswerSelection,
        handleTimedOutAnswer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);
