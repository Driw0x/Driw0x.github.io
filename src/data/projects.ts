import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "CS2Guard",

    subtitle: "Pipeline d'analyse de données pour l'anti-cheat CS2",
    
    description:
      "Pipeline offline d'analyse de démos CS2 combinant parsing, feature engineering, détection d'anomalies et classification supervisée. Les modèles sont évalués avec séparation des matchs, validation croisée groupée, tuning et comparaison multi-métriques. Le projet reste expérimental : aucun seuil opérationnel n'est retenu et l'analyse complète d'une démo ainsi que le server-side restent à développer.",

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

    subtitle: "Migration Windows / ROCm de MiniMind",

    description:
      "Adaptation de MiniMind à Windows et aux GPU AMD. Après comparaison de checkpoints, DirectML a été archivé comme backend d'entraînement en raison d'une validation qualité négative ; le développement actif cible PyTorch ROCm. Un préentraînement Dense court et une génération cohérente sont documentés, tandis que le run Dense complet, le SFT et le pipeline complet restent planifiés.",

    technologies: [
      "Python",
      "PyTorch",
      "ROCm",
      "BF16",
      "GPU Training",
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
    title: "CodeAgent",

    subtitle: "Pipeline RAG local sourcé pour l'analyse de code",

    description:
      "Assistant local d'analyse de code Python : segmentation AST, retrieval FAISS avec reranking lexical, puis génération sourcée via Ollama et Qwen2.5-Coder 14B, retenu après comparaison de sept LLM locaux. M4 ajoute un index persistant, sa mise à jour incrémentale et un historique. Un benchmark de 25 questions mesure le retrieval ; les réponses RAG, le grounding et les citations restent sans évaluation de bout en bout.",

    technologies: [
      "Python",
      "AST",
      "FAISS",
      "RAG",
      "Ollama",
    ],

    github: "https://github.com/Driw0x/CodeAgent",

    status: "Prototype fonctionnel",
  },
  
  {
    title: "AI Knowledge Workflows",

    subtitle: "Workflows structurés pour l'utilisation d'outils IA",

    description:
      "Bibliothèque de prompts, règles de contexte et templates versionnés pour structurer des workflows assistés par IA. Le projet formalise la provenance des affirmations et un framework manuel d'évaluation des sorties, sans benchmark automatisé.",

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
];
