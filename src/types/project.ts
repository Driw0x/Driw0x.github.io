export interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  github: string;
  documentation: { fr: string; "zh-CN": string };
  huggingFace?: string;
  demo?: string;
  status: "En développement" | "Prototype fonctionnel" | "Terminé" | "En pause" | "À venir";
  featured?: boolean;
}
