import React, { useState } from "react";
import "./modalElements.css";

const Link = (props) => {
  const [link, setLink] = useState({
    url: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLink((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.passLink(link);
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
    <div className="link-modal">
      <div className="link-head">
        <h3>Insert Link</h3>
        <button onClick={() => props.close()} className="cancel-modal">
          X
        </button>
      </div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="url">
          Url :{" "}
          <input
            type="text"
            name="url"
            value={link.url}
            placeholder="type or paste your link here"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="text-of-link">
          Text :{" "}
          <input
            type="text"
            name="text"
            value={link.text}
            placeholder="add your message here"
            required
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <input type="submit" value="Insert" className="insert-link-button" />
      </form>
    </div>
  );
};
export default Link;
