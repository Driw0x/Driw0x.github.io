# Victor Ye — Portfolio

Portfolio personnel développé avec **React**, **Vite**, **TypeScript** et **Tailwind CSS**.

Il présente mon parcours, mes compétences et mes projets autour de l'**Intelligence Artificielle** et du **développement logiciel**, dans le cadre de ma recherche d'un stage de fin d'études.

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

* Intelligence Artificielle
* Machine Learning
* LLM
* RAG
* Recherche sémantique
* Computer Vision
* Développement logiciel
* Outils pour développeurs

## Contact

**Victor Ye**

* GitHub : `Driw0x`
* LinkedIn : `victor-ye-7703b1327`
* Email : `victorye@outlook.fr`
