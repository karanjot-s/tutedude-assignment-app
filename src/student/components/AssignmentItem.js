import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./AssignmentItem.css";

import QuestionSection from "./QuestionSection";

const AssignmentItem = (props) => {
  const navigate = useNavigate();

  const assignment = props.assignment;

  var completed = 0;
  var pending = 0;
  assignment.questions.forEach(myFunction);

  function myFunction(q) {
    if (q.status === "completed") {
      completed = completed + 1;
    } else if (q.status === "pending") pending = pending + 1;
  }

  const [action, setAction] = useState("open");
  function changeAction() {
    if (action === "close") setAction("open");
    else setAction("close");
    // navigate(`/question/1`, { state: true });
  }
  const percent = (completed * 100) / assignment.questions.length + "%";

  return (
    <div className="ass-item">
      <div className="ass-details">
        <span className="no">{props.assNo}</span>
        <span className="name">Assignment {props.assNo}</span>
        <span className="status">
          {completed === assignment.questions.length
            ? "completed"
            : pending === assignment.questions.length
            ? "pending"
            : "partial"}
        </span>
        <div className="progress">
          <div className="progress-bar">
            <div style={{ width: percent, color: "white" }}>{percent}</div>
          </div>
          <span>
            {completed}
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
