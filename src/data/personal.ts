import type { Interest, Language } from "../types/personal";

export const languages: Language[] = [
  { code: "FR", name: "Français", level: "Langue maternelle" },
  { code: "CN", name: "Chinois", level: "Langue maternelle" },
  { code: "EN", name: "Anglais", level: "B2" },
];

export const interests: Interest[] = [
  {
    icon: "🧗",
    title: "Escalade",
    description:
      "Dépassement de soi, concentration et résolution de problèmes.",
  },
  {
    icon: "🎮",
    title: "E-sport et jeux compétitifs",
    description:
      "Compétition, stratégie et travail d'équipe.",
  },
  {
    icon: "🏊",
    title: "Natation",
    description:
      "Discipline, endurance et persévérance.",
  },
];
