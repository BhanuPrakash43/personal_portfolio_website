import React from "react";
import Navbar from "./navbar/Navbar";
import Banner from "./banner/Banner";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import TopBar from "./academics/TopBar";
import Contact from "./contact/Contact";
import FooterBottom from "./footer/FooterBottom";

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto mt-6">
        <section id="home">
          <Banner />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="topbar">
          <TopBar />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <FooterBottom />
      </div>
    </div>
  );
}

export default Layout;
