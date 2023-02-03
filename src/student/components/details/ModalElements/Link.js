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

  const [links, setLinks] = useState(props.previousLinks);

  const handleLinkInput = (e) => {
    e.preventDefault();

    const parsedLink = link.url.includes("http")
      ? link
      : { ...link, url: `http://upskill.tutedude.com/assignment/${link.url}` };
    setLinks((prevLinks) => {
      return [...prevLinks, parsedLink];
    });
    setLink({ url: "", text: "" });
  };

  const sendLinks = (e) => {
    e.preventDefault();
    props.passLinks(links);
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
    <div className="fileFlex">
      <div className="fileSelected">
        <h4>Links Added:</h4>
        <div className="file-list">
          {links.length === 0 ? (
            <div className="file-item">
              <span>No files attached</span>
            </div>
          ) : (
            links.map((l, index) => (
              <React.Fragment key={index}>
                <div className="file-item">
                  <span>{l.url.slice(0, 40)}...</span>
                  <button
                    className="delete-button"
                    onClick={() => {
                      links.splice(index, 1);
                      setLinks([...links]);
                    }}
                  >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#434343"
                    >
                      <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m3-19h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z" />
                    </svg>
                  </button>
                </div>
              </React.Fragment>
            ))
          )}
        </div>
      </div>
      <div className="fileUpload">
        <form
          onSubmit={(e) => {
            sendLinks(e);
          }}
        >
          <div className="url">
            Url :{" "}
            <input
              type="text"
              name="url"
              value={link.url}
              placeholder="type or paste your link here"
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
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div className="file-buttons">
            <button
              className="file-upload-button"
              onClick={handleLinkInput}
              disabled={link.text === "" || link.url === "" ? true : false}
            >
              Add this link
            </button>

            <button
              type="submit"
              className="submit-files"
              disabled={links.length === 0 ? true : false}
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Link;
