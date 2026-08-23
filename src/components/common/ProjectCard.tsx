import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "../../types/project";
import Badge from "./Badge";
import Button from "./Button";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.07]"
    >
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />

      <div className="relative z-10">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium border ${
              project.status === "Terminé"
                ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                : project.status === "En pause"
                ? "border-amber-400/30 bg-amber-400/10 text-amber-300"
                : "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
            }`}
          >
            {project.status}
          </span>

          {project.featured && (
            <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-200">
              Projet principal
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-sm font-medium text-cyan-300">
          {project.subtitle}
        </p>

        <p className="mt-5 leading-7 text-slate-300">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={project.github} external variant="secondary">
            <FiGithub />
            GitHub
          </Button>

          {project.demo && (
            <Button href={project.demo} external variant="primary">
              <FiExternalLink />
              Démo
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}