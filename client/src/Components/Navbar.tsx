import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import SearchBar from "./SearchBar";

import "./Navbar.css";

const Navbar: React.FC = () => {
  const [visibleDropdown, setVisibleDropdown] = useState<string | null>(null);

  const handleMouseEnter = (menuName: string) => {
    setVisibleDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setVisibleDropdown(null);
  };

  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-logo-container">
          <Logo />
        </div>

        <div className="navbar-menu">
          <ul>
            <li
              onMouseEnter={() => handleMouseEnter("buy")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="/buy">Buy</a>
            </li>
            <li>
              <a href="/sell">Sell</a>
            </li>
            <li>
              <a href="/agents">Agents</a>
            </li>
            <li>
              <a href="/mortgage-calculator">Mortgage Calculator</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
          </ul>
        </div>

        <div className="navbar-search">
          <SearchBar></SearchBar>
        </div>

        <div className="navbar-profile">
          <Link to="/Login">Login</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
