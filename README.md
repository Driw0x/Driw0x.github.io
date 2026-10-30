# Victor Ye — Portfolio

Portfolio personnel développé avec **React**, **Vite**, **TypeScript** et **Tailwind CSS**.

Il présente mon parcours, mes compétences et mes projets autour de l'**intelligence artificielle appliquée**, dans le cadre de ma recherche d'un stage de fin d'études.

## Aperçu

Le portfolio est organisé autour d'une page principale présentant :

* Présentation
* Profil
* Compétences
* Projets mis en avant
* Parcours académique
* Langues et centres d'intérêt
* Contact

Une page **Projets** dédiée permet également de consulter l'ensemble de mes projets sans surcharger la page principale.

La section **Compétences** de l'accueil (`#skills`) affiche les six domaines, avec le nombre de projets et de certificats associés à chaque carte. L'indication « Développer » et un chevron signalent que toute la carte est cliquable. Au clic, la carte s'agrandit vers un panneau centré pendant que les autres s'effacent. L'agrandissement dure 250 ms ; le contenu est affiché immédiatement, sans fondu différé ni chargement réseau. Le titre et la catégorie accompagnent la transition. La page garde sa position, même depuis la deuxième ligne ; le panneau défile intérieurement si nécessaire. Le bouton « Toutes les compétences » ou la touche Échap referme le panneau. Les préférences de réduction des animations sont respectées. Les projets de mise en pratique et les formations ou évaluations restent distincts ; leurs descriptions, dates et liens vers les dépôts, documentations et justificatifs se déplient individuellement. L'ensemble reste dans la page d'accueil, sur ordinateur et mobile. Les descriptions des compétences sont harmonisées autour de 300 caractères et ne citent pas de projets.

Les associations sont centralisées dans `src/data/skillConnections.ts`. Elles réutilisent les six domaines et les projets existants sans modifier leur niveau de maîtrise. Les dix-neuf justificatifs et leurs périmètres sont documentés dans le registre « Certifications » de la Knowledge Base. Les pages individuelles vérifiées confirment le 26 octobre 2026 pour les deux badges Google et Oracle, le 25 octobre 2026 pour trois Microsoft Applied Skills et le 27 octobre 2026 pour Develop a Generative AI Chat App Using the Microsoft Foundry SDK. Ce quatrième titre Microsoft évalue la préparation et le déploiement d'un modèle, le chat via SDK et l'historique conversationnel en laboratoire ; il est relié au domaine Systèmes LLM, sans preuve d'agent autonome ou de RAG. Un cinquième Applied Skills Microsoft, Resolve GitHub issues by using GitHub Copilot, obtenu le 27 octobre 2026, complète ce domaine par l'investigation avec Ask, les corrections avec le mode Agent, le build/tests et le cycle issue–pull request–clôture dans un laboratoire évalué. Un sixième, Enhance agents with autonomous capabilities, obtenu le 28 octobre 2026, évalue la configuration d'agents Copilot Studio avec connaissances, flows comme outils, déclencheurs, gestion des erreurs et interaction humaine ; il rejoint le domaine Systèmes LLM sans augmenter son niveau de maîtrise. Les attestations Hugging Face restent sans date documentée. Les évaluations pratiques, badges, certification et attestations de cours sont distingués. Deploy Multi-Agent Architectures est relié aux domaines agentique et multi-agents : ADK, A2A, MCP et déploiement Agent Engine dans un laboratoire évalué. Orchestrate Multi-agent Workflows with Gemini Enterprise, obtenu le 29 octobre 2026, rejoint ces deux domaines avec une évaluation appliquée d'assistants Gemini Enterprise : sources multiples, contenus multimédias et actions entre systèmes, sans nouvelle implémentation ADK/A2A attribuée. Engineer Data for Predictive Modeling with BigQuery ML Skill Badge, obtenu le 29 octobre 2026, est relié aux domaines données et ML appliqué : transformations, ETL vers BigQuery, modèles BigQuery ML et copies avec Cloud Composer dans un challenge lab évalué. Build a Data Warehouse with BigQuery Skill Badge, obtenu le 29 octobre 2026, est relié au domaine données : jointures, unions, partitions par date et données JSON/imbriquées dans un challenge lab évalué, sans compétence ML supplémentaire attribuée. Google Cloud Data Analytics Certificate, obtenu le 29 octobre 2026 et valable jusqu'au 29 octobre 2029, complète le domaine données par un certificat de formation fondamental de cinq cours ; son type reste distinct des badges pratiques et certifications professionnelles. Prepare Data for ML APIs on Google Cloud Skill Badge, obtenu le 30 octobre 2026, est relié aux domaines données et ML appliqué : jobs Dataflow/Spark et appels Speech-to-Text/Natural Language dans un challenge introductif, avec modèles préentraînés. Implement Load Balancing on Compute Engine Skill Badge, dont la date d'obtention n'est pas documentée, s'affiche comme certificat complémentaire : commandes gcloud, VM Compute Engine, applications conteneurisées sur GKE et équilibreurs réseau/HTTP dans un challenge lab, sans revendiquer une infrastructure de production ni une maîtrise générale de Kubernetes. Les liens vers un domaine portent sur une partie de son contenu, sans attribuer l'ensemble du domaine au certificat.

