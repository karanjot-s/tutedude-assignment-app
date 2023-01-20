import React, { useEffect, useState } from "react";

import SolutionDetails from "./SolutionDetails";
import "./solution.css";

const PrevSolList = (props) => {
  const question = props.question;
  const [opened, setOpened] = useState(0);

  function changeSectionNotify(flag) {
    if (flag == true) {
      props.changeSec();
    }
  }

  var solDate = [];
  question.submissions.forEach((sol) => {
    var dateObj = new Date(sol.updatedAt);
    var month = dateObj.getUTCMonth(); //months from 0-11
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var day = dateObj.getUTCDate();
    //var year = dateObj.getUTCFullYear();
    var newdate = day + " " + monthNames[month];
    solDate.push(newdate);
  });

  console.log(question);
  return (
    <div className="ques-section">
      <div className="sol-list-sec">
        <div className="sol-list-head">
          <h3>Previous Solutions Submitted</h3>
          <button onClick={() => changeSectionNotify(true)}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="#434343"
              />
            </svg>
          </button>
        </div>
        <div className="solution-list">
          {question.submissions.map((sol, index) => (
            <React.Fragment key={index}>
              <div
                className={`solution-item ${
                  opened === index ? "sol-opened" : ""
                }`}
                onClick={() => {
                  setOpened(index);
                }}
              >
                <span>{question.question.slice(0, 35) + "..."}</span>
                <div>
                  <span>{solDate[index]}</span>
                  <span>{opened === index ? "viewing" : "open"}</span>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <SolutionDetails
        SolutionOpened={question.submissions[opened]}
        question={question}
        reSubmit={changeSectionNotify}
      />
    </div>
  );
};

export default PrevSolList;
