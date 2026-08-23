import type { Interest, Language } from "../types/personal";

export const languages: Language[] = [
  { code: "FR", name: "Français", level: "Natif" },
  { code: "CN", name: "Chinois", level: "Natif" },
  { code: "EN", name: "Anglais", level: "Intermédiaire" },
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
    title: "E-sport",
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