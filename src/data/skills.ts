import type { Skill } from "../types/skill";

export const skills: Skill[] = [
  {
    category: "Langage",
    title: "Python",
    description:
      "Développement d'outils, pipelines de données, agents autonomes et applications d'intelligence artificielle.",
  },

  {
    category: "Intelligence Artificielle",
    title: "Machine Learning",
    description:
      "Préparation de données, extraction de caractéristiques, entraînement et évaluation de modèles avec Scikit-learn, Pandas et NumPy.",
  },

  {
    category: "Deep Learning",
    title: "PyTorch & LLM",
    description:
      "Pré-entraînement, fine-tuning, expérimentation et adaptation de modèles de langage avec PyTorch, notamment sur GPU via DirectML.",
  },

  {
    category: "Algorithmique",
    title: "Planification & Optimisation",
    description:
      "Conception d'heuristiques, optimisation sous contraintes, allocation de ressources, pathfinding et prise de décision séquentielle.",
  },

  {
    category: "IA générative",
    title: "AI Workflows & Semantic Search",
    description:
      "Conception de workflows pour agents IA, prompt et context engineering, embeddings, recherche sémantique et gestion structurée des connaissances.",
  },

  {
    category: "Vision par ordinateur",
    title: "OCR & Image Processing",
    description:
      "Prétraitement d'images, reconnaissance de texte et fuzzy matching avec OpenCV, EasyOCR et RapidFuzz.",
  },
];