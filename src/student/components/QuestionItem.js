import React, { useState, useEffect } from "react";

import "./Questions.css";

const QuestionSection = (props) => {
  const question = props.question;
  const [view, setView] = useState("open");

  useEffect(() => {
    if (props.opened !== question.question_no) {
      setView("open");
    } else {
      setView("viewing");
    }
  }, [props.opened, question.question_no]);

  // console.log("rendered QuestionItems" + question.question_no);

  function changeView() {
    // navigate(`/question/${question.question_no}`, { state: true });
    if (props.opened === question.question_no) setView("viewing");
    else setView("open");
    props.onOpen(question.question_no);
  }
  var status;
  if (question.status === "pending") {
    status = "Submission Pending";
  } else if (question.status === "submitted") {
    status = "Under Evaluation";
  } else if (question.status === "resubmit") {
    status = "Resubmission Required";
  } else status = "Completed";

  return (
    <div>
      <div
        className={`ques-item ${question.status} ${
          view === "viewing" ? "opened" : ""
        }`}
      >
        {/* {view === "viewing" && (<div className="rounds"><div></div></div>)} */}
        <span>Q{question.question_no}</span>
        <span>{status}</span>
        {/* <Link to={`/question/${question.question_no}`}> */}
        <button className="action-button" onClick={changeView}>
          {view}
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.59 0.589844L6 5.16984L1.41 0.589844L0 1.99984L6 7.99984L12 1.99984L10.59 0.589844Z"
              fill="#800080"
            />
          </svg>
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default QuestionSection;
