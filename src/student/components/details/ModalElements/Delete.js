import React, { useState } from "react";
import "./modalElements.css";

function fakeRequest() {
  return new Promise((resolve) => setTimeout(() => resolve(), 1000));
}
const Delete = (props) => {
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e) => {
    setSuccess(true);
    fakeRequest().then(() => {
      props.close();
    });
    e.preventDefault();
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
