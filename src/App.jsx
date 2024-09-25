import "./App.css";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skill } from "./components/Skill";
import { Project } from "./components/Project";
import { About } from "./components/About";

import { Footer } from "./components/Footer";
import { Contacts } from "./components/Contacts.jsx";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Layout } from "./components/Layout.jsx";

function App() {
  return (
    <>
      {/* <input type="checkbox" id="darkcircle" />
      <div className="wrapper">
        <label htmlFor="darkcircle">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        {/* <!-- nav bar --> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Hero />} />
          <Route path="skills" element={<Skill />} />
          <Route path="project" element={<Project />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contacts />} />
        </Route>
      </Routes>
      {/* <!-- hero section --> */}
      {/* Banner section */}
      {/* <Hero /> */}
      {/* <!-- Skills --> */}
      {/* <Skill /> */}
      {/* <!-- Project --> */}
      {/* <Project /> */}
      {/* <!-- about me  --> */}
      {/* <About /> */}
      {/* <!-- contact --> */}
      {/* <Contacts /> */}
      {/* <!-- footer --> */}
      {/* <Footer />
      </div> */}
    </>
  );
}

export default App;
