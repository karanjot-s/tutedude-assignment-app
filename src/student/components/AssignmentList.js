import React from "react";

import AssignmentItem from "./AssignmentItem";
const AssignmentList = (props) => {
  function sendData(data) {
    props.sendData(data);
  }
  return (
    <>
      {props.assignments.map((assignment, index) => (
        <AssignmentItem
          assignment={assignment}
          key={index}
          assNo={index + 1}
          sendData={sendData}
        />
      ))}
    </>
  );
};

export default AssignmentList;
