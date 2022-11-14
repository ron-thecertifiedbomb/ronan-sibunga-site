import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../NavBar/NavBar.css";
import logo from "../NavBar/Logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [activeMenu, setActiveMenu] = useState("#home");

  const getClicked = (event) => {
    console.log(event.currentTarget.id);
    setClick(false);
    setActiveMenu(event.currentTarget.id);
  };

  return (
    <div className="header">
      <nav className="navbar">
        <a href="#home" className="logo">
          <img src={logo} alt="logo" style={{ width: "45px" }} />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>

        <ul className={click ? "nav-menu open" : "nav-menu"}>
          <li className="nav-item">
            <a
              href="#home"
              id="#home"
              onClick={getClicked}
              className={activeMenu === "#home" ? "toggle-on" : ""}
            >
              <h1>Home</h1>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#aboutme"
              id="#aboutme"
              onClick={getClicked}
              className={activeMenu === "#aboutme" ? "toggle-on" : ""}
            >
              <h1>About</h1>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#tools"
              id="#tools"
              onClick={getClicked}
              className={activeMenu === "#tools" ? "toggle-on" : ""}
            >
              <h1>Skills</h1>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              id="#portfolio"
              onClick={getClicked}
              className={activeMenu === "#portfolio" ? "toggle-on" : ""}
            >
              <h1>Portfolio</h1>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contactpage"
              id="#contactpage"
              onClick={getClicked}
              className={activeMenu === "#contactpage" ? "toggle-on" : ""}
            >
              <h1>Contact Me</h1>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;