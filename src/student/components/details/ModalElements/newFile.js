import React, { useState } from "react";

const NewFile = (props) => {
  const [file, setFile] = useState(null);
  const handleFileInput = (e) => {
    // handle validations

    if (e.target.files) {
      console.log(e.target.files.length);
      if (e.target.files.length > 1) alert("select only one file");
      else setFile(e.target.files[0]);
    }
  };
  return (
    <>
      <div className="new-file del-modal">
        <div className="text-head">
          <span>Attaching file:</span>{" "}
          <p>{file === null ? "attach one file" : file.name}</p>
          <button
            //onClick={(event) => handleSubmit(event)}
            className="outline-button"
            name="file"
          >
            <label htmlFor="myFiles" className="">
              Add file
              <input
                type="file"
                id="myFiles"
                onChange={handleFileInput}
                multiple
              />
            </label>
          </button>
          <button
            onClick={() => {
              props.sendFile(file);
              props.close();
            }}
            className="filled-button"
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default NewFile;
