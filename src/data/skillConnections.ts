export interface Certification {
  id: string;
  title: string;
  label: string;
  issuer: string;
  kind: string;
  description: string;
  url: string;
  skillIds: string[];
  issuedOn?: string;
  expiresOn?: string;
}

// Issuer links and LinkedIn capture supplied by the owner on 2026-10-26.
// Month-only dates preserve the precision of the capture. Oracle confirms the exact dates.
export const certifications: Certification[] = [
  {
    id: "google-adk",
    title: "Engineer AI Agents with Agent Development Kit (ADK)",
    label: "Agents avec Google ADK",
    issuer: "Google Cloud",
    kind: "Badge de compétences",
    description: "Badge consacré à l'ingénierie d'agents avec Google Agent Development Kit (ADK).",
    url: "https://www.credly.com/badges/1bc19421-7c99-4276-8778-61ffda4fc2a2/public_url",
    skillIds: ["agents"],
    issuedOn: "2026-10",
  },
  {
    id: "oracle-agentic-ai",
    title: "Agentic AI Certified Foundations Associate",
    label: "Fondamentaux de l'IA agentique",
    issuer: "Oracle",
    kind: "Certification",
    description: "Certification de niveau fondamental sur les agents IA, l'utilisation d'outils et le protocole MCP.",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=2D5329E558625A9EA85E26081E1428DEDC1976280C732D1B9093C80D8140D548",
    skillIds: ["agents"],
    issuedOn: "2026-10-26",
    expiresOn: "2028-10-26",
  },
  {
    id: "microsoft-mcp",
    title: "Microsoft Applied Skills: Integrate Model Context Protocol tools with agents in Microsoft Foundry",
    label: "MCP & agents dans Foundry",
    issuer: "Microsoft",
    kind: "Évaluation pratique",
    description: "Évaluation pratique : connecter un agent à un serveur MCP et suivre l'utilisation des outils dans Microsoft Foundry.",
    url: "https://learn.microsoft.com/fr-fr/users/victorye-3151/credentials/50a19ce04736009c",
    skillIds: ["agents"],
    issuedOn: "2026-10",
  },
  {
    id: "microsoft-tools",
    title: "Microsoft Applied Skills: Develop an agent with integrated tools",
    label: "Agents & outils intégrés",
    issuer: "Microsoft",
    kind: "Évaluation pratique",
    description: "Évaluation pratique : créer un agent avec le SDK Microsoft Foundry et intégrer des outils natifs et personnalisés.",
    url: "https://learn.microsoft.com/fr-fr/users/victorye-3151/credentials/153159a7a72345ea",
    skillIds: ["agents"],
    issuedOn: "2026-10",
  },
  {
    id: "microsoft-agents",
    title: "Microsoft Applied Skills: Get started developing agents in Microsoft Foundry",
    label: "Premiers agents dans Foundry",
    issuer: "Microsoft",
    kind: "Évaluation pratique",
    description: "Évaluation pratique : déployer un modèle, créer un agent et le tester dans Microsoft Foundry.",
    url: "https://learn.microsoft.com/fr-fr/users/victorye-3151/credentials/7257c57a159a21a2",
    skillIds: ["agents"],
    issuedOn: "2026-10",
  },
  {
    id: "hf-agents",
    title: "Fundamentals of Agents — Unit 1",
    label: "Fondamentaux des agents",
    issuer: "Hugging Face",
    kind: "Attestation de cours",
    description: "Attestation de l'Unit 1 du cours Agents : fondamentaux des agents et de leur boucle d'action.",
    url: "https://github.com/Driw0x/hf-ai-courses/blob/f7f4c1ba1c515f487eb74ae73f4c11b796f2bc95/agents-course/unit-1-fundamentals/certificate.webp",
    skillIds: ["agents"],
  },
  {
    id: "hf-llm",
    title: "1. Fundamentals of LLMs",
    label: "Fondamentaux des LLM",
    issuer: "Hugging Face",
    kind: "Attestation de cours",
    description: "Attestation du chapitre 1 du LLM Course : fondamentaux des LLM et architectures Transformer.",
    url: "https://github.com/Driw0x/hf-ai-courses/blob/f7f4c1ba1c515f487eb74ae73f4c11b796f2bc95/llm-course/1-transformer-models/image.webp",
    skillIds: ["training"],
  },
];

// Curated from the Knowledge Base. These links concern parts of each skill domain.
// In particular, heuristic planning is not evidence of LLM tool use or exact optimisation.
export const projectSkillIds: Record<string, string[]> = {
  TaskFleet: ["optimization", "multi-agent"],
  "OR-Agent": ["optimization", "agents"],
  "AI Job Application Workbench": ["agents"],
  CodeAgent: ["agents"],
  CS2Guard: ["data", "ml"],
  "MiniMind AMD / ROCm": ["training"],
  Kaggriculture: ["optimization"],
  "AI Knowledge Workflows": ["agents"],
  "France Tech Arena 2025 — Future Network": ["optimization"],
  "Genshin Achievement Scanner": ["data"],
  "Projet AI2D": ["data"],
};
