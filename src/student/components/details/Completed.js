import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import CompletedFeedback from "./CompletedFeedback";

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

const Completed = (props) => {
  var question = props.question;
  const [resubmit, setResubmit] = useState(false);
  const [view, setView] = useState("Mentor's Feedback");

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [modalText, setModalText] = useState("");

  function openModal(event) {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }

  // useEffect(() => {
  //   question = props.question;
  //   console.log("useEffect ran");
  // }, []);
  let sub;
  if (question.submissions)
    sub = question.submissions[question.submissions.length - 1];
  else sub = null;

  console.log("rendered completedsec" + question.question_no + "  " + resubmit);

  // function solutionChangeHandler(event) {
  //   console.log(event.target.value);
  //   setSolution(event.target.value);
  // }

  function changeButton(event) {
    if (view === "View Your Solution") setView("Mentor's Feedback");
    else setView("View Your Solution");
  }

  function changeToSubPending(event) {
    props.reSubmit(true);
  }

  return (
    <React.Fragment>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {modalType === "viewText" ? <div>{modalText}</div> : <div>error</div>}
      </Modal>
      {/* {!resubmit && ( */}
      <div className="sub-pending-sec">
        <h3>Question</h3>
        <p>{question.question}</p>
        {/* {question.instructions && (
          <div>
            <h3>Instructions</h3>
            <p>{question.instructions}</p>
          </div>
        )} */}

        {view === "View Your Solution" && (
          <div className="flex-column">
            <h3>Solution You Submitted</h3>
            <div className="white-area">
              {sub !== null && sub.filename && (
                <>
                  {sub.filename.map((fname, index) => (
                    <React.Fragment key={index}>
                      <div className="white-area-element">
                        <span>{fname}</span>
                        <section>
                          <a href={sub.filelink[index]} target="_blank">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z" />
                            </svg>
                          </a>
                        </section>
                      </div>
                    </React.Fragment>
                  ))}
                </>
              )}
              {sub !== null && sub.text && (
                <div className="white-area-element">
                  <span>{sub.text}</span>
                  <section>
                    <span
                      onClick={(event) => {
                        setModalText(sub.text);
                        setModalType("viewText");
                        openModal(event);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="m22 5c0-.478-.379-1-1-1h-18c-.62 0-1 .519-1 1v14c0 .621.52 1 1 1h18c.478 0 1-.379 1-1zm-1.5 13.5h-17v-13h17zm-6.065-9.978-5.917 5.921v-1.243c0-.414-.336-.75-.75-.75-.415 0-.75.336-.75.75v3.05c0 .414.335.75.75.75h3.033c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-1.219l5.918-5.922v1.244c0 .414.336.75.75.75s.75-.336.75-.75c0-.715 0-2.335 0-3.05 0-.414-.336-.75-.75-.75-.715 0-2.318 0-3.033 0-.414 0-.75.336-.75.75s.336.75.75.75z"
                          fill-rule="nonzero"
                        />
                      </svg>
                    </span>
                  </section>
                </div>
              )}
              {sub !== null && sub.link && (
                <>
                  {sub.link.map((l, index) => (
                    <React.Fragment key={index}>
                      <div className="white-area-element">
                        <span>{l}</span>
                        <section>
                          <a href={l}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
                            </svg>
                          </a>
                        </section>
                      </div>
                    </React.Fragment>
                  ))}
                </>
              )}
            </div>
          </div>
        )}
        {view === "Mentor's Feedback" && (
          <div className="flex-column">
            <h3>Mentor's Feedback</h3>
            <div className="white-area">
              {sub !== null && <CompletedFeedback data={sub} />}
            </div>
            {/* {console.log(sub.review)} */}
          </div>
        )}

        <div className="button-flex">
          <button onClick={changeButton}>
            {" "}
            {view === "Mentor's Feedback"
              ? "View Your Solution"
              : "Mentor's Feedback"}
          </button>
          {
            (sub.status=="resubmit" || sub.status=="completed") && (
              <button onClick={changeToSubPending}>Re-submit</button>
            )
          }
          {/* <button onClick={changeToSubPending}>Re-submit</button> */}
        </div>
      </div>
      {/* )} */}
      {/* {resubmit && (
        <SubmissionPending question={question} showPrevSolution={true} />
      )} */}
    </React.Fragment>
  );
};
export default Completed;
