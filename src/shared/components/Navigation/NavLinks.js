import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Link, Routes, useLocation } from "react-router-dom";
import "./NavLinks.css";
import Chatra from "@chatra/chatra";

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
        <NavLink
          to="#chatraChatExpanded"
          onClick={() => {
            console.log("chatra expanded");
            Chatra("expandWidget");
          }}
        >
          Chat with Mentor
        </NavLink>
      </li>
      <li>
        <NavLink to="#">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="#666666"
          >
            <path d="M8.50583 8C10.7158 8 12.5058 6.21 12.5058 4C12.5058 1.79 10.7158 0 8.50583 0C6.29583 0 4.50583 1.79 4.50583 4C4.50583 6.21 6.29583 8 8.50583 8ZM8.50583 10C5.83583 10 0.505829 11.34 0.505829 14V16H16.5058V14C16.5058 11.34 11.1758 10 8.50583 10Z" />
          </svg>
          <span>Profile</span>
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            xmlns="http://www.w3.org/2000/svg"
            fill="#666666"
          >
            <path d="M11.0959 0.589996L6.50586 5.17L1.91586 0.589996L0.505859 2L6.50586 8L12.5059 2L11.0959 0.589996Z" />
          </svg>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
