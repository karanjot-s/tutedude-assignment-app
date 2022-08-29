import React, { useState } from "react";
import "./modalElements.css";

const Text = (props) => {
  const [text, setText] = useState(props.previousText);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.passText(text);
    props.close();
  };

  return (
    <div className="text-modal">
      <div className="text-head">
        <h3>Add Text</h3>
        <button onClick={() => props.close()} className="cancel-modal">
          X
        </button>
      </div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <textarea
          rows={8}
          name="text"
          value={text}
          placeholder="type or paste your text here"
          required
          onChange={(e) => {
            handleChange(e);
          }}
        />

        <input type="submit" value="Add" className="insert-link-button" />
      </form>
    </div>
  );
};
export default Text;
