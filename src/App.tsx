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

export default function App() {
  const path = window.location.pathname;
  const base = import.meta.env.BASE_URL;

  if (path === `${base}projects` || path === `${base}projects/`) {
    return <ProjectsPage />;
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