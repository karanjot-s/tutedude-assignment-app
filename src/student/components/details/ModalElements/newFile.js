import React, { useState } from "react";

const NewFile = (props) => {
  return (
    <>
      <div className="new-file del-modal">
        <div className="text-head">
          <span>Attaching file:</span> <p>{props.filename}</p>
          <button onClick={() => props.close()} className="filled-button">
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default NewFile;
