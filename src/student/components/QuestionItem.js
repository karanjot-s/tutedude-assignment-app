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

  console.log("rendered QuestionItems" + question.question_no);

  function changeView() {
    // if (props.opened === question.question_no) setView("viewing");
    // else setView("open");
    props.onOpen(question.question_no);
  }
  var status;
  if (question.status == "pending") {
    status = "Submission Pending";
  } else if (question.status == "submitted") {
    status = "Under Evaluation";
  } else status = "Completed";

  return (
    <div>
      <div className={`ques-item ${view === "viewing" ? "opened" : ""}`}>
        {/* {view === "viewing" && (
          <div className="rounds">
            <div></div>
          </div>
        )} */}
        <span>Q{question.question_no}</span>
        <span>{status}</span>
        <button className="action-button" onClick={changeView}>
          {view}→
        </button>
      </div>
    </div>
  );
};

export default QuestionSection;
