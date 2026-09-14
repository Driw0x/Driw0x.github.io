import type { Skill } from "../types/skill";

export const skills: Skill[] = [
  {
    category: "Développement",
    title: "Python",
    description:
      "Développement de pipelines de données, outils d'analyse, agents heuristiques et expérimentations en intelligence artificielle.",
  },

  {
    category: "Données pour l'IA",
    title: "Data & Feature Engineering",
    description:
      "Construction et validation de datasets, feature engineering, prévention du data leakage et reprise par checkpoint de traitements longs.",
  },

  {
    category: "Algorithmique",
    title: "Heuristiques & Décision",
    description:
      "Conception de méthodes heuristiques pour la planification, l'allocation de ressources et la prise de décision sous contraintes.",
  },

  {
    category: "Deep Learning",
    title: "PyTorch & Model Training",
    description:
      "Entraînement PyTorch sous Windows avec DirectML, mixed precision, diagnostic numérique, checkpoints reprenables et benchmarks GPU sur une configuration de référence.",
  },

  {
    category: "Machine Learning",
    title: "ML appliqué",
    description:
      "Préparation de pipelines, expérimentation et évaluation de modèles, dont une première comparaison de méthodes de détection d'anomalies non supervisée.",
  },

  {
    category: "AI Workflows",
    title: "Prompt & Context Engineering",
    description:
      "Conception de prompts et contextes structurés, évaluation manuelle des sorties, tests de non-régression ciblés et provenance des affirmations.",
  },
];
