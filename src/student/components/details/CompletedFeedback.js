import React from "react";
import styles from "./CompletedFeedback.module.css";

const CompletedFeedback = ({ data }) => {
  console.log(data);
  return (
    <div className={`${styles.root} ${styles.completed}`}>
      {/* <div className={styles.solution_cont}> */}
      {/* <div className={styles.number}>{data.number}</div> */}
      <div className={styles.solution}>
        {data.text ? (
          <div className={styles.link_cont}>
            <h6>Message</h6>
            <hr />
            <div className={styles.msg}>{data.text}</div>
          </div>
        ) : (
          ""
        )}

        {data.linkText.length > 0 ? (
          <div>
            <h6>Links</h6>
            <hr />
            <div className={styles.link_cont}>
              {data.review.linkText.map((link, ind) => (
                <a
                  key={ind}
                  className={styles.link}
                  href={data.link[ind]}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}

        {data.filename.length > 0 ? (
          <div>
            <h6>Files</h6>
            <hr />
            <div className={styles.link_cont}>
              {data.filename.map((file, ind) => (
                <div
                  key={ind}
                  className={styles.file}
                  onClick={() => {
                    window.open(data.filelink[ind], "_blank");
                  }}
                >
                  <span>{file}</span>
                  <svg
                    width="14"
                    height="17"
                    viewBox="0 0 14 17"
                    fill="#434343"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
    //{" "}
    // </div>
  );
};

export default CompletedFeedback;
