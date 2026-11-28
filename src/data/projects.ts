import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "TaskFleet",

    subtitle: "Systèmes multi-agents, optimisation et planification",

    description:
      "Simulateur d'entrepôt multi-agents pour comparer des stratégies de coordination et d'optimisation logistique. Il combine allocation de tâches, ordonnancement sous contraintes, coordination distribuée simulée et planification de trajectoires, avec une interface de visualisation des résultats.",

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

    documentation: { fr: "main/README.fr.md", "zh-CN": "main/README.zh-CN.md" },

    status: "Terminé",

    featured: true,
  },

  {
    title: "OR-Agent",

    subtitle: "Formulation GAP, CP-SAT et contrôle humain",

    description:
      "Assistant local pour formuler et résoudre des problèmes d'affectation sous contraintes de capacité. Il transforme des demandes en modèles structurés, utilise CP-SAT, vérifie indépendamment les solutions et conserve une revue humaine avant validation.",

    technologies: [
      "Python",
      "Pydantic",
      "OR-Tools CP-SAT",
      "Ollama",
      "Human-in-the-Loop",
      "HTML / JavaScript",
    ],

    github: "https://github.com/Driw0x/OR-Agent-hitl",

    documentation: { fr: "main/README.fr.md", "zh-CN": "main/README.zh-CN.md" },

    status: "Terminé",

    featured: false,
  },

  {
    title: "AI Job Application Workbench",

    subtitle: "Application locale de candidature assistée par IA",

    description:
      "Application locale pour rechercher des offres et préparer des CV ATS et lettres de motivation à partir de faits documentés. Elle contrôle les preuves utilisées, conserve la validation humaine et se déploie avec Docker sur poste local ou NAS.",

    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "SQLite",
      "LLM APIs",
      "Docker",
    ],

    github: "https://github.com/Driw0x/ai-job-application-workbench",

    documentation: { fr: "main/README.fr.md", "zh-CN": "main/README.zh-CN.md" },

    status: "Terminé",

    featured: false,
  },

  {
    title: "CodeAgent",

    subtitle: "Agent LLM local avec RAG fiable, MCP et reprise humaine",

    description:
      "Assistant local d'analyse de code Python combinant RAG sourcé, mémoire persistante, outils MCP et orchestration LangGraph. Le socle M1–M10 est livré ; le projet est en pause car la piste d'entraînement GRPO reste bloquée sans solution identifiée.",

    technologies: [
      "Python",
      "AST",
      "FAISS",
      "RAG",
      "Ollama",
      "MCP",
      "Tool Use",
      "Human-in-the-Loop",
      "LangGraph",
    ],

    github: "https://github.com/Driw0x/CodeAgent",

    documentation: { fr: "main/README.fr.md", "zh-CN": "main/README.zh-CN.md" },

    status: "En pause",

    featured: true,
  },

  {
    title: "CS2Guard",

    subtitle: "ML expérimental pour l'analyse de comportements suspects",
    
    description:
      "Outil expérimental d'analyse hors ligne de parties Counter-Strike 2. Il combine télémétrie, cinématique d'aim, signaux d'awareness et modèles temporels pour étudier les comportements suspects, sans constituer un système anti-triche opérationnel.",

    technologies: [
      "Python",
      "Scikit-learn",
      "Supervised Learning",
      "Feature Engineering",
      "Anomaly Detection",
      "PyTorch",
      "ROCm",
    ],

    github: "https://github.com/Driw0x/CS2Guard",

    documentation: { fr: "main/README.fr.md", "zh-CN": "main/README.zh-CN.md" },

    status: "En développement",

    featured: false,
  },

  {
    title: "CS2xMBTI",

    subtitle: "Profils déclaratifs et composition d'équipe CS2",

    description:
      "Application web en développement pour explorer des préférences déclarées, des rôles T/CT et une équipe de cinq joueurs. Questionnaire versionné et équilibré, raffinement et confirmation du profil avant publication ; aucun diagnostic ni résultat de performance en jeu validé.",

    technologies: ["Node.js", "SQLite", "JavaScript"],

    websitePending: true,

    status: "En développement",
  },

  {
    title: "CS2-ILY",

    subtitle: "Scénarios tactiques et vote d'équipe pour CS2",

    description:
      "Plugin CounterStrikeSharp en C# pour une manche Inferno 3v3 : économies par équipe, choix tactiques pendant la warmup, rôles individuels et HUD. Le fonctionnement en partie reste à vérifier.",

    technologies: ["C#", ".NET 10", "CounterStrikeSharp", "JSON"],

    github: "https://github.com/Driw0x/CS2-ILY",

    documentation: { fr: "main/README.md", "zh-CN": "main/README.md" },

    status: "En développement",
  },

  {
    title: "MiniMind AMD / ROCm",

    subtitle: "Entraînement local Dense et MoE sur GPU AMD",

    description:
      "Adaptation et entraînement local d'un petit modèle de langage sous Windows sur GPU AMD avec PyTorch ROCm. Le projet compare variantes Dense et Mixture of Experts et évalue une distillation MoE vers Dense sur des références locales, sans gain général démontré.",

    technologies: [
      "Python",
      "PyTorch",
      "Transformers",
      "ROCm",
      "GPU Training",
      "Mixture of Experts",
      "Knowledge Distillation",
    ],

    github: "https://github.com/Driw0x/minimind",

    documentation: { fr: "master/README.fr.md", "zh-CN": "master/README.zh-CN.md" },

    huggingFace: "https://huggingface.co/Driw0x/minimind-rocm-pytorch",

    status: "En développement",

    featured: false,

  },

  {
    title: "Kaggriculture",

    subtitle: "Planification heuristique et décision sous contraintes",

    description:
      "Agent autonome pour un environnement agricole simulé. Il combine planification heuristique, allocation de ressources, déplacements et décisions économiques afin d'adapter sa stratégie aux contraintes temporelles, à la production disponible et aux évolutions du marché.",

    technologies: [
      "Python",
      "Heuristic Planning",
      "Decision Making",
      "Pathfinding",
      "Resource Management",
    ],

    github: "https://github.com/Driw0x/Kaggriculture",

    documentation: { fr: "master/README.fr.md", "zh-CN": "master/README.zh-CN.md" },

    status: "Terminé",

    featured: true,
  },
  
  {
    title: "AI Knowledge Workflows",

    subtitle: "Workflows réutilisables pour assistants IA",

    description:
      "Collection de workflows réutilisables pour la gestion des connaissances, la documentation de projets et la préparation de candidatures. Elle structure contexte, preuves, contraintes et revue humaine afin de produire des résultats vérifiables sans publier les données personnelles.",

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

    documentation: { fr: "main/README.fr.md", "zh-CN": "main/README.zh-CN.md" },

    status: "Terminé",

    featured: false,
  },
  
  {
    title: "France Tech Arena 2025 — Future Network",

    subtitle: "Optimisation heuristique de ressources réseau",

    description:
      "Projet d'allocation de ressources réseau et d'ordonnancement de trafic sous contraintes de capacité. Deux approches heuristiques priorisent les flux, sélectionnent les liaisons et répartissent le trafic selon l'évolution temporelle des ressources disponibles.",

    technologies: [
      "Python",
      "Heuristics",
      "Resource Allocation",
      "Constraint-based Decision Making",
      "Networking",
    ],

    github:
      "https://github.com/Driw0x/france-tech-arena-2025-future-network",

    documentation: { fr: "main/README.fr.md", "zh-CN": "main/README.zh-CN.md" },

    status: "Terminé",
  },

  {
    title: "Genshin Achievement Scanner",

    subtitle: "Scanner semi-automatique de succès Genshin Impact",

    description:
      "Outil semi-automatique pour extraire les succès Genshin Impact depuis des captures d'écran. Il combine prétraitement d'images, reconnaissance de texte et rapprochement approximatif avec une base de succès, puis produit des exports JSON compatibles avec Paimon.moe.",

    technologies: [
      "Python",
      "EasyOCR",
      "OpenCV",
      "RapidFuzz",
      "PyAutoGUI",
    ],

    github: "https://github.com/Driw0x/Genshin_Achievements_Scanner",

    documentation: { fr: "main/README.fr.md", "zh-CN": "main/README.zh-CN.md" },

    status: "Terminé",
  },

  {
    title: "Projet AI2D",

    subtitle: "Analyse de trajectoires de code étudiant",

    description:
      "Projet académique consacré à l'analyse de programmes Python successifs d'étudiants. Il combine arbres syntaxiques, distances d'édition, règles heuristiques et visualisations statistiques afin d'étudier les modifications du code et les trajectoires vers les solutions attendues.",

    technologies: [
      "Python",
      "AST",
      "ZSS",
      "Classification",
      "Data Analysis",
    ],

    github: "https://github.com/Driw0x/Projet-AI2D",

    documentation: { fr: "main/README.md", "zh-CN": "main/README.md" },

    status: "Terminé",
  },
];
