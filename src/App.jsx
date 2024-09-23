import "./App.css";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Skill } from "./components/Skill";
import { Project } from "./components/Project";
import { About } from "./components/About";

import { Footer } from "./components/Footer";
import { Contacts } from "./components/Contacts.jsx";

function App() {
  return (
    <>
      <input type="checkbox" id="darkcircle" />
      <div className="wrapper">
        <label htmlFor="darkcircle">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        {/* <!-- nav bar --> */}
        <Navbar />

        {/* <!-- hero section --> */}
        {/* Banner section */}

        <Hero />

        {/* <!-- Skills --> */}
        <Skill />

        {/* <!-- Project --> */}
        <Project />

        {/* <!-- about me  --> */}
        <About />

        {/* <!-- contact --> */}
        <Contacts />

        {/* <!-- footer --> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
