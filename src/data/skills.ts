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
      "Développement d'agents LLM locaux avec recherche hybride, citations et outils MCP. Orchestration de plans multi-étapes, contrôle des preuves, intégrité d'index et fiabilité des sources. Comparaison mesurée d'un moteur natif et de LangGraph, avec traces locales et validation humaine.",
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
      "Construction de pipelines de détection d'anomalies et de classification tabulaire ou temporelle. Validation groupée, recherche d'hyperparamètres et comparaison multi-métriques. Analyse des faux positifs, bootstrap, intégration de l'inférence et génération de rapports.",
  },

  {
    id: "training",
    category: "Deep Learning",
    title: "PyTorch & Model Training",
    description:
      "Adaptation et entraînement local de variantes Dense et Mixture of Experts avec PyTorch ROCm sur GPU AMD. Préentraînement, ajustement supervisé et mixed precision. Diagnostic numérique, checkpoints et comparaison des performances et de la qualité des modèles.",
  },
];
