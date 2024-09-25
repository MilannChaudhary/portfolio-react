import React from "react";
import milan from "../assest/milan.png";
import { Layout } from "./Layout";

export const Hero = () => {
  return (
    <div>
      <section className="hero" id="home">
        <div className="title">
          <span>Hi I'm</span>
          <br />
          <span style={{ fontSize: "3rem" }}>
            <strong>Milan Chaudhary</strong>
          </span>
          <br />
          <div style={{ fontSize: "2rem" }} className="text-changer">
            <span>Full Stack Dev.</span>
            <span>Table Games Dealer</span>
            <span>Dota 2 Player</span>
            <span>Code Blooded</span>
            <span>Dented Coder</span>
          </div>
          <br />
          <br />
          <button class="btn">
            <i class="fa fa-download"></i> Download CV
          </button>
        </div>

        <div className="heroImage">
          <img src={milan} alt="" />
        </div>
      </section>

      {/* /* <!-- banner --> */}

      <section className="banner">
        <div className="banner1">
          <i className="fa-solid fa-graduation-cap"></i>
          <p>
            IT Graduation <br /> <small>Completed</small>
          </p>
        </div>
        <div className="banner2">
          <i className="fa-solid fa-diagram-project"></i>
          <p>
            5+ Project
            <br />
            <small>Completed</small>
          </p>
        </div>
        <div className="banner3">
          <i className="fa-solid fa-lightbulb"></i>
          <p>
            1+ Year Experience
            <br />
            <small>Completed</small>
          </p>
        </div>
      </section>
    </div>
  );
};
