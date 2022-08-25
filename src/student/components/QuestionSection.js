import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import QuestionItem from "./QuestionItem";
import QuesDetails from "./QuesDetails";
import "./Questions.css";
import PrevSolList from "./previous solutions/PrevSolList";

const QuestionSection = (props) => {
  const questions = props.questions;
  const [opened, setOpened] = useState("1");
  const [quesOpened, setQues] = useState(questions[0]);
  const [solutionSection, setSolutionSection] = useState(false);

  function openQuestion(question_no) {
    setOpened(question_no);
  }

  // const [questionStatus, setStatus] = useState("");
  // useEffect(() => {
  //   if (quesOpened.status == "pending") {
  //     setStatus("Submission Pending");
  //   } else if (quesOpened.status == "submitted") {
  //     setStatus("Under Evaluation");
  //   } else setStatus("Completed");
  // }, [quesOpened.status]);

  useEffect(() => {
    var ques = questions.filter(function (el) {
      return el.question_no === opened;
    });

    setQues(ques[0]);
  }, [opened]);

  console.log("rendered section" + quesOpened.question_no);

  function changeSection() {
    console.log("Notification recieved");
    setSolutionSection(!solutionSection);
  }

  if (!solutionSection)
    return (
      <div className="ques-section">
        <div className="question-list">
          {questions.map((question) => (
            <QuestionItem
              question={question}
              key={question.question_no}
              onOpen={openQuestion}
              opened={opened}
            />
          ))}
        </div>
        <QuesDetails
          QuestionOpened={quesOpened}
          lastQues={questions.length}
          changeSectionNotify={changeSection}
        />
        {/* <Routes>
        <Route
          path="/question/:qNo"
          element={
            <QuesDetails
              QuestionOpened={quesOpened}
              questions={questions}
              lastQues={questions.length}
            />
          }
        />
      </Routes> */}
      </div>
    );

  return (
    <div className="solution-section">
      <PrevSolList question={quesOpened} changeSec={changeSection} />
    </div>
  );
};

export default QuestionSection;
