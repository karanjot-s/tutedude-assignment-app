import React, { useEffect, useState } from "react";

const SolutionDetails = (props) => {
  var question = props.question;
  var solution = props.SolutionOpened;

  let sub;
  if (solution) sub = solution;
  else sub = null;

  const [view, setView] = useState("Solution View");

  function changeButton(event) {
    if (view === "Solution View") setView("Feedback View");
    else setView("Solution View");
  }

  function changeToSubPending(event) {
    props.reSubmit(true);
  }
  useEffect(() => {
    setView("Solution View");
  }, [solution]);

  return (
    <div className="solution-details-sec">
      <h3>Question</h3>
      <p>{question.question}</p>
      {/* {question.instructions && (
        <div>
          <h3>Instructions</h3>
          <p>{question.instructions}</p>
        </div>
      )} */}

      {view === "Solution View" && (
        <div className="flex-column">
          <h3>Solution You Submitted</h3>
          <div className="white-area">
            {sub !== null && sub.type === "file" && (
              <div>
                {sub.filename.map((fname, index) => (
                  <React.Fragment key={index}>
                    <div>
                      <span>{fname}</span>
                      <a href={sub.link[index]}>download</a>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            )}
            {sub !== null && sub.type === "text" && (
              <div>
                <span>{sub.text}</span>
              </div>
            )}
            {sub !== null && sub.type === "link" && (
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
      {view === "Feedback View" && (
        <div className="flex-column">
          <h3>Mentor's Feedback</h3>
          <div className="white-area">{sub !== null && sub.review}</div>
        </div>
      )}

      <div className="button-flex">
        <button onClick={changeButton}>
          {" "}
          {view === "Feedback View" ? "Solution View" : "Feedback View"}
        </button>
        <button onClick={changeToSubPending}>Re-submit</button>
      </div>
    </div>
  );
};
export default SolutionDetails;
