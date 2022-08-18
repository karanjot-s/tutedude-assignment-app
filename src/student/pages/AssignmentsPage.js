import React, { useEffect, useState } from "react";
import AssignmentList from "../components/AssignmentList";
import "./AssignmentPage.css";

const AssignmestsPage = () => {
  //const domain=http://tutedude.herokuapp.com
  //const url=domain+"/course/subjects"

  const assignments = [
    {
      _id: "62e21ad8ef8ce43ddbdd3546",
      subject_id: "1",
      questions: [
        {
          question_no: "1",
          question: "WAP to check if the number is prime",
          points: "2",
          status: "submitted",
          submissions: [
            {
              attempt: "1",
              link: ["abc.com", "def.com"],
              filename: ["abc", "def"],
            },
          ],
        },
        {
          question_no: "2",
          question: "WAP completed",
          points: "1",
          instructions: "ABC",
          status: "completed",
          submissions: [
            {
              attempt: "1",
              link: ["abc.com"],
              filename: ["abc"],
            },
          ],
          review: [{ attempt: "1", feedback: "abcd efgh" }],
        },
        {
          question_no: "3",
          question: "WAP pending",
          points: "3",
          instructions: "ABC",
          status: "pending",
        },
        {
          question_no: "4",
          question: "WAP to check if",
          points: "2",
          status: "submitted",
          submissions: [
            {
              attempt: "1",
              link: ["abc.com", "def.com"],
              filename: ["abc", "def"],
            },
          ],
        },
      ],
    },
    {
      _id: "62e21ad8ef8ce43dd",
      subject_id: "1",
      questions: [
        {
          question_no: "1",
          question: "WAP completed",
          points: "1",
          instructions: "ABC",
          status: "completed",
          submissions: [
            {
              attempt: "1",
              link: ["abc.com"],
              filename: ["abc"],
            },
          ],
          review: [{ attempt: "1", feedback: "abcd efgh" }],
        },
        {
          question_no: "2",
          question: "WAP completed",
          points: "1",
          instructions: "ABC",
          status: "completed",
          submissions: [
            {
              attempt: "1",
              link: ["abc.com"],
              filename: ["abc"],
            },
          ],
          review: [{ attempt: "1", feedback: "abcd efgh" }],
        },
      ],
    },
    {
      _id: "62e21ad8e",
      subject_id: "1",
      questions: [
        {
          question_no: "1",
          question: "WAP pending",
          points: "3",
          instructions: "ABC",
          status: "pending",
        },
        {
          question_no: "2",
          question: "WAP pending",
          points: "3",
          instructions: "ABC",
          status: "pending",
        },
        {
          question_no: "3",
          question: "WAP pending",
          points: "3",
          instructions: "ABC",
          status: "pending",
        },
      ],
    },
  ];

  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 1000));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        setLoading(!isLoading);
      }
    });
  }, []);

  // {
  //   no: 1,
  //   name: "Assignment 1",
  //   status: "pending",
  //   progress: 3,
  //   questions: [
  //     {
  //       question_no: "1",
  //       question: "WAP to check if the number is prime",
  //       points: "2",
  //       status: "Submission pending",
  //     },
  //     {
  //       question_no: "2",
  //       question: "WAP",
  //       points: "1",
  //       instructions: "ABC",
  //       status: "Submission pending",
  //     },
  //     {
  //       question_no: "3",
  //       question: "WAP to check if the number is prime",
  //       points: "2",
  //       status: "Submission pending",
  //     },
  //     {
  //       question_no: "4",
  //       question: "WAP",
  //       points: "1",
  //       instructions: "ABC",
  //       status: "Submission pending",
  //     },
  //     {
  //       question_no: "5",
  //       question: "WAP to check if the number is prime",
  //       points: "2",
  //       status: "Submission pending",
  //     },
  //     {
  //       question_no: "6",
  //       question: "WAP",
  //       points: "1",
  //       instructions: "ABC",
  //       status: "Submission pending",
  //     },
  //   ],
  // },
  // {
  //   no: 2,
  //   name: "Assignment 2",
  //   status: "Submission pending",
  //   progress: 4,
  //   questions: [
  //     {
  //       question_no: "1",
  //       question: "WAP to check if the number is prime",
  //       points: "2",
  //       status: "Submission pending",
  //     },
  //     {
  //       question_no: "2",
  //       question: "WAP",
  //       points: "1",
  //       instructions: "ABC",
  //       status: "Under Evaluation",
  //     },
  //     {
  //       question_no: "3",
  //       question: "WAP to check if the number is prime",
  //       points: "2",
  //       status: "Completed",
  //     },
  //     {
  //       question_no: "4",
  //       question:
  //         "What is Lorem Ipsum? pesetting, remaining essentially unchanged. It",
  //       points: "1",
  //       instructions:
  //         "Lorem Ipsum is the release of Letraset  more recently withe Aldus PageMaker including versions of Lorem Ipsum.",
  //       status: "Submission pending",
  //     },
  //   ],
  // }
  console.log("ass page rendered");
  return (
    <div>
      {isLoading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="Assignments">
          <h1>Course Name</h1>
          <div className="Assignment-head">
            <span>Sr. No.</span>
            <span>Assignments</span>
            <span>Status</span>
            <span>Progress</span>
            <span>Action</span>
          </div>
          <AssignmentList assignments={assignments} />
        </div>
      )}
    </div>
  );
};
export default AssignmestsPage;
