import QUSTIONS from "../question";
import { useQuizContext } from "../context/QuizContext";
import QuestionTimer from "./QuestionTimer";

function Question() {
  const { handleAnswerSelection, activeQuestion } = useQuizContext();
  const shuffledAnswers = [...activeQuestion.answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);
  return (
    <>
      <QuestionTimer key={activeQuestion.id} />
      <h2>{activeQuestion.text}</h2>
      <ul id="answers">
        {shuffledAnswers.map((ans) => {
          return (
            <li key={ans.text} className="answer">
              <button
                onClick={() => {
                  handleAnswerSelection({
                    question: activeQuestion.text,
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
