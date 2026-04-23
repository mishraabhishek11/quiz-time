import QuestionTimer from "./QuestionTimer";
import Summary from "./Summary";
import Question from "./Question";
import { useQuizContext } from "../context/QuizContext";

function Quiz() {
  const { isQuizComplete, question } = useQuizContext();

  if (isQuizComplete) {
    return <Summary />;
  }

  return (
    <div id="quiz">
      <Question />
    </div>
  );
}

export default Quiz;
