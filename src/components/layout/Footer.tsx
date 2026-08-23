import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../../data/profile";
import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="font-bold text-white">{profile.name}</p>
            <p className="mt-1 text-sm text-slate-400">
              Étudiant en Master 2 AI2D · Sorbonne Université
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-cyan-300">
              <FiLinkedin /> LinkedIn
            </a>

            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition hover:text-cyan-300">
              <FiGithub /> GitHub
            </a>

            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 transition hover:text-cyan-300">
              <FiMail /> Email
            </a>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 Victor Ye
          </p>
        </div>
      </Container>
    </footer>
  );
}