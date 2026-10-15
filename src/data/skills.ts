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
      "Retrieval hybride, reranking, citations et grounding ; tool use borné read-only avec MCP ; mémoire persistante, compaction extractive et budget de contexte testés, sans fiabilité autonome générale démontrée. Prompts structurés, provenance, évaluation manuelle et non-régression. Pratique d'applications LLM avec sorties structurées, plusieurs providers, contrôles métier et validation humaine, testée synthétiquement.",
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
      "Expérimentation ML offline : détection d'anomalies, classification tabulaire, validation groupée, tuning et comparaison de modèles. Intégration d'inférence et de rapports, contributions RF et étude externe présumée légitime, avec limites de calibration et de dépendance explicites.",
  },

  {
    category: "Simulation & optimisation",
    title: "Optimisation & Systèmes multi-agents",
    description:
      "Simulation multi-agent déterministe et coordination Contract Net évaluées dans TaskFleet ; pratique ciblée de l'affectation OR-Tools CP-SAT et comparaison à FIFO. Fondements académiques complémentaires en recherche opérationnelle et décision, sans expertise générale des solveurs ni système distribué réel démontrés.",
  },
];
