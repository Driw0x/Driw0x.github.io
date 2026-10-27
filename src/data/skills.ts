import type { Skill } from "../types/skill";

export const skills: Skill[] = [
  {
    id: "data",
    category: "Données pour l'IA",
    title: "Data & Feature Engineering",
    description:
      "Construction et validation de datasets multi-sources, parsing et normalisation de données hétérogènes. Calcul de caractéristiques temporelles ou structurelles adaptées aux analyses et aux modèles. Prévention du data leakage, contrôles de cohérence et reprise par checkpoint des traitements longs.",
  },

  {
    id: "optimization",
    category: "Recherche opérationnelle",
    title: "Heuristiques & Décision",
    description:
      "Conception d'heuristiques de planification et d'allocation sous contraintes. Pratique ciblée de CP-SAT pour l'affectation GAP, l'ordonnancement temporel, l'horizon glissant et une optimisation minimax sur scénarios déclarés, avec vérification indépendante des candidats. Comparaison expérimentale des stratégies.",
  },

  {
    id: "agents",
    category: "Systèmes LLM",
    title: "IA agentique & outils LLM",
    description:
      "Systèmes LLM locaux : retrieval hybride, reranking, citations et outils MCP. Orchestration de plans multi-étapes avec mémoire, budgets, contrôle des preuves et replanification bornée. Intégration du contrôle humain et de reprises partiellement validées ; résultats assistés distingués des succès autonomes.",
  },

  {
    id: "training",
    category: "Deep Learning",
    title: "PyTorch & Model Training",
    description:
      "Adaptation et entraînement local d'un Transformer decoder-only avec PyTorch ROCm sur GPU AMD : préentraînement, ajustement supervisé, mixed precision et diagnostics numériques. Gestion et comparaison de checkpoints, avec résultats sur références locales et limites documentées de factualité et de raisonnement.",
  },

  {
    id: "ml",
    category: "Machine Learning",
    title: "ML appliqué",
    description:
      "Expérimentation ML offline : détection d'anomalies, classification tabulaire, validation groupée, tuning et comparaison de modèles. Intégration de l'inférence et de rapports, tests historiques et analyse de cohortes négatives. Scores non calibrés, sans seuil opérationnel ni généralisation externe positive démontrés.",
  },

  {
    id: "multi-agent",
    category: "Systèmes multi-agents",
    title: "Simulation & optimisation",
    description:
      "Simulation déterministe, coordination par Contract Net et allocation distribuée DSA-B. Planification multi-agents avec A* espace-temps, CBS et vérification des collisions sur petits cas. Q-learning indépendant tabulaire évalué, sans généralisation apprise démontrée. Réseau simulé, sans système distribué réel.",
  },
];
