import type { Skill } from "../types/skill";

export const skills: Skill[] = [
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
    category: "Systèmes LLM",
    title: "RAG & Tool Use",
    description:
      "Retrieval hybride, reranking, citations et grounding, puis orchestration bornée de tools read-only avec MCP, validation structurée et évaluation par composant.",
  },

  {
    category: "Deep Learning",
    title: "PyTorch & Model Training",
    description:
      "Entraînement local d'un Transformer decoder-only avec PyTorch sur GPU AMD : ROCm, mixed precision, diagnostics, checkpoints et benchmarks ; DirectML historique et pratique guidée du fine-tuning avec Hugging Face.",
  },

  {
    category: "Machine Learning",
    title: "ML appliqué",
    description:
      "Expérimentation ML offline : détection d'anomalies, classification tabulaire, validation groupée, tuning et comparaison de modèles, avec analyse des métriques et des seuils de décision.",
  },

  {
    category: "AI Workflows",
    title: "Prompt & Context Engineering",
    description:
      "Conception de prompts et contextes structurés, évaluation manuelle des sorties, tests de non-régression ciblés et provenance des affirmations.",
  },
];
