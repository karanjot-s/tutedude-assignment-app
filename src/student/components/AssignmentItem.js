import React, { useEffect, useState } from "react";

import "./AssignmentItem.css";

import QuestionSection from "./QuestionSection";

const AssignmentItem = (props) => {
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

  function sendData(data) {
    props.sendData(data);
  }

  return (
    // <div className={`ass-item partial ${action === "close" ? "opened" : ""}`}>
    <div
      className={`ass-item ${
        completed === assignment.questions.length
          ? "completed"
          : pending === assignment.questions.length
          ? "pending"
          : "partial"
      } ${action === "close" ? "opened" : ""}`}
    >
      <div className="ass-details">
        <span className="no">{props.assNo}</span>
        <span className="name">
          {assignment.topic ? assignment.topic : `Assignment ${props.assNo}`}
        </span>
        <span className="status">
          {completed === assignment.questions.length
            ? "Completed"
            : pending === assignment.questions.length
            ? "Submission Pending"
            : "Partially Completed"}
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
        <button className={`action-button`} onClick={changeAction}>
          {action}
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
      </div>
      {action === "close" && (
        <QuestionSection
          questions={assignment.questions}
          assignmentId={assignment.assignment_id}
          sendData={sendData}
        />
      )}
    </div>
  );
};
export default AssignmentItem;
