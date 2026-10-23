import Container from "../common/Container";
import ProjectCard from "../common/ProjectCard";
import SectionTitle from "../common/SectionTitle";
import { projects } from "../../data/projects";
import { useLanguage } from "../../i18n";

export default function Projects() {
  const { t } = useLanguage();
  return (
    <section id="projects" className="py-28">
      <Container>
        <SectionTitle
          eyebrow={t("Projets")}
          title={t("Quelques projets techniques.")}
          description={t("Trois projets complémentaires en recherche opérationnelle, IA agentique et systèmes multi-agents : simulation d'entrepôt, analyse de code et planification heuristique.")}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects
            .filter((project) => project.featured)
            .slice(0, 3)
            .map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={`${import.meta.env.BASE_URL}#/projects`}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
          >
            {t("Voir tous les projets")}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
