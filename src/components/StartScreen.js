import { useQuiz } from '../contexts/QuizContext';

function StartScreen() {
  const { numQuestions, start } = useQuiz();

  function handleClick() {
    start();
  }

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui" onClick={handleClick}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
