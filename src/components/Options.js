import Timer from './Timer';

function Options({
  question,
  dispatch,
  answer,
  index,
  numQuestions,
  secondsRemaining,
}) {
  const hasAnswered = answer !== null;
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
            onClick={() => dispatch({ type: 'newAnswer', payload: index })}>
            {option}
          </button>
        ))}
      </div>
      <footer>
        <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
        {hasAnswered &&
          (index < numQuestions - 1 ? (
            <button
              onClick={() => dispatch({ type: 'nextQuestion' })}
              className="btn btn-ui">
              Next question
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: 'finish' })}
              className="btn btn-ui">
              Finish
            </button>
          ))}
      </footer>
    </>
  );
}

export default Options;
