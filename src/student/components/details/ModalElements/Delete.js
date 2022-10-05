import React, { useState, useContext } from "react";
import "./modalElements.css";
import GlobalState from "../../../../contexts/GlobalState";

function fakeRequest() {
  return new Promise((resolve) => setTimeout(() => resolve(), 1000));
}

// /submission/file
// /submission/link
// /submission/text
// DELETE method

const Delete = (props) => {
  const [ids, setIds] = useContext(GlobalState);
  const [success, setSuccess] = useState(false);

  var question = props.question;

  console.log(question.submissions[question.submissions.length - 1]._id);
  async function deleteFile() {
    let formData = new FormData();

    const aid = 123;
    formData.append("assignment_id", props.assignmentId);
    formData.append("student_id", ids.student_id);
    formData.append("subject_id", ids.subject_id);
    formData.append("submission_id", question.submission_id);
    formData.append("question_no", question.question_no);
    formData.append(
      "list_id",
      question.submissions[question.submissions.length - 1]._id
    );

    if (props.deleteType === "file") {
      formData.append("file_name", props.deleteFile.fname);
      formData.append("file_link", props.deleteFile.flink);
      formData.append("index", props.deleteFile.index);
    } else if (props.deleteType === "link") {
      formData.append("link", props.deleteLink.ltext);
      formData.append("link_text", props.deleteLink.link);
      formData.append("index", props.deleteLink.index);
    } else if (props.deleteType === "text") {
      formData.append("text", props.deleteText);
    }

    for (var key of formData.entries()) {
      console.log(key[0]);
      console.log(key[1]);
    }
    const url = "https://assignment-backend-tutedude.herokuapp.com/submission/";
    let a = await fetch(url + props.deleteType, {
      method: "DELETE",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data");
        console.log(data);
        if (data.success === true) {
          setSuccess(true);
        } else {
          alert("error");
        }
      });
    //props.sendData();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteFile();

    fakeRequest().then(() => {
      props.close();
    });
  };
  //("https://do4t98vdpdesj.cloudfront.net/");
  return (
    <div className={`del-modal ${success ? "success" : ""}`}>
      <div className="text-head">
        <p>Do yo want to delete</p>
        <div>
          <button onClick={() => props.close()} className="outline-button">
            cancel
          </button>
          <button
            onClick={(event) => handleSubmit(event)}
            className="filled-button"
          >
            Proceed
          </button>
        </div>
      </div>
      <section className="success-sec">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" />
        </svg>
        Success
      </section>
    </div>
  );
};
export default Delete;
