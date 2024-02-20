import Options from './Options';

function Question({
  question,
  answer,
  dispatch,
  index,
  numQuestions,
  secondsRemaining,
}) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        dispatch={dispatch}
        answer={answer}
        index={index}
        numQuestions={numQuestions}
        secondsRemaining={secondsRemaining}
      />
    </div>
  );
}

export default Question;
