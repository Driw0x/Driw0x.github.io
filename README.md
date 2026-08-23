# Victor Ye - Portfolio

Portfolio personnel développé avec **React**, **Vite**, **TypeScript** et **Tailwind CSS**.

Il présente mon parcours, mes compétences, mes projets ainsi que mes informations de contact dans le cadre de ma recherche d'un stage de fin d'études en Intelligence Artificielle.

---

## Aperçu

Le portfolio est composé de plusieurs sections :

- Hero
- Profil
- Compétences
- Projets
- Parcours
- Contact

---

## Technologies utilisées

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

---

## Installation

Cloner le dépôt :

```bash
git clone https://github.com/Driw0x/victorye.github.io.git
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

---

## Structure du projet

```
src
├── components
│   ├── common
│   ├── layout
│   └── sections
│
├── data
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── timeline.ts
│
├── hooks
│
├── types
│
├── App.tsx
├── main.tsx
└── index.css
```

---

## Personnalisation

Les informations du portfolio sont regroupées dans le dossier :

```
src/data
```

### Profil

```
src/data/profile.ts
```

Permet de modifier :

- Nom
- Formation
- Description
- Email
- GitHub
- LinkedIn

---

### Compétences

```
src/data/skills.ts
```

Modifier les technologies affichées dans la section **Compétences**.

---

### Projets

```
src/data/projects.ts
```

Ajouter ou modifier :

- titre
- description
- technologies
- statut
- lien GitHub

---

### Parcours

```
src/data/timeline.ts
```

Modifier les études, projets et expériences affichés dans la timeline.

---

## Déploiement

Le portfolio est automatiquement déployé sur **GitHub Pages** grâce à **GitHub Actions**.

Workflow :

```
.github/workflows/deploy.yml
```

Pour un dépôt GitHub Pages nommé :

```
username.github.io
```

aucune configuration supplémentaire n'est nécessaire.

Pour un dépôt portant un autre nom, il faut ajouter dans :

```
vite.config.ts
```

```ts
base: "/nom-du-depot/",
```

---

## Contact

- LinkedIn : https://www.linkedin.com/in/victor-ye-7703b1327
- GitHub : https://github.com/Driw0x
- Email : victorye@outlook.fr

---

© 2026 Victor Ye