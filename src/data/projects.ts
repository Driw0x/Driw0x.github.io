import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "TaskFleet",

    subtitle: "Systèmes multi-agents et affectation sous contraintes",

    description:
      "Simulateur déterministe d'entrepôt comparant allocation FIFO, affectation instantanée avec OR-Tools CP-SAT et coordination locale Contract Net Protocol. La V1 terminée intègre capacités, stations partagées, perturbations et rejeu interactif. Un benchmark reproductible couvre 87 instances distinctes et compare durée, retards, distances et échanges entre agents.",

    technologies: [
      "Python",
      "OR-Tools CP-SAT",
      "Contract Net Protocol",
      "FastAPI",
      "Vue 3",
      "TypeScript",
    ],

    github: "https://github.com/Driw0x/TaskFleet",

    status: "Terminé",

    featured: true,
  },

  {
    title: "AI Job Application Workbench",

    subtitle: "Application locale de candidature assistée par IA",

    description:
      "Application locale pour rechercher et analyser des offres, préparer des CV et lettres à partir des faits documentés d'une base de connaissances externe, puis suivre les candidatures. Plusieurs providers LLM s'intègrent à un workflow avec génération structurée, suivi des documents et validation humaine avant toute soumission.",

    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "SQLite",
      "LLM APIs",
    ],

    github: "https://github.com/Driw0x/ai-job-application-workbench",

    status: "Terminé",

    featured: false,
  },

  {
    title: "CodeAgent",

    subtitle: "Agent LLM local avec RAG, MCP et mémoire",

    description:
      "Agent d'analyse de code Python fondé sur un LLM local, avec recherche hybride, reranking et RAG sourcé. Sa boucle agentique utilise des outils via MCP et vérifie les citations et le grounding. Une mémoire persistante, la compaction extractive et un budget de contexte assurent la continuité des sessions. Des benchmarks internes évaluent recherche et utilisation d'outils ; des tests dédiés vérifient mémoire et contexte.",

    technologies: [
      "Python",
      "AST",
      "FAISS",
      "RAG",
      "Ollama",
      "MCP",
      "Tool Use",
    ],

    github: "https://github.com/Driw0x/CodeAgent",

    status: "Prototype fonctionnel",

    featured: true,
  },

  {
    title: "CS2Guard",

    subtitle: "ML expérimental pour l'analyse de comportements suspects",
    
    description:
      "Analyseur offline de démos CS2 combinant parsing, feature engineering, détection d'anomalies et classification supervisée évaluée par match. Un pipeline en ligne de commande applique le modèle entraîné et génère des classements, des rapports JSON/Markdown, des visualisations et des contributions du Random Forest. Le milestone M6 comprend l'inférence, le reporting et une étude externe sur des joueurs présumés légitimes.",

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
      "Adaptation et entraînement local d'un petit modèle de langage Transformer decoder-only sous Windows sur GPU AMD avec PyTorch ROCm. Un préentraînement Dense court produit un checkpoint réutilisable et une génération cohérente. Le travail associe diagnostic numérique, mixed precision, sauvegarde et rechargement de checkpoints, benchmarks GPU et comparaisons historiques sous DirectML.",

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
      "Agent autonome pour un environnement agricole simulé sur Kaggle, conçu pour maximiser l'argent final. Le planner final CHI14 alloue tâches, travailleurs et ressources sous contraintes temporelles et économiques, avec planification heuristique à horizon fini et replanification. Le projet associe tests du planner et évaluations locales des stratégies.",

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
      "Collection structurée de workflows réutilisables pour assistants IA, avec gestion du contexte, contraintes explicites, provenance des affirmations et sorties vérifiables. Elle couvre la préparation de candidatures fondée sur les preuves et la généralisation de repositories avec préservation du contexte privé local. Un cadre d'évaluation manuelle s'appuie sur quatre walkthroughs qualitatifs.",

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
];
