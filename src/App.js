import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

import File from "./student/components/details/ModalElements/File";
import Home from "./student/pages/Home";
import AssignmentsPage from "./student/pages/AssignmentsPage";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import GlobalState from "./contexts/GlobalState";
import "./App.css";

const App = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const student_id = queryParams.get("student_id");
  const subject_id = queryParams.get("subject_id");
  const [ids, setIds] = useState({});
  //   student_id: student_id,
  //   subject_id: subject_id,
  // });
  console.log(student_id);
  console.log(subject_id);
  if(student_id && subject_id)
  {
    localStorage.setItem("student_id",student_id);
    localStorage.setItem("subject_id",subject_id);
    setIds({student_id,subject_id});
  }
  else if(localStorage.getItem("student_id") && localStorage.getItem("subject_id"))
  {
    setIds({student_id,subject_id});
  }

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
