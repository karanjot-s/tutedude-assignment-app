import React, { useState } from "react";

const NewFile = (props) => {
  return (
    <>
      <div className="">
        <span>Attaching file: {props.filename}</span>
        <button onClick={() => props.close()}>Upload</button>
      </div>
    </>
  );
};

export default NewFile;
