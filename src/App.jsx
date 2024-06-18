import About from "./components/about/About";
import TopBar from "./components/academics/TopBar";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-xl mx-auto mt-6">
        <Banner />
        <About />
        <Skills />
        <Projects />
        <TopBar />
        <Contact />
        <FooterBottom />
      </div>
    </div>
  );
}
export default App;
