export interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  status: "En développement" | "Terminé" | "En pause" | "A venir";
  featured?: boolean;
}