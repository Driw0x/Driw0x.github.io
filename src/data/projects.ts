import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "TaskFleet",

    subtitle: "Systèmes multi-agents, optimisation et planification",

    description:
      "Simulateur d'entrepôt multi-agents consacré à la coordination de robots et à l'optimisation des opérations logistiques. Il combine allocation de tâches, ordonnancement sous contraintes et coordination distribuée simulée, avec un module dédié à la planification de trajectoires et une interface permettant de visualiser et de comparer les stratégies.",

    technologies: [
      "Python",
      "OR-Tools CP-SAT",
      "Contract Net Protocol",
      "DCOP",
      "MAPF / CBS",
      "FastAPI",
      "Vue 3",
      "TypeScript",
    ],

    github: "https://github.com/Driw0x/TaskFleet",

    status: "Terminé",

    featured: true,
  },

  {
    title: "OR-Agent",

    subtitle: "Formulation GAP, CP-SAT et contrôle humain",

    description:
      "Assistant local de modélisation et de résolution de problèmes d'affectation sous contraintes de capacité. Il associe interprétation de demandes en langage naturel, formulation structurée, résolution par contraintes et vérification indépendante des solutions, avec un parcours de revue et de validation humaine pour contrôler et corriger les formulations.",

    technologies: [
      "Python",
      "Pydantic",
      "OR-Tools CP-SAT",
      "Ollama",
      "Human-in-the-Loop",
      "HTML / JavaScript",
    ],

    github: "https://github.com/Driw0x/OR-Agent-hitl",

    status: "Terminé",

    featured: false,
  },

  {
    title: "AI Job Application Workbench",

    subtitle: "Application locale de candidature assistée par IA",

    description:
      "Prototype d'application locale pour rechercher et analyser des offres, préparer des CV et lettres à partir des faits documentés d'une base de connaissances, puis suivre les candidatures. Il combine modèles de langage, génération de documents et revue humaine pour accompagner la préparation, avec soumission effectuée par l'utilisateur.",

    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "SQLite",
      "LLM APIs",
    ],

    github: "https://github.com/Driw0x/ai-job-application-workbench",

    status: "Prototype fonctionnel",

    featured: false,
  },

  {
    title: "CodeAgent",

    subtitle: "Agent LLM local avec RAG, MCP et reprise humaine",

    description:
      "Prototype d'assistant d'analyse de code Python reposant sur un modèle de langage local, la génération augmentée par récupération (RAG) et des outils MCP. Il combine recherche de contexte sourcé, mémoire persistante, planification et outils de consultation du code pour assister la compréhension d'un dépôt, avec possibilité d'intervention humaine.",

    technologies: [
      "Python",
      "AST",
      "FAISS",
      "RAG",
      "Ollama",
      "MCP",
      "Tool Use",
      "Human-in-the-Loop",
    ],

    github: "https://github.com/Driw0x/CodeAgent",

    status: "Prototype fonctionnel",

    featured: true,
  },

  {
    title: "CS2Guard",

    subtitle: "ML expérimental pour l'analyse de comportements suspects",
    
    description:
      "Outil expérimental d'analyse hors ligne de parties Counter-Strike 2, consacré à l'étude des comportements de visée suspects. Il combine extraction de télémétrie, construction de caractéristiques, détection d'anomalies et classification supervisée pour produire des scores, des rapports et des visualisations facilitant l'examen des comportements.",

    technologies: [
      "Python",
      "Scikit-learn",
      "Supervised Learning",
      "Feature Engineering",
      "Anomaly Detection",
    ],

    github: "https://github.com/Driw0x/CS2Guard",

    status: "En développement",

    featured: false,
  },

  {
    title: "MiniMind AMD / ROCm",

    subtitle: "Entraînement local d'un Transformer decoder-only",

    description:
      "Adaptation et entraînement local d'un petit modèle de langage Transformer sous Windows sur GPU AMD, avec PyTorch et ROCm. Le projet couvre le préentraînement et l'ajustement supervisé, en associant précision mixte, diagnostic numérique et gestion des checkpoints pour explorer l'apprentissage de modèles sur matériel grand public.",

    technologies: [
      "Python",
      "PyTorch",
      "Transformers",
      "ROCm",
      "GPU Training",
    ],

    github: "https://github.com/Driw0x/minimind",

    huggingFace: "https://huggingface.co/Driw0x/minimind-rocm-pytorch",

    status: "En développement",

    featured: false,

  },

  {
    title: "Kaggriculture",

    subtitle: "Planification heuristique et décision sous contraintes",

    description:
      "Agent autonome développé pour un environnement agricole simulé. Il combine planification heuristique, allocation de ressources et prise de décision sous contraintes temporelles et économiques afin d'optimiser les actions et d'adapter sa stratégie à l'évolution de l'environnement, en tenant compte de la production, des déplacements et du marché.",

    technologies: [
      "Python",
      "Heuristic Planning",
      "Decision Making",
      "Pathfinding",
      "Resource Management",
    ],

    github: "https://github.com/Driw0x/Kaggriculture",

    status: "Terminé",

    featured: true,
  },
  
  {
    title: "AI Knowledge Workflows",

    subtitle: "Workflows réutilisables pour assistants IA",

    description:
      "Collection de workflows réutilisables pour assistants IA, destinée à la gestion des connaissances, à la documentation de projets et à la préparation de candidatures. Elle associe gestion du contexte, contraintes explicites et traçabilité des affirmations pour produire des résultats vérifiables, tout en séparant les instructions publiques du contexte personnel.",

    technologies: [
      "Prompt Engineering",
      "Context Engineering",
      "Manual Evaluation",
      "Information Provenance",
      "Knowledge Management",
      "Structured Workflows",
    ],

    github:
      "https://github.com/Driw0x/ai-knowledge-workflows",

    status: "Terminé",

    featured: false,
  },
  
  {
    title: "France Tech Arena 2025 — Future Network",

    subtitle: "Optimisation heuristique de ressources réseau",

    description:
      "Projet d'allocation de ressources réseau et d'ordonnancement de trafic sous contraintes de capacité, développé pour le challenge Future Network. Deux approches heuristiques combinent priorisation des flux, sélection de liaisons et fonctions de score pour répartir le trafic en tenant compte des variations de capacité dans le temps.",

    technologies: [
      "Python",
      "Heuristics",
      "Resource Allocation",
      "Constraint-based Decision Making",
      "Networking",
    ],

    github:
      "https://github.com/Driw0x/france-tech-arena-2025-future-network",

    status: "Terminé",
  },

  {
    title: "Genshin Achievement Scanner",

    subtitle: "Scanner semi-automatique de succès Genshin Impact",

    description:
      "Outil Python semi-automatique conçu pour réduire la saisie manuelle des succès obtenus dans Genshin Impact à partir de captures d'écran. Il combine prétraitement d'images, reconnaissance de texte en anglais et rapprochement approximatif avec une base de succès pour produire des exports JSON, dont un format destiné à Paimon.moe.",

    technologies: [
      "Python",
      "EasyOCR",
      "OpenCV",
      "RapidFuzz",
      "PyAutoGUI",
    ],

    github: "https://github.com/Driw0x/Genshin_Achievements_Scanner",

    status: "Terminé",
  },

  {
    title: "Projet AI2D",

    subtitle: "Analyse de trajectoires de code étudiant",

    description:
      "Projet académique d'analyse des programmes Python successifs d'étudiants, destiné à caractériser leurs trajectoires d'apprentissage. Il combine arbres de syntaxe abstraite, distances d'édition entre programmes, classification par règles heuristiques et visualisations statistiques pour étudier les modifications du code et la progression vers les solutions attendues.",

    technologies: [
      "Python",
      "AST",
      "ZSS",
      "Classification",
      "Data Analysis",
    ],

    github: "https://github.com/Driw0x/Projet-AI2D",

    status: "Terminé",
  },
];
