import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import File from "./ModalElements/File";
import Link from "./ModalElements/Link";
import Text from "./ModalElements/Text";

Modal.defaultStyles.overlay.backgroundColor = "rgba(74, 73, 73, 0.7)";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "1.5rem",
    background: "#FFFFFF",
  },
};
Modal.setAppElement("#root");

const SubmissionPending = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState("file");
  function openModal(event) {
    setModalType(event.target.value);
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }

  var question = props.question;

  const [submit, setSubmit] = useState(false);
  const [files, setFiles] = useState([]);
  const [text, setText] = useState(null);
  const [link, setLink] = useState({ text: null, url: null });

  //

  // useEffect(() => {
  //   setSolution("");
  //   setSubmit(false);
  // }, [props.question]);

  console.log("rendered submitsec" + question.question_no);

  function getFiles(files) {
    setFiles((prevFiles) => {
      return [...prevFiles, ...files];
    });
    // console.log(files);
  }

  function getLink(link) {
    setLink(link);
  }
  function getText(text) {
    setText(text);
  }

  // let formData = new FormData();
  // formData.append("username", "Chris");
  // formData.append("username", "Chris");
  // formData.append("username", "Chris");
  // formData.append("username", "Chris");
  // for (var key of formData.entries()) {
  //   console.log(key[0] + ", " + key[1]);
  // }
  //console.log(Array.from(formData.keys()).length);
  async function uploadFile() {
    let formData = new FormData();
    formData.append("username", "Chris");

    [...files].forEach((file, i) => {
      console.log(file[0]);
      formData.append("abc", file);
    });

    if (link.url !== null) formData.append("link", link.url);
    if (text !== null) formData.append("text", text);

    for (var key of formData.entries()) {
      console.log(key[0]);
      console.log(key[1]);
    }

    // console.log("In uploadFile");
    // let file = document.getElementById("myFile").files;
    // console.log(document.getElementById("myFile"));
    // console.log(file);
    //formData.append("fileupload", file);
    //console.log(formData.entries);
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("abc");
    console.log(files);
    console.log(link);
    console.log(text);
    console.log("abc");
    uploadFile();

    setSubmit(true);
    setFiles([]);
    setLink({ url: null, text: null });
    setText(null);
  }

  function viewSolutionButtonHandler() {
    props.changeSec();
  }

  return (
    <div className="sub-pending-sec">
      {!submit && (
        <div className="before-submit">
          <div>
            <h3>Question</h3>
            <p>{question.question}</p>
            {question.instructions && (
              <div>
                <h3>Instructions</h3>
                <p>{question.instructions}</p>
              </div>
            )}
            {question.status === "completed" && (
              <div className="center">
                <button onClick={viewSolutionButtonHandler}>
                  View Previous Solution
                </button>
              </div>
            )}
          </div>

          <div>
            <h3>Submit Solution as</h3>
            <div className="formButtons">
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                {modalType === "text" ? (
                  <Text close={closeModal} passText={getText} />
                ) : modalType === "file" ? (
                  <File close={closeModal} passFiles={getFiles} />
                ) : (
                  <Link close={closeModal} passLink={getLink} />
                )}
              </Modal>
              <button className="attach-text" onClick={openModal} value="text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 0h-20v6h1.999c0-1.174.397-3 2.001-3h4v16.874c0 1.174-.825 2.126-2 2.126h-1v2h9.999v-2h-.999c-1.174 0-2-.952-2-2.126v-16.874h4c1.649 0 2.02 1.826 2.02 3h1.98v-6z" />
                </svg>
                Add Text
              </button>
              <button className="attach-file" onClick={openModal} value="file">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" />
                </svg>
                Attach File
              </button>
              <button className="attach-link" onClick={openModal} value="link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.033 6.966c.584.583.584 1.529 0 2.112l-7.955 7.956c-.583.583-1.529.583-2.112 0-.583-.583-.583-1.529 0-2.112l7.956-7.956c.582-.583 1.528-.583 2.111 0zm-9.138 13.386c-1.171 1.171-3.076 1.171-4.248 0-1.171-1.171-1.171-3.077 0-4.248l5.639-5.632c-1.892-.459-3.971.05-5.449 1.528l-2.147 2.147c-2.254 2.254-2.254 5.909 0 8.163 2.254 2.254 5.909 2.254 8.163 0l2.147-2.148c1.477-1.477 1.986-3.556 1.527-5.448l-5.632 5.638zm6.251-18.662l-2.146 2.148c-1.478 1.478-1.99 3.553-1.53 5.445l5.634-5.635c1.172-1.171 3.077-1.171 4.248 0 1.172 1.171 1.172 3.077 0 4.248l-5.635 5.635c1.893.459 3.968-.053 5.445-1.53l2.146-2.147c2.254-2.254 2.254-5.908 0-8.163-2.253-2.254-5.908-2.254-8.162-.001z" />
                </svg>
                Insert link
              </button>
              <form onSubmit={submitHandler} encType="multipart/form-data">
                <button
                  type="submit"
                  className="submit-solution"
                  disabled={
                    files.length === 0 && text === null && link.url === null
                      ? true
                      : false
                  }
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {submit && (
        <div className="after-sub">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" />
          </svg>
          Submitted Successfully!
        </div>
      )}
    </div>
  );
};
export default SubmissionPending;
