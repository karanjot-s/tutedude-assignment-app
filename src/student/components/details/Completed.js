import React, { useState, useEffect } from "react";

const SubmissionPending = (props) => {
  var question = props.question;
  const [resubmit, setResubmit] = useState(false);
  const [view, setView] = useState("View Your Solution");

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
                <div>
                  {sub.filename.map((fname, index) => (
                    <React.Fragment key={index}>
                      <div className="white-area-element">
                        <span>{fname}</span>
                        <>
                          <a href={sub.filelink[index]}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z" />
                            </svg>
                          </a>
                          <button className="edit-button">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z" />
                            </svg>
                          </button>
                          <button className="delete-button">
                            <svg
                              width="24"
                              height="24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m3-19h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z" />
                            </svg>
                          </button>
                        </>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              )}
              {sub !== null && sub.text && (
                <div>
                  <span>{sub.text}</span>
                </div>
              )}
              {sub !== null && sub.link && (
                <div>
                  {sub.link.map((l, index) => (
                    <React.Fragment key={index}>
                      <div>
                        <span>{l}</span>
                        <a href={l}>go to</a>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
        {view === "Mentor's Feedback" && (
          <div className="flex-column">
            <h3>Mentor's Feedback</h3>
            <div className="white-area">{sub !== null && sub.review}</div>
          </div>
        )}

        <div className="button-flex">
          <button onClick={changeButton}>
            {" "}
            {view === "Mentor's Feedback"
              ? "View Your Solution"
              : "Mentor's Feedback"}
          </button>
          <button onClick={changeToSubPending}>Re-submit</button>
        </div>
      </div>
      {/* )} */}
      {/* {resubmit && (
        <SubmissionPending question={question} showPrevSolution={true} />
      )} */}
    </React.Fragment>
  );
};
export default SubmissionPending;
