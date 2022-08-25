import React, { useEffect, useState } from "react";

import SolutionDetails from "./SolutionDetails";
import "./solution.css";

const PrevSolList = (props) => {
  const question = props.question;
  // const [view, setView] = useState("open");
  const [opened, setOpened] = useState(0);

  // function changeView() {
  //   // navigate(`/question/${question.question_no}`, { state: true });
  //   setView("viewing");
  // }

  function changeSectionNotify(flag) {
    if (flag == true) {
      props.changeSec();
    }
  }
  console.log(question);
  return (
    <div className="ques-section">
      <div className="sol-list-sec">
        <div className="sol-list-head">
          <h3>Previous Solutions Submitted</h3>
          <button onClick={() => changeSectionNotify(true)}>x</button>
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
                {sol.attempt}
                <div>{opened === index ? "viewing" : "open"}</div>
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
