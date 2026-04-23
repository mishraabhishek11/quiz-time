import QUSTIONS from "../question";
import QuestionTimer from "./QuestionTimer";
import Summary from "./Summary";
import Question from "./Question";
import { useQuizContext } from "../context/QuizContext";

function Quiz() {
  const {
    skippedTimeOut,
    activeQuesIndex,
    answers,
    handleAnswerSelection,
    handleTimedOutAnswer,
  } = useQuizContext();

  if (activeQuesIndex == QUSTIONS.length) {
    return <Summary answers={answers} />;
  }

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={QUSTIONS[activeQuesIndex].id}
          timeout={skippedTimeOut}
          onTimeout={handleTimedOutAnswer}
        />
      </div>
      <Question
        activeQuesIndex={activeQuesIndex}
        handleAnswerSelection={handleAnswerSelection}
      />
    </div>
  );
}

export default Quiz;
