import React, { useState, useEffect } from "react";

const SubmissionPending = (props) => {
  var question = props.question;
  const [resubmit, setResubmit] = useState(false);
  const [view, setView] = useState("View Your Solution");

  // useEffect(() => {
  //   question = props.question;
  //   console.log("useEffect ran");
  // }, []);

  console.log("rendered completedsec" + question.question_no + "  " + resubmit);

  // function solutionChangeHandler(event) {
  //   console.log(event.target.value);
  //   setSolution(event.target.value);
  // }

  function changeButton(event) {
    if (view === "View Your Solution") setView("Mentor's Feedback");
    else setView("View Your Solution");
  }

  function changeToSubPending(event) {
    setResubmit(true);
  }

  return (
    <React.Fragment>
      {!resubmit && (
        <div className="sub-pending-sec">
          <h3>Question</h3>
          <p>{question.question}</p>
          {question.instructions && (
            <div>
              <h3>Instructions</h3>
              <p>{question.instructions}</p>
            </div>
          )}

          {view === "View Your Solution" && (
            <div className="flex-column">
              <h3>Solution You Submitted</h3>
              <div className="white-area">Solution</div>
            </div>
          )}
          {view === "Mentor's Feedback" && (
            <div className="flex-column">
              <h3>Mentor's Feedback</h3>
              <div className="white-area">asdfghjk</div>
            </div>
          )}

          <div className="button-flex">
            <button onClick={changeButton}>
              {" "}
              {view === "Mentor's Feedback"
                ? "View Your Solution"
                : "Mentor's Feedback"}
            </button>
            <button onClick={changeToSubPending}>Re-submit</button>
          </div>
        </div>
      )}
      {resubmit && (
        <SubmissionPending question={question} showPrevSolution={true} />
      )}
    </React.Fragment>
  );
};
export default SubmissionPending;
