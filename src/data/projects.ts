import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "TaskFleet",

    subtitle: "Simulation multi-agent et allocation de tâches",

    description:
      "Simulateur déterministe d'entrepôt comparant allocation FIFO, affectation avec OR-Tools CP-SAT et négociation Contract Net Protocol. La V1 terminée intègre capacités, stations partagées, perturbations et rejeu interactif. Un benchmark reproductible couvre 87 instances distinctes et conserve les simulations incomplètes. CP-SAT optimise l'affectation courante ; CNP reste une coordination locale synchrone, sans réseau réel ni collisions physiques.",

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

    featured: false,
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

    subtitle: "Système LLM local avec RAG, grounding et tool use",

    description:
      "Assistant local d'analyse de code Python combinant retrieval hybride, reranking, RAG sourcé et tools read-only via MCP. Une mémoire conversationnelle persistante ajoute compaction extractive, reprise par projet et session et budget de contexte. Les benchmarks distinguent composants, fixtures mémoire et générations réelles, dont les finales autonomes restent peu fiables. Le prototype ne démontre ni autonomie générale, ni planification multi-étapes, ni système de production.",

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
      "Analyseur offline de démos CS2 combinant parsing, feature engineering, détection d'anomalies et classification supervisée évaluée par match. Une commande applique le modèle figé et produit classements, rapports JSON/Markdown, visualisations et contributions du Random Forest. M6 est techniquement terminé ; l'étude externe porte sur des joueurs présumés légitimes. Scores non calibrés, détection externe de tricheurs non validée et aucun seuil opérationnel ; le server-side reste planifié.",

    technologies: [
      "Python",
      "Scikit-learn",
      "Supervised Learning",
      "Feature Engineering",
      "Anomaly Detection",
    ],

    github: "https://github.com/Driw0x/CS2Guard",

    status: "En développement",

    featured: true,
  },

  {
    title: "MiniMind AMD / ROCm",

    subtitle: "Entraînement local d'un Transformer decoder-only",

    description:
      "Adaptation et entraînement local d'un petit modèle de langage Transformer decoder-only sous Windows sur GPU AMD. Après comparaison de checkpoints, DirectML a été archivé à cause d'une validation qualité négative ; le développement actif cible PyTorch ROCm. Un préentraînement Dense court et une génération cohérente sont documentés, tandis que le run complet et le SFT restent planifiés.",

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

    subtitle: "Agent heuristique de décision sous contraintes",

    description:
      "Agent autonome terminé pour la compétition Kaggriculture sur Kaggle. Sa version finale CHI14 applique un planning heuristique sous horizon fini pour allouer ressources, travailleurs et actions sous contraintes temporelles et économiques. L'évaluation locale est reproductible dans les limites documentées ; aucun résultat de leaderboard n'est revendiqué.",

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
      "Collection structurée et évaluée de workflows réutilisables pour assistants IA, avec gestion du contexte, contraintes explicites, provenance des affirmations et sorties vérifiables. Elle couvre notamment la préparation de candidatures fondée sur les preuves et la généralisation privacy-aware de repositories, tout en gardant le contexte privé local. L'évaluation repose sur quatre walkthroughs qualitatifs manuels, sans benchmark automatisé.",

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
