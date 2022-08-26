import React, { useState } from "react";
import "./modalElements.css";

const Edit = (props) => {
  const handleSubmit = (e) => {
    props.proceed();
    e.preventDefault();
  };

  return (
    <div className="del-modal">
      <div className="text-head">
        <p>Do yo want to replace</p>
        <div>
          <button onClick={() => props.close()} className="outline-button">
            cancel
          </button>
          <button
            onClick={(event) => handleSubmit(event)}
            className="filled-button"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};
export default Edit;
