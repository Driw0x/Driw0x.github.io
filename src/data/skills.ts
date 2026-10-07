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
    title: "Agentic AI & Tool Use",
    description:
      "Retrieval hybride, reranking, citations et grounding ; tool use et orchestration bornée read-only avec MCP ; prompts et contextes structurés avec frontières explicites, provenance, sorties vérifiables, évaluation manuelle et tests de non-régression ciblés. Pratique d'applications LLM avec sorties structurées, plusieurs providers, contrôles métier et validation humaine, testée synthétiquement.",
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
    category: "Formation & intérêts",
    title: "Optimisation & Systèmes multi-agents",
    description:
      "Fondements académiques en recherche opérationnelle, optimisation combinatoire, décision, simulation et systèmes multi-agents. Domaines d'intérêt en cours d'approfondissement, distincts des compétences démontrées par les projets.",
  },
];
