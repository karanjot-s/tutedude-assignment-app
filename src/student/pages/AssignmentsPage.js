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
              //type: "file",
              attempt: "1",
              filelink: [
                "cloudfilename.ext",
                "cloudfilename.ext",
                "cloudfilename.ext",
                "cloudfilename.ext",
                "cloudfilename.ext",
                "cloudfilename.ext",
              ],
              filename: [
                "uploadedFileName",
                "uploadedFileName",
                "uploadedFileName",
                "uploadedFileName",
                "uploadedFileName",
                "uploadedFileName",
              ],
              link: ["url1", "url2"],
              text: "abc",
            },
            {
              attempt: "2",
              filelink: [],
              filename: [],
              link: ["url1", "url2"],
              text: "abc",
            },
            {
              attempt: "3",
              filelink: [],
              filename: [],
              link: [],
              text: "abc",
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
              filelink: ["cloudfilename.ext", "cloudfilename.ext"],
              filename: ["uploadedFileName", "uploadedFileName"],
              link: ["url1", "url2"],
              text: "abc",
              review: "review for attempt1",
            },
            {
              attempt: "2",
              filelink: ["cloudfilename.ext", "cloudfilename.ext"],
              filename: ["uploadedFileName", "uploadedFileName"],
              link: [],
              text: null,
              review: "review for attempt2",
            },
            {
              attempt: "3",
              filelink: [],
              filename: [],
              link: ["url1", "url2"],
              text: "abc",
              review: "review for attempt3",
            },
            {
              attempt: "4",
              filelink: [],
              filename: [],
              link: ["url1", "url2"],
              text: null,
              review: "review for attempt4",
            },
          ],
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
              filelink: [
                "cloudfilename.ext",
                "cloudfilename.ext",
                "uploadedFileName",
                "uploadedFileName",
                "uploadedFileName",
                "uploadedFileName",
                "uploadedFileName",
                "uploadedFileName",
              ],
              filename: [
                "uploadedFileName",
                "uploadedFileName",
                "uploadedFileName",
                "uploadedFileName",
                "uploadedFileName",
                "uploadedFileName",
                "uploadedFileName",
                "uploadedFileName",
              ],
              link: ["url1", "url2"],
              text: "abc",
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
              filelink: ["cloudfilename.ext", "cloudfilename.ext"],
              filename: ["uploadedFileName", "uploadedFileName"],
              link: ["url1", "url2"],
              text: "abc",
              review: "review for attempt1",
            },
            {
              attempt: "2",
              filelink: ["cloudfilename.ext", "cloudfilename.ext"],
              filename: ["uploadedFileName", "uploadedFileName"],
              link: ["url1", "url2"],
              text: "abc",
              review: "review for attempt2",
            },
            {
              attempt: "3",
              filelink: ["cloudfilename.ext", "cloudfilename.ext"],
              filename: ["uploadedFileName", "uploadedFileName"],
              link: ["url1", "url2"],
              text: "abc",
              review: "review for attempt3",
            },
          ],
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

  /*
  useEffect(() => {
    $.ajax({
      url: "https://assignment-backend-tutedude.herokuapp.com/assignment/view?subject_id=1&student_id=14",
      type: "get",
      data: { student_id: 12, subject_id: 1 },
      processData: false,
      success: function (data, textStatus, jQxhr) {
        console.log(data);
        setAssignments(data.data);
      },
      error: function (jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      },
    });
  }, []);*/
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

          {/* <File /> */}
        </div>
      )}
    </div>
  );
};
export default AssignmestsPage;
