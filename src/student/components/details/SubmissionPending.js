import React, { useState, useEffect } from "react";

const SubmissionPending = (props) => {
  var question = props.question;

  const [solution, setSolution] = useState("");
  const [submit, setSubmit] = useState(false);

  //

  useEffect(() => {
    const viewPrev = question.status;
    console.log(viewPrev);
    setSolution("");
    setSubmit(false);
  }, [props.question]);

  console.log("rendered submitsec" + question.question_no);

  function solutionChangeHandler(event) {
    console.log(event.target.value);
    setSolution(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    setSolution("");
    setSubmit(true);
  }

  return (
    <div className="sub-pending-sec">
      {!submit && (
        <div className="before-submit">
          <h3>Question</h3>
          <p>{question.question}</p>
          {question.instructions && (
            <div>
              <h3>Instructions</h3>
              <p>{question.instructions}</p>
            </div>
          )}
          <form onSubmit={submitHandler}>
            <label htmlFor="solution">
              <h3>Your Solution</h3>
            </label>
            <textarea
              className="sol-textarea"
              id="solution"
              //rows={4}
              onChange={solutionChangeHandler}
              value={solution}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      {submit && (
        <div className="after-sub">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" />
          </svg>
          Submitted Successfully!
        </div>
      )}
    </div>
  );
};
export default SubmissionPending;
