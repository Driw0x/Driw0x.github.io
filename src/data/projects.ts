import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "CS2Guard",

    subtitle: "Système intelligent de détection de triche sur Counter-Strike 2",

    description:
      "Projet d'anti-cheat basé sur l'analyse comportementale des joueurs de Counter-Strike 2. Le projet commence par l'analyse de fichiers de démo afin d'extraire des données de gameplay, construire des features pertinentes et entraîner des modèles de Machine Learning capables d'identifier des comportements suspects. L'objectif final est d'adapter cette détection à un système d'analyse en temps réel côté serveur.",

    technologies: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "CS2 Demo Parsing",
      "Scikit-learn",
    ],

    github: "https://github.com/Driw0x/CS2Guard",

    status: "En développement",

    featured: false,
  },

  {
    title: "MiniMind DirectML",

    subtitle: "Adaptation Windows / DirectML de MiniMind",

    description:
      "Fork de MiniMind visant à permettre l'exécution et l'entraînement de petits modèles de langage sur Windows avec des GPU compatibles DirectX 12, sans dépendance à CUDA. Le projet adapte progressivement le pipeline d'entraînement et d'inférence à PyTorch DirectML.",

    technologies: [
      "Python",
      "PyTorch",
      "DirectML",
      "LLM",
      "Deep Learning",
    ],

    github: "https://github.com/Driw0x/minimind",

    status: "En développement",

  },

  {
    title: "Kaggriculture",

    subtitle: "Agent autonome de planification et d'optimisation",

    description:
      "Développement d'un agent autonome pour la compétition Kaggriculture sur Kaggle. L'agent utilise des heuristiques de planification et d'optimisation pour gérer dynamiquement la production, la main-d'œuvre, les déplacements, les achats et les interactions avec le marché sous contraintes temporelles et économiques.",

    technologies: [
      "Python",
      "Heuristic Planning",
      "Optimization",
      "Pathfinding",
      "Decision Making",
    ],

    github: "https://github.com/Driw0x/Kaggriculture",

    status: "En développement",

    featured: true,
  },
  
  {
    title: "AI Knowledge Workflows",

    subtitle: "Workflows et prompts réutilisables pour agents IA",

    description:
      "Conception d'une architecture de workflows réutilisables pour agents IA, combinant prompt engineering, gestion de contexte, contraintes explicites et sorties structurées. Le projet fournit des prompts et templates versionnés pour la recherche, la gestion de projets, l'évaluation de compétences et la maintenance d'une base de connaissances.",

    technologies: [
      "Prompt Engineering",
      "AI Agents",
      "Knowledge Management",
      "Context Engineering",
      "Git",
    ],

    github:
      "https://github.com/Driw0x/ai-knowledge-workflows",

    status: "En développement",

    featured: false,
  },
  
  {
    title: "France Tech Arena 2025 — Future Network",

    subtitle: "Optimisation heuristique de ressources réseau",

    description:
      "Développement de deux approches heuristiques pour le challenge Future Network (Data Communications) de la Huawei France Tech Arena 2025. Les solutions explorent différentes stratégies de priorisation et de scoring pour l'allocation de ressources réseau sous contraintes.",

    technologies: [
      "Python",
      "Heuristics",
      "Optimization",
      "Resource Allocation",
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
      "Outil Python semi-automatique permettant de détecter les succès obtenus dans Genshin Impact à partir de captures d'écran. Utilisation de l'OCR pour reconnaître les titres, de fuzzy matching pour les associer à une base de succès et génération d'un export JSON compatible avec des outils comme Paimon.moe.",

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
      "Projet académique réalisé dans le cadre du Master AI2D. Analyse de programmes Python à partir des arbres de syntaxe abstraite (AST), calcul de distances entre programmes, classification de profils d'apprentissage et production de visualisations statistiques.",

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

  {
    title: "CodeAgent",

    subtitle: "Agent IA local pour l'analyse de code",

    description:
      "Développement d'un agent IA local permettant d'analyser une base de code. Le projet combine parsing AST, chunking intelligent, embeddings, recherche sémantique, indexation vectorielle et RAG afin d'assister les développeurs dans la compréhension d'un projet.",

    technologies: [
      "Python",
      "AST",
      "FAISS",
      "Embeddings",
      "RAG",
    ],

    github: "https://github.com/Driw0x/CodeAgent",

    status: "En pause",
  },
];