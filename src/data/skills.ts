import type { Skill } from "../types/skill";

export const skills: Skill[] = [
  {
    category: "Données pour l'IA",
    title: "Data & Feature Engineering",
    description:
      "Construction et validation de datasets, feature engineering, prévention du data leakage et reprise par checkpoint de traitements longs.",
  },

  {
    category: "Recherche opérationnelle",
    title: "Heuristiques & Décision",
    description:
      "Conception de méthodes heuristiques pour la planification, l'allocation de ressources et la prise de décision sous contraintes.",
  },

  {
    category: "Systèmes LLM",
    title: "IA agentique & outils LLM",
    description:
      "Conception de systèmes LLM locaux : retrieval hybride, reranking, citations, grounding et orchestration de tools en lecture seule via MCP. Mémoire persistante, compaction extractive et budget de contexte vérifiés par des tests dédiés. Pratique des prompts et sorties structurés, de la provenance, des tests de non-régression et d'applications multi-provider avec contrôles métier et validation humaine.",
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
      "Expérimentation ML offline : détection d'anomalies, classification tabulaire, validation groupée, tuning et comparaison de modèles. Intégration d'inférence, de rapports et de contributions du Random Forest. Étude externe sur des joueurs présumés légitimes, avec analyse des distributions de scores et des dépendances entre matchs.",
  },

  {
    category: "Systèmes multi-agents",
    title: "Simulation & optimisation",
    description:
      "Simulation multi-agent déterministe et coordination Contract Net implémentées dans TaskFleet. Affectation de tâches avec OR-Tools CP-SAT et comparaison expérimentale des stratégies FIFO, CNP et CP-SAT selon la durée, les retards et les distances parcourues. Application pratique de la planification, de l'optimisation combinatoire et de la prise de décision.",
  },
];
