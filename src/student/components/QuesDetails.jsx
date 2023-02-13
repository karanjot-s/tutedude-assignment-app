import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

import SubmissionPending from "./details/SubmissionPending";
import UnderEvaluation from "./details/UnderEvaluation";
import Completed from "./details/Completed";
import UpdateSubmission from "./details/UpdateSubmission";

const QuesDetails = (props) => {
  var question = props.QuestionOpened;

  // const { qNo } = useParams();
  const [status, setStatus] = useState(props.QuestionOpened.status);
  useEffect(() => {
    setStatus(props.QuestionOpened.status);
  }, [props.QuestionOpened]);

  console.log("rendered Questiondetails : " + question.question_no);

  function changeToPending(flag) {
    if (flag === true) {
      setStatus("pending");
    }
  }
  function changeToUpdate(flag) {
    if (flag === true) setStatus("update");
  }
  function sendNotificationToChangeSection() {
    props.changeSectionNotify();
  }
  function sendData(data) {
    props.sendData(data);
  }

  console.log(question);

  return (
    <div className="ques-details">
      {status === "pending" || status === "resubmit" ? (
        <SubmissionPending
          question={question}
          changeSec={sendNotificationToChangeSection}
          assignmentId={props.assignmentId}
          sendData={sendData}
        />
      ) : status === "submitted" ? (
        <UnderEvaluation question={question} reSubmit={changeToUpdate} />
      ) : status === "update" ? (
        <UpdateSubmission
          question={question}
          changeSec={sendNotificationToChangeSection}
          assignmentId={props.assignmentId}
          sendData={sendData}
        />
      ) : status === "completed" ? (
        <Completed question={question} reSubmit={changeToPending} />
      ) : (
        <>Something went wrong: {status}</>
      )}
    </div>
  );
};
export default QuesDetails;
