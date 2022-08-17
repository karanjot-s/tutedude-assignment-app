import React, { useState } from "react";
import "./AssignmentItem.css";

import QuestionSection from "./QuestionSection";

const AssignmentItem = (props) => {
  const assignment = props.assignment;

  const [action, setAction] = useState("open");
  function changeAction() {
    if (action === "close") setAction("open");
    else setAction("close");
  }
  const percent =
    (assignment.progress * 100) / assignment.questions.length + "%";

  return (
    <div className="ass-item">
      <div className="ass-details">
        <span className="no">{props.assNo}</span>
        <span className="name">Assignment {props.assNo}</span>
        <span className="status">{assignment.status}</span>
        <div className="progress">
          <div className="progress-bar">
            <div style={{ width: percent, color: "white" }}>{percent}</div>
          </div>
          <span>
            {assignment.progress}
            <span className="grey">/{assignment.questions.length}</span>
          </span>
        </div>
        <button className="action-button" onClick={changeAction}>
          {action}→
        </button>
      </div>
      {action === "close" && (
        <QuestionSection questions={assignment.questions} />
      )}
    </div>
  );
};
export default AssignmentItem;