Le sélecteur **FR / 中文**, disponible sur toutes les pages et sur mobile, permet de passer du français au chinois simplifié. Le français est affiché par défaut ; le choix est mémorisé lorsque le stockage du navigateur est disponible. Les liens du CV suivent la langue sélectionnée : `public/cv/Victor_Ye_CV.pdf` en français, `public/cv/Victor_Ye_CV_zh-CN.pdf` en chinois simplifié.

Les textes français restent dans les données et composants existants. Les traductions sont centralisées dans `src/data/zh-CN.ts`, avec le texte français comme clé ; toute modification d'un texte source doit aussi mettre à jour sa traduction. Les deux versions conservent les mêmes projets, statuts et limites documentées dans la Knowledge Base.

Vérifier la couverture des traductions : `node --test tests/localization.test.mjs`.

Chaque carte de projet propose un lien **Documentation** vers le README français ou chinois simplifié du dépôt, selon la langue sélectionnée. Pour Projet AI2D, exclu de la traduction, le README français est proposé dans les deux langues. Les chemins et branches sont définis dans `src/data/projects.ts`. Dans les 10 autres dépôts de projets, l'anglais est la langue par défaut de la documentation : `README.md` en anglais, `README.fr.md` en français et `README.zh-CN.md` en chinois simplifié. Les README et documents techniques proposent des liens réciproques entre les trois langues.

## Technologies utilisées

* React
* TypeScript
* Vite
* Tailwind CSS
* Framer Motion
* React Icons

## Installation

Cloner le dépôt :

```bash
git clone https://github.com/Driw0x/Driw0x.github.io.git
```

Accéder au projet :

```bash
cd Driw0x.github.io
```

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

Créer la version de production :

```bash
npm run build
```

Prévisualiser la version de production :

```bash
npm run preview
```

## Structure du projet

```text
Driw0x.github.io/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   └── projects/
│
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   └── sections/
│   │
│   ├── data/
│   │
│   ├── hooks/
│   │
│   ├── pages/
│   │
│   ├── types/
│   │
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Architecture

### `components/common`

Contient les composants réutilisables du portfolio, comme les boutons, cartes, conteneurs et titres de sections.

### `components/layout`

Contient les composants liés à la structure générale du site, notamment la barre de navigation, le footer et l'arrière-plan.

### `components/sections`

Contient les différentes sections affichées sur la page principale du portfolio.

### `data`

Centralise les données utilisées par le site afin de séparer le contenu de l'interface.

On y retrouve notamment les informations concernant :

* le profil ;
* les compétences ;
* les projets ;
* le parcours académique ;
* les informations personnelles affichées sur le portfolio.

### `pages`

Contient les pages supplémentaires du portfolio.

La page dédiée aux projets permet d'afficher l'ensemble des projets tandis que la page d'accueil n'en présente qu'une sélection.

### `public/projects`

Contient les ressources statiques associées aux différents projets présentés sur le portfolio.

## Projets

Les informations concernant les projets sont centralisées dans :

```text
src/data/projects.ts
```

Chaque projet peut notamment contenir :

* un titre ;
* un sous-titre ;
* une description ;
* les technologies utilisées ;
* un statut ;
* un lien GitHub ;
* des informations permettant de déterminer sa mise en avant sur le portfolio.

La page d'accueil affiche uniquement une sélection de projets afin de conserver une interface concise.

La page **Projets** permet de consulter l'ensemble des projets disponibles.

## Déploiement

Le portfolio est automatiquement déployé sur **GitHub Pages** grâce à **GitHub Actions**.

Le workflow de déploiement se trouve dans :

```text
.github/workflows/deploy.yml
```

Chaque mise à jour de la branche principale peut déclencher la construction et le déploiement du portfolio.

Le dépôt étant nommé :

```text
Driw0x.github.io
```

le portfolio est accessible à l'adresse :

```text
https://driw0x.github.io/
```

## Objectif

Ce portfolio a pour objectif de présenter mes compétences et mes projets dans plusieurs domaines :

* Agentic AI et systèmes autonomes bornés
* Recherche opérationnelle, planification, optimisation et décision
* Modélisation et simulation multi-agent, avec coordination CNP dans TaskFleet et fondements académiques complémentaires
* Machine Learning appliqué
* LLM, RAG et tool use
* Données pour l'IA
* Systèmes ML et ingénierie logicielle pour l'IA

## Contact

**Victor Ye**

* GitHub : `Driw0x`
* LinkedIn : `https://www.linkedin.com/in/victor-ye-ai/`
* Email : `victorye@outlook.fr`
