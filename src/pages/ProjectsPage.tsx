import Background from "../components/layout/Background";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Container from "../components/common/Container";
import ProjectCard from "../components/common/ProjectCard";
import SectionTitle from "../components/common/SectionTitle";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Background />

      <Navbar projectsPage />

      <main>
        <section className="py-28">
          <Container>
            <SectionTitle
              eyebrow="Projets"
              title="Tous mes projets."
              description="Découvrez l'ensemble de mes projets en intelligence artificielle, développement logiciel et ingénierie."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                />
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}