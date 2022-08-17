import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import logo from "../../assets/TutedudeLogo.png";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
