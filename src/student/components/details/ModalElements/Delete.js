import React, { useState } from "react";
import "./modalElements.css";

const Delete = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.close();
  };

  return (
    <div className="text-modal">
      <div className="text-head">
        <p>Do yo want to delete</p>
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
export default Delete;
