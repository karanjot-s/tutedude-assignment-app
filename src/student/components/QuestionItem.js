import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Questions.css";

const QuestionSection = (props) => {
  const question = props.question;
  const [view, setView] = useState("open");

  const navigate = useNavigate();

  useEffect(() => {
    if (props.opened !== question.question_no) {
      setView("open");
    } else {
      setView("viewing");
    }
  }, [props.opened, question.question_no]);

  console.log("rendered QuestionItems" + question.question_no);

  function changeView() {
    navigate(`/question/${question.question_no}`, { state: true });
    if (props.opened === question.question_no) setView("viewing");
    else setView("open");
    props.onOpen(question.question_no);
  }
  var status;
  if (question.status === "pending") {
    status = "Submission Pending";
  } else if (question.status === "submitted") {
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
        {/* <Link to={`/question/${question.question_no}`}> */}
        <button className="action-button" onClick={changeView}>
          {view}→
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default QuestionSection;
