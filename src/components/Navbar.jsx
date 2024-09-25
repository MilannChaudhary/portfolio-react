import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="header">
          <div className="logo">
            <div className="logo1" style={{ fontWeight: "bold" }}>
              {" "}
              <span style={{ fontSize: "30px" }}> MILAN</span>{" "}
            </div>
            <div className="logo2">Full Stack Developer</div>
          </div>
          <label htmlFor="tripleline">
            <i className="fa-solid fa-bars"></i>
          </label>
          <input type="checkbox" name="" id="tripleline" />
          <div className="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="skills">Skills</Link>
              </li>
              <li>
                <Link to="project">Projects</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
