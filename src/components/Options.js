import { useQuiz } from '../contexts/QuizContext';
import Timer from './Timer';

function Options() {
  const {
    question,
    answer,
    index,
    numQuestions,
    newAnswer,
    nextQuestion,
    finish,
  } = useQuiz();

  const hasAnswered = answer !== null;

  function handleNew(index) {
    newAnswer(index);
  }

  function handleNext() {
    nextQuestion();
  }

  function handleFinish() {
    finish();
  }

  return (
    <>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            className={`btn btn-option ${index === answer ? 'answer' : ''} ${
              hasAnswered
                ? index === question.correctOption
                  ? 'correct'
                  : 'wrong'
                : ''
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => handleNew(index)}>
            {option}
          </button>
        ))}
      </div>
      <footer>
        <Timer />
        {hasAnswered &&
          (index < numQuestions - 1 ? (
            <button onClick={() => handleNext()} className="btn btn-ui">
              Next question
            </button>
          ) : (
            <button onClick={() => handleFinish()} className="btn btn-ui">
              Finish
            </button>
          ))}
      </footer>
    </>
  );
}

export default Options;
