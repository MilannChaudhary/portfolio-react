import React from "react";

export const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="links">
          <div className="link1">
            <ul className="list1">
              <li style={{ fontSize: "30px" }}>
                <strong>Links</strong>
              </li>
              <br />
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
          <div className="link2">
            <ul className="list2">
              <li style={{ fontSize: "30px" }}>
                <strong>Social Links</strong>
              </li>
              <br />
              <li>
                <a href="https://www.linkedin.com/in/milan-chaudhary-65b251279/" target="_blank">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/MilannChaudhary" target="_blank">
                  Github
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/My0urFather/" target="_blank">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@milanchaudhary2857" target="_blank">
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <footer className="footer1">
          <i className="fa-regular fa-copyright"></i> Copy right all reserved 2024 || Made by Milan with{" "}
          <i className="fa-solid fa-heart" style={{ color: "red" }}></i>{" "}
        </footer>
        <a href="#home" className="goUp">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </section>
    </div>
  );
};
