import Background from "../components/layout/Background";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Container from "../components/common/Container";
import ProjectCard from "../components/common/ProjectCard";
import SectionTitle from "../components/common/SectionTitle";
import { projects } from "../data/projects";

const projectGroups = [
  {
    title: "En cours",
    statuses: ["En développement"],
  },
  {
    title: "Prototypes",
    statuses: ["Prototype fonctionnel"],
  },
  {
    title: "Finalisés",
    statuses: ["Terminé"],
  },
  {
    title: "En pause",
    statuses: ["En pause"],
  },
  {
    title: "À venir",
    statuses: ["À venir"],
  },
];

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
              description="Découvrez mes projets en intelligence artificielle appliquée, systèmes décisionnels et expérimentation machine learning."
            />

            <div className="mt-12 space-y-16">
              {projectGroups.map((group) => {
                const groupedProjects = projects.filter((project) =>
                  group.statuses.includes(project.status)
                );

                if (groupedProjects.length === 0) {
                  return null;
                }

                return (
                  <section key={group.title}>
                    <div className="mb-6 flex items-center gap-3">
                      <h2 className="text-2xl font-bold text-white">
                        {group.title}
                      </h2>

                      <span className="text-sm text-slate-500">
                        {groupedProjects.length}
                      </span>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      {groupedProjects.map((project) => (
                        <ProjectCard
                          key={project.title}
                          project={project}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
