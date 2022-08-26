import React, { useState } from "react";
import "./modalElements.css";

const NewButtons = (props) => {
  const handleSubmit = (e) => {
    props.setSolutionType(e.target.name);
    e.preventDefault();
  };
  const handleFileInput = (e) => {
    // handle validations

    if (e.target.files) {
      console.log(e.target.files.length);
      if (e.target.files.length > 1) alert("select only one file");
      else props.sendFile(e.target.files[0]);
    }
  };

  return (
    <div className="text-modal">
      <div className="text-head">
        <button
          //onClick={(event) => handleSubmit(event)}
          className="cancel-modal"
          name="file"
        >
          <label htmlFor="myFiles" className="file-upload-button">
            Add files
            <input
              type="file"
              id="myFiles"
              onChange={handleFileInput}
              multiple
            />
          </label>
        </button>
        <button
          onClick={(event) => handleSubmit(event)}
          className="cancel-modal"
          name="link"
        >
          link
        </button>
        <button
          onClick={(event) => handleSubmit(event)}
          className="cancel-modal"
          name="text"
        >
          text
        </button>
      </div>
    </div>
  );
};
export default NewButtons;
