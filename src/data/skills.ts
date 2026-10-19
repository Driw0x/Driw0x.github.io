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
      "Conception d'heuristiques de planification et d'allocation sous contraintes. Pratique ciblée de CP-SAT pour l'affectation GAP, l'ordonnancement temporel, l'horizon glissant et une optimisation minimax sur scénarios déclarés, avec vérification indépendante des candidats.",
  },

  {
    category: "Systèmes LLM",
    title: "IA agentique & outils LLM",
    description:
      "Systèmes LLM locaux avec retrieval hybride, reranking, citations, grounding et outils MCP. Mémoire, budgets et planification contrôlée dans une extension locale de CodeAgent, dont l'autonomie reste partiellement validée. Pratique du HITL : admission d'un modèle relu dans OR-Agent, reprise d'exécution dans CodeAgent et revue documentaire dans une application multi-provider. Succès assistés distingués des résultats autonomes.",
  },

  {
    category: "Deep Learning",
    title: "PyTorch & Model Training",
    description:
      "Adaptation et entraînement local d'un Transformer decoder-only avec PyTorch ROCm sur GPU AMD : Dense Pretrain et Full SFT, comparaison de checkpoints, mixed precision et diagnostics numériques. Résultats sur références locales, avec limites de factualité et de raisonnement ; DirectML historique et pratique guidée complémentaire avec Hugging Face.",
  },

  {
    category: "Machine Learning",
    title: "ML appliqué",
    description:
      "Expérimentation ML offline : détection d'anomalies, classification tabulaire, validation groupée, tuning et comparaison de modèles. Intégration d'inférence et de rapports ; reproduction sur test historique et analyse d'une cohorte à annotations négatives. Scores non calibrés, sans seuil opérationnel ni généralisation externe positive démontrés.",
  },

  {
    category: "Systèmes multi-agents",
    title: "Simulation & optimisation",
    description:
      "Simulation déterministe, Contract Net et allocation distribuée DSA-B dans TaskFleet. MAPF séparé avec A* espace-temps, CBS et vérification des collisions ; comparaisons avec références exhaustives sur petits cas. Q-learning indépendant tabulaire implémenté et évalué, sans généralisation apprise démontrée. Réseau simulé, sans système distribué réel.",
  },
];
