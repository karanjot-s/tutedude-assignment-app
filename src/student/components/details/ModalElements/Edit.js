import React, { useState } from "react";
import "./modalElements.css";

const Edit = (props) => {
  const handleSubmit = (e) => {
    props.proceed();
    e.preventDefault();
  };

  return (
    <div className="text-modal">
      <div className="text-head">
        <p>Do yo want to replace</p>
        <button
          onClick={(event) => handleSubmit(event)}
          className="cancel-modal"
        >
          Proceed
        </button>
        <button onClick={() => props.close()} className="cancel-modal">
          cancel
        </button>
      </div>
    </div>
  );
};
export default Edit;
