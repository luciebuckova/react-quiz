function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <div className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}></progress>
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </div>
  );
}

export default Progress;
