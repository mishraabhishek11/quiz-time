import { useEffect, useState } from "react";
import { useQuizContext } from "../context/QuizContext";

function QuestionTimer() {
  const { skippedTimeOut, handleTimedOutAnswer } = useQuizContext();
  const [remaining, setRemaining] = useState(skippedTimeOut);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTimedOutAnswer();
    }, skippedTimeOut);

    return () => {
      clearTimeout(timer);
    };
  }, [skippedTimeOut, handleTimedOutAnswer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining((prev) => prev - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="question">
      <progress id="question-time" max={skippedTimeOut} value={remaining} />
    </div>
  );
}

export default QuestionTimer;
