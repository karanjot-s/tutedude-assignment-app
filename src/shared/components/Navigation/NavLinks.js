import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  const { qNo } = useParams();
  return (
    <ul className="nav-links">
      <li>
        <NavLink to={`/question/${qNo}`}>My Assignments</NavLink>
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
