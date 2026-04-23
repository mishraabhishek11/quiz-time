import QUSTIONS from "../question";
import { useQuizContext } from "../context/QuizContext";
import QuestionTimer from "./QuestionTimer";

function Question() {
  const { handleAnswerSelection, question } = useQuizContext();
  const shuffledAnswers = [...question.answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);
  return (
    <>
      <QuestionTimer key={question.id} />
      <h2>{question.text}</h2>
      <ul id="answers">
        {shuffledAnswers.map((ans) => {
          return (
            <li key={ans.text} className="answer">
              <button
                onClick={() => {
                  handleAnswerSelection({
                    question: question.text,
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
