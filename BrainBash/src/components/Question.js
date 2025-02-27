import Options from "./Options";

function Question({ currentQuestion, index, dispatch, answer }) {
  return (
    <div className="question">
      <h4>{currentQuestion.question}</h4>
      <Options
        currentQuestion={currentQuestion}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
}

export default Question;
