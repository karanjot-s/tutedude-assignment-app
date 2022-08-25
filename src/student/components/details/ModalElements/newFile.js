import React, { useState } from "react";
//import { useDropzone } from "react-dropzone";

const File = (props) => {
  // const [files, setFiles] = useState([]);
  // const { getRootProps, getInputProps } = useDropzone({
  //   accept: "image/*",
  //   onDrop: (acceptedFiles) => {
  //     setFiles(
  //       acceptedFiles.map((file) =>
  //         Object.assign(file, {
  //           preview: URL.createObjectURL(file),
  //         })
  //       )
  //     );
  //     console.log(acceptedFiles);
  //   },
  // });

  // const images = files.map((file) => (
  //   <img
  //     key={file.name}
  //     src={file.preview}
  //     alt="image"
  //     style={{ width: "200px", height: "200px" }}
  //   />
  // ));
  const [submit, setSubmit] = useState(false);
  const [files, setFiles] = useState([]);

  window.ondragover = function (e) {
    e.preventDefault();
    return false;
  };
  window.ondrop = function (e) {
    e.preventDefault();
    return false;
  };

  console.log("sdfg");
  function dropHandler(ev) {
    console.log("File(s) dropped");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          setFiles((prevFiles) => {
            return [...prevFiles, file];
          });
          console.log("pqr" + `… file[${i}].name = ${file.name}`);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log("abc" + `… file[${i}].name = ${file.name}`);
      });
    }
  }
  //console.log(files);
  function dragOverHandler(ev) {
    console.log("File(s) in drop zone");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  }

  const handleFileInput = (e) => {
    // handle validations

    if (e.target.files) {
      // Use DataTransferItemList interface to access the file(s)
      [...e.target.files].forEach((file, i) => {
        setFiles((prevFiles) => {
          return [...prevFiles, file];
        });
      });
    }
    //console.log(files);
  };

  function sendFiles(event) {
    event.preventDefault();
    props.passFiles(files);
    props.close();
  }

  return (
    <>
      {/* <div className="aav">
        <div className="dropArea" {...getRootProps()}>
          <input {...getInputProps()} />
          <p className="text">Drag n Drop Here</p>
        </div>

        <div>{images}</div>
      </div> */}

      <div className="fileFlex">
        <div className="fileSelected">
          <h4>Files Selected:</h4>
          <div className="file-list">
            {files.length === 0 ? (
              <div className="file-item">
                <span>No files attached</span>
              </div>
            ) : (
              files.map((f, index) => (
                <React.Fragment key={index}>
                  <div className="file-item">
                    <span>{f.name}</span>
                    <button
                      className="delete-button"
                      onClick={() => {
                        files.splice(index, 1);
                        setFiles([...files]);
                      }}
                    >
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#434343"
                      >
                        <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m3-19h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z" />
                      </svg>
                    </button>
                  </div>
                </React.Fragment>
              ))
            )}
          </div>
        </div>
        <div className="fileUpload">
          <form onSubmit={sendFiles} encType="multipart/form-data">
            <div
              id="drop_zone"
              onDrop={(event) => dropHandler(event)}
              onDragOver={(event) => dragOverHandler(event)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#8a8a8a"
              >
                <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
              </svg>
              <p>Drop your files here</p>
            </div>
            <div className="file-buttons">
              <label htmlFor="myFiles" className="file-upload-button">
                {files.length === 0 ? "Select File" : "Add more files"}
                <input
                  type="file"
                  id="myFiles"
                  onChange={handleFileInput}
                  multiple
                />
              </label>

              <button
                type="submit"
                className="submit-files"
                disabled={files.length === 0 ? true : false}
              >
                Done
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default File;
