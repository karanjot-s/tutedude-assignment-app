import React, { useState } from "react";
import "./modalElements.css";

const Link = (props) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.passText(text);
    props.close();
    // if(password!=confPassword)
    // {
    //   // if 'password' and 'confirm password'
    //   // does not match.
    //   alert("password Not Match");
    // }
    // else{
    //   // display alert box with user
    //   // 'name' and 'email' details .
    //   alert('A form was submitted with Name :"' + name +
    //   '" ,Age :"'+age +'" and Email :"' + email + '"');
    // }
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
          value={text.url}
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
export default Link;
