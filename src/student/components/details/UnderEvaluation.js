import React, { useState, useEffect } from "react";

const SubmissionPending = (props) => {
  var question = props.question;

  const [viewSolButton, setView] = useState(false);

  // useEffect(() => {
  //   question = props.question;
  // }, [props.question]);

  console.log("rendered evaluationsec" + question.question_no);

  // function solutionChangeHandler(event) {
  //   console.log(event.target.value);
  //   setSolution(event.target.value);
  // }

  function showSolution(event) {
    setView(true);
  }

  return (
    <div className="sub-pending-sec">
      <h3>Question</h3>
      <p>{question.question}</p>
      {question.instructions && (
        <div>
          <h3>Instructions</h3>
          <p>{question.instructions}</p>
        </div>
      )}

      {!viewSolButton && (
        <div className="flex-column">
          <h3>Status of Submission</h3>

          <div className="white-area">status</div>
          <div className="button-flex">
            <button onClick={showSolution} className="button-flex">
              View you solution
            </button>
          </div>
        </div>
      )}
      {viewSolButton && (
        <div className="flex-column">
          <h3>Solution You Submitted</h3>
          <div className="white-area">fgjgj</div>
          <p>
            <strong>Note:</strong>the file has been submitted Successfully
          </p>
        </div>
      )}
    </div>
  );
};
export default SubmissionPending;
