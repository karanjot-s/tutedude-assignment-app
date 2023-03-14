import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Cookies from "js-cookie";

import File from "./student/components/details/ModalElements/File";
import Home from "./student/pages/Home";
import AssignmentsPage from "./student/pages/AssignmentsPage";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import GlobalState from "./contexts/GlobalState";
import "./App.css";
// const Chatra = import("chatra");
import Chatra from "@chatra/chatra";
const App = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const student_id = queryParams.get("student_id");
  const subject_id = queryParams.get("subject_id");
  const [ids, setIds] = useState(
    student_id && subject_id
      ? { subject_id, student_id }
      : {
          student_id: localStorage.getItem("student_id"),
          subject_id: localStorage.getItem("subject_id"),
        }
  );
  const [chakraInit, setChakraInit] = useState(false);
  // const [ids, setIds] = useState({ subject_id, student_id });
  //   student_id: student_id,
  //   subject_id: subject_id,
  // });

  useEffect(() => {
    initChakra();
    // eslint-disable-next-line
  }, []);

  function initChakra() {
    const email = Cookies.get("user_email");
    const name = Cookies.get("user_name");
    console.log("cookie email = ", email);
    if (chakraInit) return;
    Chatra("init", {
      ID: process.env.REACT_APP_CHAKRA_ID,
      integration: {
        name: name,
        email: email,
      },
    });
    // (function (d, w, c) {
    //   w.ChatraID = process.env.REACT_APP_CHAKRA_ID;
    //   var s = d.createElement("script");
    //   w[c] =
    //     w[c] ||
    //     function () {
    //       (w[c].q = w[c].q || []).push(arguments);
    //     };
    //   s.async = true;
    //   s.src = "https://call.chatra.io/chatra.js";
    //   if (d.head) d.head.appendChild(s);
    // })(document, window, "Chatra");
    // window.ChatraIntegration = {
    //   /* main properties */
    //   name: name,
    //   email: email,
    // };
    setChakraInit(true);
  }

  useEffect(() => {
    // console.log(student_id);
    // console.log(subject_id);
    if (student_id && subject_id) {
      // console.log("In if");
      localStorage.setItem("student_id", student_id);
      localStorage.setItem("subject_id", subject_id);
      setIds({ student_id, subject_id });
    } else if (
      localStorage.getItem("student_id") &&
      localStorage.getItem("subject_id")
    ) {
      // console.log("else if");
      setIds({
        student_id: localStorage.getItem("student_id"),
        subject_id: localStorage.getItem("subject_id"),
      });
    }
  }, [student_id, subject_id]);

  return (
    <GlobalState.Provider value={[ids, setIds]}>
      <BrowserRouter>
        {/* <Router> */}
        {/* <MainNavigation /> */}
        {/* <main> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/assignment" element={<AssignmentsPage />} /> */}
          <Route path="/assignment" element={<AssignmentsPage />} />
          <Route path="/assignment/" element={<AssignmentsPage />} />

          <Route path="*" element={<Navigate replace to="/assignment" />} />

          {/* <Route path="/mentor" element={<h3>mentor</h3>} /> */}
        </Routes>
        {/* </main> */}
        {/* </Router> */}
      </BrowserRouter>
    </GlobalState.Provider>
  );
};

export default App;
