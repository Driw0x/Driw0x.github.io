import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "CS2Guard",

    subtitle: "Pipeline d'analyse de données pour l'anti-cheat CS2",
    
    description:
      "Développement d'un pipeline d'analyse de démos CS2 : parsing multi-source, construction de datasets, extraction de caractéristiques comportementales et traitement reproductible des données en préparation de futurs modèles de détection.",

    technologies: [
      "Python",
      "Data Processing",
      "Feature Engineering",
      "Temporal Data",
      "Dataset Engineering",
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

    subtitle: "Agent heuristique de décision sous contraintes",

    description:
      "Développement d'un agent autonome pour la compétition Kaggriculture sur Kaggle. L'agent utilise des heuristiques de planification et d'optimisation pour gérer dynamiquement la production, la main-d'œuvre, les déplacements, les achats et les interactions avec le marché sous contraintes temporelles et économiques.",

    technologies: [
      "Python",
      "Heuristic Planning",
      "Decision Making",
      "Pathfinding",
      "Resource Management",
    ],

    github: "https://github.com/Driw0x/Kaggriculture",

    status: "En développement",

    featured: true,
  },
  
  {
    title: "AI Knowledge Workflows",

    subtitle: "Workflows structurés pour l'utilisation d'outils IA",

    description:
      "Bibliothèque de prompts, règles de contexte et templates versionnés pour structurer des workflows assistés par IA autour de la recherche, des projets, des compétences et de la gestion de connaissances.",

    technologies: [
      "Prompt Engineering",
      "Context Engineering",
      "Knowledge Management",
      "Structured Workflows",
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

    subtitle: "Prototype de recherche sémantique dans du code",

    description:
      "Prototype expérimental combinant segmentation de code basée sur l'AST, embeddings et indexation FAISS pour explorer la recherche sémantique dans des bases de code.",

    technologies: [
      "Python",
      "AST",
      "Embeddings",
      "FAISS",
      "Semantic Search",
    ],

    github: "https://github.com/Driw0x/CodeAgent",

    status: "En pause",
  },
];