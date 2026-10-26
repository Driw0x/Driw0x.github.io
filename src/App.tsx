import { useEffect, useState } from "react";

import Background from "./components/layout/Background";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Timeline from "./components/sections/Timeline";
import Personal from "./components/sections/Personal";

import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (hash === "#/projects") {
    return <ProjectsPage />;
  }

  if (hash.split("?")[0] === "#/skills") {
    const skillId = new URLSearchParams(hash.split("?")[1]).get("skill") ?? "";
    return <SkillsPage key={skillId} initialSkillId={skillId} />;
  }

  return (
    <>
      <Background />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Personal />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
