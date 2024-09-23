import React from "react";
import suitcase from "../assest/suitcase-3247292_1280.png";
import calculator from "../assest/calculator-react.png";
import quiz from "../assest/quiz-javacript.png";
import parallex from "../assest/parallex-effect.png";
import ntdl from "../assest/ntdl.png";
import { Title } from "./Title";
import { Card } from "./Card";
export const Project = () => {
  const projects = [
    {
      image: calculator,
      github: "https://github.com/MilannChaudhary/react-calculator",
      url: "react-calculator-nine-ruddy.vercel.app",
      title: "Calculator Using React",
      description: "Techstack: Html, Css, Javascript, React",
    },
    {
      image: quiz,
      github: "https://github.com/MilannChaudhary/quiz-project",
      url: "https://milannchaudhary.github.io/quiz-project/home.html",
      title: "Quiz for Premier League ",
      description: "Techstack: Html, Css, Javascript",
    },
    {
      image: parallex,
      github: "https://github.com/MilannChaudhary/challanges/blob/main/parallex.html",
      url: "https://htmlpreview.github.io/?https://github.com/MilannChaudhary/challanges/blob/main/parallex.html",
      title: "Parallex Effect",
      description: "Techstack: Html and Css",
    },
    {
      image: ntdl,
      github: "https://github.com/MilannChaudhary/not-to-do-list",
      url: "",
      title: "Not To Do List",
      description: "Techstack: Html, Css, Javascript, React",
    },
    {
      image: suitcase,
      github: "https://github.com/MilannChaudhary/not-to-do-list",
      url: "",
      title: "My Portfolio",
      description: "Techstack: Html, Css, Javascript, React",
    },
    {
      image: suitcase,
      github: "https://github.com/MilannChaudhary/not-to-do-list",
      url: "",
      title: "My Portfolio",
      description: "Techstack: Html, Css, Javascript, React",
    },
  ];
  return (
    <div>
      <section className="project" id="project">
        <Title title="Recent Work" />

        <br />
        <div className="card">
          {projects.map((project, i) => (
            <Card key={i} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};
