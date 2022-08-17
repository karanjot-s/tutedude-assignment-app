import React from "react";

import AssignmentItem from "./AssignmentItem";
const AssignmentList = ({ assignments }) => {
  return (
    <>
      {assignments.map((assignment, index) => (
        <AssignmentItem assignment={assignment} key={index} assNo={index + 1} />
      ))}
    </>
  );
};

export default AssignmentList;
