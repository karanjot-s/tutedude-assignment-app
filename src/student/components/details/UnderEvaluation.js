import React, { useState, useEffect } from "react";

const UnderEvaluation = (props) => {
  var question = props.question;

  function changeToSubPending(event) {
    props.reSubmit(true);
  }

  return (
    <div className="sub-pending-sec">
      <h3>Question</h3>
      <p>{question.question}</p>

      <div className="flex-column">
        <h3>Status of Submission</h3>

        <div className="white-area">status</div>
        <div className="button-flex">
          <button onClick={changeToSubPending} className="button-flex">
            View you solution
          </button>
        </div>
      </div>
    </div>
  );
};
export default UnderEvaluation;
