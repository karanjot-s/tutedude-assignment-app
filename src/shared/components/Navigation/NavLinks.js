import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Link, Routes, useLocation } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  const location = useLocation();

  // console.log("hash", location.hash);
  // console.log("pathname", location.pathname);
  // console.log("search", location.search);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to={`/assignment`}>My Assignments</NavLink>
      </li>
      <li>
        <NavLink to="/mentor">Chat with Mentor</NavLink>
      </li>
      <li>
        <NavLink to="/mentor">Profile Name</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
