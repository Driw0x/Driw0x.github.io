import Container from "../common/Container";
import ProjectCard from "../common/ProjectCard";
import SectionTitle from "../common/SectionTitle";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <Container>
        <SectionTitle
          eyebrow="Projets"
          title="Quelques projets techniques."
          description="Une sélection de projets autour de l'intelligence artificielle, du développement logiciel et de la recherche sémantique."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={`${import.meta.env.BASE_URL}projects`}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
          >
            Voir tous les projets
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}