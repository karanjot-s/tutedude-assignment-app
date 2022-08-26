import React, { useEffect, useState } from "react";

const SolutionDetails = (props) => {
  var question = props.question;
  var solution = props.SolutionOpened;

  let sub;
  if (solution) sub = solution;
  else sub = null;
  if (question.submissions) {
    var dateObj = new Date(sub.updatedAt);
    var month = dateObj.getUTCMonth(); //months from 0-11
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var newdate = day + " " + monthNames[month] + ", " + year;
  } else newdate = "-";

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
          <h3>
            Solution You Submitted <span>(updated on {newdate})</span>
          </h3>
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
                  <a href="{}">
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
