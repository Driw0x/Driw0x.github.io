import type { Skill } from "../types/skill";

export const skills: Skill[] = [
  {
    id: "optimization",
    category: "Recherche opérationnelle",
    title: "Heuristiques & Décision",
    description:
      "Conception d'heuristiques de planification et d'allocation sous contraintes. Modélisation et résolution de problèmes d'affectation et d'ordonnancement avec CP-SAT. Planification à horizon glissant, vérification indépendante des solutions et comparaison expérimentale des stratégies.",
  },

  {
    id: "agents",
    category: "Systèmes LLM",
    title: "IA agentique & outils LLM",
    description:
      "Développement d'agents LLM locaux avec recherche hybride, reranking, citations et outils MCP. Orchestration de plans multi-étapes avec mémoire, budgets d'exécution et contrôle des preuves. Intégration de la validation humaine dans les workflows de décision et d'exécution.",
  },

  {
    id: "multi-agent",
    category: "Systèmes multi-agents",
    title: "Simulation & optimisation",
    description:
      "Modélisation et simulation de systèmes multi-agents. Coordination par Contract Net et allocation distribuée avec DSA-B. Planification de chemins avec A* espace-temps et CBS, vérification des collisions et comparaison des stratégies à partir de scénarios reproductibles.",
  },

  {
    id: "data",
    category: "Données pour l'IA",
    title: "Data & Feature Engineering",
    description:
      "Construction et validation de datasets multi-sources, parsing et normalisation de données hétérogènes. Calcul de caractéristiques temporelles et structurelles pour l'analyse et les modèles. Prévention du data leakage, contrôles de cohérence et reprise des traitements par checkpoint.",
  },

  {
    id: "ml",
    category: "Machine Learning",
    title: "ML appliqué",
    description:
      "Construction de pipelines de détection d'anomalies et de classification tabulaire. Validation croisée groupée, recherche d'hyperparamètres et comparaison multi-métriques des modèles. Analyse des faux positifs, intégration de l'inférence et génération de rapports d'analyse.",
  },

  {
    id: "training",
    category: "Deep Learning",
    title: "PyTorch & Model Training",
    description:
      "Adaptation et entraînement local d'un Transformer decoder-only avec PyTorch ROCm sur GPU AMD. Préentraînement, ajustement supervisé et mixed precision. Diagnostic des instabilités numériques, gestion des checkpoints et comparaison des performances et de la qualité des modèles.",
  },
];
