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
    <div className="del-modal">
      <div className="text-head">
        <p>Add new file,text or link</p>
        <div>
          <button
            //onClick={(event) => handleSubmit(event)}
            className="outline-button"
            name="file"
          >
            <label htmlFor="myFiles" className="">
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
            className="outline-button"
            name="link"
          >
            link
          </button>
          <button
            onClick={(event) => handleSubmit(event)}
            className="outline-button"
            name="text"
          >
            text
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewButtons;
