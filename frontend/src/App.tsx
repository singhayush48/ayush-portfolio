import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import HowIBuild from "./sections/HowIBuild";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import ProjectDetail from "./pages/ProjectDetail";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <HowIBuild />
      <Education />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] opacity-[0.12] scanlines" />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
