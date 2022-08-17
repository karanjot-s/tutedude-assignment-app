import React, { useState, useEffect } from "react";

import SubmissionPending from "./details/SubmissionPending";
import UnderEvaluation from "./details/UnderEvaluation";
import Completed from "./details/Completed";

const QuesDetails = (props) => {
  //console.log("rendered");
  var question = props.QuestionOpened;
  useEffect(() => {
    question = props.QuestionOpened;
  }, [props.QuestionOpened]);

  console.log("rendered Questiondetails" + question.question_no);

  return (
    <div
      className={`ques-details ${
        question.question_no === "1"
          ? "up-border"
          : question.question_no === props.lastQues.toString()
          ? "down-border"
          : ""
      }`}
    >
      {question.status === "pending" ? (
        <SubmissionPending question={question} />
      ) : question.status === "submitted" ? (
        <UnderEvaluation question={question} />
      ) : (
        <Completed question={question} />
      )}
    </div>
  );
};
export default QuesDetails;
