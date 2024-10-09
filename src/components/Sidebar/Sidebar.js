import "./sidebar.css";
import { useState } from "react";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <nav className={toggle ? "navbar show-menu" : "navbar"}>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              <i className="icon-home"></i>
              <span>Home</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              <i className="icon-user-following"></i>
              <span>About Me</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link">
              <i className="icon-graduation"></i>
              <span>Experience</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link">
              <i className="icon-graduation"></i>
              <span>Skills</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link">
              <i className="icon-layers"></i>
              <span>Projects</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">
              <i className="icon-briefcase"></i>
              <span>Technologies</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              <i className="icon-note"></i>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
