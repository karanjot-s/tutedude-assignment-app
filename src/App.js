import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AssignmentsPage from "./student/pages/AssignmentsPage";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import "./App.css";
const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/*" element={<AssignmentsPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
