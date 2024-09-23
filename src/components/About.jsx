import React from "react";
import milan from "../assest/milan.png";
import { Title } from "./Title";

export const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="aboutme">
          <Title title="About Me" />
        </div>
        <div className="details">
          <div className="aboutImage">
            <img src={milan} alt="Milan" />
          </div>
          <div className="detail1">
            <h1>Milan Chaudhary</h1>
            <p>
              Possess practical experience as a manager at McDonald's, where I gained proficiency in POS systems,
              troubleshooting KVS screens, and managing equipment maintenance. Additionally, I have a strong background
              in customer service from my role as a table games dealer at The Star Casino, where I honed my skills in
              customer interactions and mental calculations.
            </p>
            <p>
              Eager to leverage my technical knowledge and practical experience in a dynamic IT environment to
              contribute to innovative projects and deliver exceptional results.
            </p>
            <h2>Sydney, Australia</h2>
            <h2>Interest</h2>
            {/* <!-- <p><i className="fa-solid fa-code"></i> <i className="fa-solid fa-futbol"></i>  <i className="fa-solid fa-gamepad"></i></p> --> */}
            <ul>
              <li>
                <i className="fa-solid fa-code"></i> Coding
              </li>
              <li>
                <i className="fa-solid fa-futbol"></i> Football
              </li>
              <li>
                <i className="fa-solid fa-gamepad"></i> Gaming
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
