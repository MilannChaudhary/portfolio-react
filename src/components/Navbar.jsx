import React from "react";

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
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
