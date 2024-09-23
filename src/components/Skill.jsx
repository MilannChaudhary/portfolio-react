import React from "react";

export const Skill = () => {
  return (
    <div>
      <section className="skills" id="skills">
        <div style={{ color: "#e34c26" }}>
          <i className="fa-brands fa-html5"></i>
          <br />
          Html
        </div>
        <div style={{ color: "#264de4" }}>
          <i className="fa-brands fa-css3-alt"></i>
          <br />
          CSS
        </div>
        <div style={{ color: "#f0db4f" }}>
          <i className="fa-brands fa-js"></i>
          <br />
          Javascript
        </div>
        <div style={{ color: "#00d8ff" }}>
          <i className="fa-brands fa-react"></i>
          <br />
          React
        </div>
        <div>
          <i className="fa-brands fa-github"></i>
          <br />
          Github
        </div>
      </section>
    </div>
  );
};
