# **Spécification Technique et Sémantique pour le Développement IA d'une Plateforme de Plomberie à Rambouillet (78) : Stratégie GEO et Architecture Avancée**

## **1. Introduction et Analyse Stratégique du Marché Local**

### **1.1 La Nouvelle Ère du Référencement : De le SEO au GEO**

La création d'un site web pour une entreprise de plomberie locale en 2026 ne peut plus se limiter aux pratiques traditionnelles du SEO (Search Engine Optimization). Nous assistons à un changement de paradigme majeur vers le GEO (*Generative Engine Optimization*). Cette transition est motivée par l'adoption massive des moteurs de recherche basés sur l'intelligence artificielle (IA), tels que Google SGE (Search Generative Experience), ChatGPT Search, Perplexity et Bing Copilot. Ces systèmes ne se contentent pas d'indexer des pages ; ils ingèrent, synthétisent et restituent des réponses directes aux utilisateurs.

Pour un plombier à Rambouillet, cela signifie que le site ne doit pas seulement contenir des mots-clés comme "fuite d'eau 78", mais doit être structuré comme une base de connaissances sémantique capable de prouver son autorité technique et locale à une IA. L'objectif est de transformer le site en une entité de référence que les modèles de langage (LLM) peuvent citer avec confiance. Les stratégies GEO privilégient la structure des données, l'autorité de l'entité et la clarté contextuelle, permettant aux marques d'apparaître dans les résumés générés par l'IA qui occupent désormais une place prépondérante sur les écrans mobiles.

### **1.2 Analyse du Marché Rambolitain (78120) et Contraintes Spécifiques**

L'élaboration de cette spécification repose sur une analyse approfondie des spécificités géographiques, hydrologiques et urbanistiques de Rambouillet. Ces facteurs sont déterminants pour instruire l'IA de codage afin qu'elle produise un contenu hyper-pertinent et non générique.

#### **1.2.1 La Dureté de l'Eau : Un Enjeu Technique Majeur**

L'analyse de la qualité de l'eau à Rambouillet révèle une caractéristique critique pour l'activité de plomberie : la dureté de l'eau. Les relevés indiquent un Titre Hydrotimétrique (TH) oscillant entre **23°f et 26°f**, classant l'eau comme "moyennement dure" à "calcaire". La concentration en calcium avoisine les 97 mg/L.

Cette donnée n'est pas anecdotique ; elle dicte une partie de l'architecture du site. L'IA doit prioriser la création de "silos sémantiques" dédiés au **traitement de l'eau**, à l'installation d'adoucisseurs et au détartrage de chauffe-eaux. Contrairement à une région à eau douce, à Rambouillet, le calcaire est une douleur client majeure, réduisant la durée de vie des appareils électroménagers et des chaudières. Le site doit se positionner comme l'expert technique de cette problématique locale spécifique.

#### **1.2.2 Urbanisme et Patrimoine : Le Facteur de Confiance**

Le centre-ville de Rambouillet est classé comme **Site Patrimonial Remarquable (SPR)**. Cela implique que toute modification extérieure (sortie de ventouse de chaudière, modification de tuyauterie en façade, installation de pompe à chaleur visible) est soumise à l'avis conforme des Architectes des Bâtiments de France (ABF).

Pour maximiser le taux de conversion, le contenu généré doit explicitement mentionner la maîtrise de ces réglementations. Un propriétaire résidant rue du Général de Gaulle ou proche du Château de Rambouillet ne confiera pas ses travaux à un artisan qui ignore ces contraintes. L'intégration de ces détails dans les "System Prompts" de l'IA est indispensable pour générer un contenu qui respire l'expertise locale (E-E-A-T).

### **1.3 Architecture de Développement par IA : Le Concept de "Vibe Coding"**

Ce rapport définit une méthodologie de développement basée sur des agents d'IA. Plutôt que d'écrire le code manuellement, nous utiliserons **Claude Code**, l'outil de codage agentique d'Anthropic. Claude Code est un outil en ligne de commande qui permet de déléguer des tâches de développement directement depuis le terminal. Il excelle dans la création de projets complets, la génération de code Astro/React/Tailwind, et l'exécution de commandes système. Cette approche, parfois qualifiée de "Vibe Coding" ou de développement assisté par IA, permet une vélocité extrême et une qualité de code standardisée, à condition que les spécifications (le "Prompt Engineering") soient d'une précision chirurgicale.

---

## **2. Benchmarking International et Meilleures Pratiques**

Pour concevoir la structure idéale, nous avons analysé des sites de plomberie leaders dans 8 marchés différents. Cette analyse comparative permet d'importer les meilleures fonctionnalités mondiales pour les adapter au marché français.

### **2.1 Royaume-Uni : L'Approche "Service Granulaire" (Pimlico Plumbers)**

L'analyse du site de *Pimlico Plumbers* à Londres révèle une architecture de menu extrêmement détaillée. Au lieu d'une page générique "Plomberie", ils disposent de pages d'atterrissage (Landing Pages) pour chaque sous-problème : "Réparation de fuite", "Installation de toilettes", "Débouchage de drains", "Enquêtes avant achat".

**Enseignement pour Rambouillet :** Nous devons instruire l'IA pour générer une structure similaire. Une page "Plomberie" globale est insuffisante pour le GEO. Il faut créer des clusters thématiques où chaque intention de recherche (ex: "panne chaudière gaz" vs "remplacement chauffe-eau") possède son URL dédiée richement documentée.

### **2.2 Japon : La Transparence et la Confiance Technique (Qracian)**

Le site japonais *Qracian* excelle dans la réassurance. Il met en avant des "sets" de produits (toilettes TOTO, LIXIL) avec des prix incluant la pose ("kouji-hi komi"), et affiche clairement les partenariats avec les grandes marques. De plus, l'utilisation de mascottes et de guides visuels pour les pannes (ex: diagrammes de fuites) réduit la friction cognitive.

**Enseignement pour Rambouillet :** Intégrer des logos de marques courantes en France (Atlantic, Frisquet, Grohe) et afficher des fourchettes de prix estimatives ("à partir de...") directement dans les données structurées (Schema.org) pour augmenter le taux de clic (CTR).

### **2.3 États-Unis : La Ponctualité et l'Urgence (Benjamin Franklin Plumbing)**

Le site américain *Benjamin Franklin Plumbing* mise tout sur la promesse de ponctualité ("Si nous sommes en retard, nous vous payons") et une structure dédiée à l'urgence avec des bannières "Appelez-nous 24/7" omniprésentes.

**Enseignement pour Rambouillet :** Le design mobile doit comporter une barre d'action flottante ("Sticky Bottom Bar") avec un bouton d'appel direct, crucial pour les interventions d'urgence (fuites, débouchage) où l'utilisateur est en situation de stress.

### **2.4 Brésil : L'Intégration Conversationnelle (Higitec)**

L'analyse du site brésilien *Higitec* montre une intégration native et agressive de WhatsApp. Dans les marchés latins, la conversation instantanée prévaut sur le formulaire de contact classique.

**Enseignement pour Rambouillet :** Bien que la France soit moins "WhatsApp-centric" que le Brésil, l'intégration d'un bouton de chat (WhatsApp ou SMS) est devenue indispensable pour capter la clientèle jeune ou pressée. L'IA devra coder un composant "Floating Chat" qui déclenche l'application de messagerie native.

### **2.5 Allemagne et Pays-Bas : Rigueur et Minimalisme**

Les sites allemands (*Stüwe GmbH*) et néerlandais privilégient la clarté, la certification et la présentation des équipes. L'accent est mis sur la qualification "Meister" (Maître artisan) et la conformité technique.

**Enseignement pour Rambouillet :** La page "Qui sommes-nous" doit être très étoffée, mettant en avant les qualifications RGE (Reconnu Garant de l'Environnement), Qualibat, et PGN (Professionnel Gaz Naturel), des vecteurs de confiance essentiels en France.

---

## **3. Architecture Technique : Le Choix de la Performance**

Pour satisfaire les exigences des Core Web Vitals de Google et la rapidité d'indexation par les IA, le choix technologique est critique.

### **3.1 Framework Sélectionné : Astro (vs Next.js)**

Bien que Next.js soit populaire, notre analyse recommande fermement l'utilisation du framework **Astro** pour ce projet de site vitrine local.

**Tableau Comparatif : Astro vs Next.js pour un Artisan Local**

| Critère | Astro | Next.js | Justification pour Rambouillet Plomberie |
| :---- | :---- | :---- | :---- |
| **Architecture** | "Îles" (Islands) - Zéro JS par défaut | SPA / Hydratation complète (React) | Un site de plombier est à 90% statique (texte, images). Charger une librairie JS complète (React) ralentit inutilement le site sur mobile. |
| **Performance (Lighthouse)** | 98-100/100 natif | Demande optimisation lourde | La vitesse est un facteur de classement local direct. Astro est 2 à 3 fois plus rapide pour le contenu statique. |
| **Complexité Hébergement** | Fichiers statiques (HTML/CSS) | Serveur Node.js requis (souvent) | Hébergement possible sur n'importe quel CDN (Cloudflare Pages) à coût quasi nul, idéal pour une PME. |
| **SEO Technique** | HTML pur, lisibilité parfaite | DOM généré par JS (parfois complexe) | Les robots d'indexation (et les LLM) préfèrent le HTML brut et sémantique qu'Astro produit par défaut. |

### **3.2 La Stack Technique Complète**

**Claude Code** sera utilisé pour le développement avec les directives suivantes :

- **Core Framework :** Astro 5.0 (Dernière version stable)
- **Composants UI (Islands) :** React (utilisé uniquement pour les éléments interactifs comme le calculateur de devis ou le formulaire de contact)
- **Styling :** Tailwind CSS. Ce choix est stratégique car les LLM (Claude, GPT-4) excellent à générer du code Tailwind propre et maintenable, contrairement au CSS classique qui devient vite chaotique
- **Hébergement :** **Cloudflare Pages** (Edge Network mondial, latence minimale en France, SSL automatique, plan gratuit généreux)
- **Versioning :** **GitHub** (repository privé ou public selon préférence client)
- **CI/CD :** Déploiement automatique via intégration native Cloudflare Pages ↔ GitHub
- **Gestion de Contenu :** Collections de Contenu Astro (Markdown/MDX) pour les pages de services et la galerie de réalisations

### **3.3 Infrastructure GitHub et Cloudflare Pages**

#### **3.3.1 Configuration du Repository GitHub**

Le code source sera hébergé sur GitHub avec la structure suivante :

```
rambouillet-plomberie/
├── .github/
│   └── workflows/           # (Optionnel) Actions GitHub supplémentaires
├── CLAUDE.md                # ⭐ Fichier de configuration Claude Code
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   └── assets/
│       └── realisations/    # Images des réalisations (voir section 3.5)
├── public/
│   ├── images/
│   └── favicon.ico
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── README.md
```

### **3.4 Développement avec Claude Code**

#### **3.4.1 Présentation de Claude Code**

**Claude Code** est l'outil de développement agentique d'Anthropic, accessible en ligne de commande. Il permet de :

- Créer et modifier des fichiers de code directement
- Exécuter des commandes bash (npm, git, etc.)
- Naviguer dans l'arborescence du projet
- Comprendre le contexte global du projet via le fichier `CLAUDE.md`
- Itérer rapidement sur le code avec une approche conversationnelle

#### **3.4.2 Installation et Lancement**

```bash
# Installation de Claude Code (nécessite Node.js 18+)
npm install -g @anthropic-ai/claude-code

# Lancement dans le répertoire du projet
cd rambouillet-plomberie
claude

# Claude Code lit automatiquement CLAUDE.md et comprend le contexte
```

#### **3.4.3 Fichier CLAUDE.md (Configuration du Projet)**

Le fichier `CLAUDE.md` à la racine du projet définit le contexte de travail pour Claude Code. Il est lu automatiquement au démarrage de chaque session.

```markdown
# Projet : Site Web Plomberie Rambouillet

## Stack Technique
- Framework : Astro 5.0 (génération statique)
- Styling : Tailwind CSS
- Composants interactifs : React (Islands Architecture)
- Hébergement : Cloudflare Pages
- Versioning : GitHub

## Contexte Métier
Tu développes le site d'un artisan plombier-chauffagiste à Rambouillet (78120).

### Connaissances Locales
- Eau dure (TH ~25°f) → Prioriser contenus sur détartrage et adoucisseurs
- Centre-ville classé SPR (Architectes des Bâtiments de France)
- Quartiers : Groussay, La Clairière, Centre-Ville, Grenonvilliers
- Communes voisines : Gazeran, Sonchamp, Le Perray-en-Yvelines

### Normes et Réglementations
- DTU 60.1 (Plomberie)
- DTU 65.10 (Chauffage)
- Décret n° 2009-649 (entretien chaudière obligatoire)

## Conventions de Code
- Utiliser des composants Astro (.astro) pour les pages statiques
- React uniquement pour les éléments interactifs (Islands)
- Tailwind CSS pour tous les styles
- Nommage des fichiers : kebab-case
- Collections de contenu en MDX dans src/content/

## Structure des Dossiers
src/
├── components/     # Composants réutilisables
├── content/        # Collections MDX (services, réalisations)
├── layouts/        # Layouts Astro
└── pages/          # Pages du site

## Objectifs SEO/GEO
- Chaque page doit avoir un Schema.org approprié (Plumber, Service, FAQPage)
- Optimisation pour les moteurs IA (Google SGE, ChatGPT Search)
- Contenu hyper-local et technique (pas de marketing générique)

## Commandes Utiles
- `npm run dev` : Serveur de développement
- `npm run build` : Build de production (output: dist/)
- `npm run preview` : Preview du build
- `npm run generate-gallery` : Helper pour créer une réalisation
```

#### **3.4.4 Workflow de Développement avec Claude Code**

1. **Initialisation du projet**
   ```
   > claude
   Claude: Je vois le fichier CLAUDE.md. Je comprends que nous développons 
           un site Astro pour un plombier à Rambouillet. Comment puis-je vous aider ?
   
   > Initialise le projet Astro avec toutes les dépendances nécessaires
   ```

2. **Développement itératif**
   ```
   > Crée le composant Header responsive avec sticky bottom bar mobile
   
   > Ajoute la page /realisations/ avec filtres par catégorie
   
   > Génère le Schema.org Plumber pour la page d'accueil
   ```

3. **Déploiement**
   ```
   > Commit et push sur GitHub
   
   # Cloudflare Pages détecte automatiquement et déploie
   ```

#### **3.3.2 Configuration Cloudflare Pages**

**Paramètres de Build (Dashboard Cloudflare Pages) :**

| Paramètre | Valeur |
|-----------|--------|
| **Framework preset** | Astro |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` (racine) |
| **Node.js version** | `20.x` (via variable d'environnement `NODE_VERSION=20`) |

**Workflow de déploiement :**

1. Le développeur (ou l'artisan formé) pousse du code sur la branche `main`
2. Cloudflare Pages détecte automatiquement le push via webhook GitHub
3. Le script de build (`npm run build`) est exécuté sur l'infrastructure Cloudflare
4. Astro génère les fichiers statiques dans `/dist`
5. Cloudflare déploie instantanément sur son réseau Edge mondial
6. Le site est accessible en quelques secondes avec invalidation automatique du cache

### **3.4 Scripts de Build et Configuration**

#### **3.4.1 package.json**

```json
{
  "name": "rambouillet-plomberie",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "generate-gallery": "node scripts/generate-gallery.mjs"
  },
  "dependencies": {
    "astro": "^5.0.0",
    "@astrojs/react": "^4.0.0",
    "@astrojs/sitemap": "^3.0.0",
    "@astrojs/tailwind": "^5.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "sharp": "^0.33.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.0"
  }
}
```

#### **3.4.2 astro.config.mjs**

```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.rambouillet-plomberie.fr',
  output: 'static', // Génération statique pour Cloudflare Pages
  integrations: [
    react(),
    tailwind(),
    sitemap()
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  }
});
```

### **3.5 Galerie de Réalisations : Architecture et Implémentation**

La galerie de réalisations est un élément crucial pour démontrer l'expertise de l'artisan. Elle sera alimentée par des images placées directement dans le repository GitHub.

#### **3.5.1 Structure du Répertoire d'Images**

```
src/
└── content/
    └── realisations/
        ├── _images/                    # Répertoire des photos
        │   ├── 2024-01-debouchage-wc/
        │   │   ├── avant.jpg
        │   │   ├── apres.jpg
        │   │   └── detail.jpg
        │   ├── 2024-02-installation-chaudiere/
        │   │   ├── chaudiere-frisquet.jpg
        │   │   └── raccordement.jpg
        │   └── 2024-03-renovation-sdb/
        │       ├── avant-1.jpg
        │       ├── apres-1.jpg
        │       └── robinetterie.jpg
        │
        ├── debouchage-wc-rambouillet.md
        ├── installation-chaudiere-gazeran.md
        └── renovation-sdb-le-perray.md
```

#### **3.5.2 Format des Fichiers de Réalisation (MDX)**

Chaque intervention documentée sera un fichier Markdown avec frontmatter :

```markdown
---
title: "Débouchage WC - Intervention d'urgence"
slug: "debouchage-wc-rambouillet-janvier-2024"
date: 2024-01-15
category: "urgence"
location: "Rambouillet Centre"
duration: "45 minutes"
tags: ["débouchage", "WC", "urgence", "rambouillet"]
images:
  - src: "./_images/2024-01-debouchage-wc/avant.jpg"
    alt: "État initial - WC bouché"
    caption: "Situation à notre arrivée"
  - src: "./_images/2024-01-debouchage-wc/apres.jpg"
    alt: "Résultat après intervention"
    caption: "WC débouché et fonctionnel"
  - src: "./_images/2024-01-debouchage-wc/detail.jpg"
    alt: "Détail de l'intervention"
    caption: "Utilisation du furet électrique professionnel"
featured: true
testimonial:
  text: "Intervention rapide et efficace, le plombier est arrivé en 30 minutes !"
  author: "M. Dupont"
  rating: 5
---

## Contexte de l'intervention

Appel d'urgence un dimanche matin pour un WC totalement bouché dans un appartement du centre-ville de Rambouillet.

## Diagnostic

Après inspection, nous avons identifié un bouchon important causé par une accumulation de calcaire (eau dure à 25°f) et de papier.

## Solution apportée

Utilisation d'un furet électrique professionnel pour désagréger le bouchon, suivi d'un rinçage haute pression. Nous avons également recommandé un traitement préventif anti-calcaire.

## Conseils donnés au client

- Installation d'un adoucisseur d'eau recommandée
- Éviter les lingettes dans les toilettes
- Entretien préventif annuel conseillé
```

#### **3.5.3 Collection Astro pour les Réalisations**

Fichier `src/content/config.ts` :

```typescript
import { defineCollection, z } from 'astro:content';

const realisationsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string(),
    date: z.date(),
    category: z.enum(['urgence', 'chauffage', 'plomberie', 'renovation']),
    location: z.string(),
    duration: z.string().optional(),
    tags: z.array(z.string()),
    images: z.array(z.object({
      src: image(),
      alt: z.string(),
      caption: z.string().optional()
    })),
    featured: z.boolean().default(false),
    testimonial: z.object({
      text: z.string(),
      author: z.string(),
      rating: z.number().min(1).max(5)
    }).optional()
  })
});

export const collections = {
  'realisations': realisationsCollection,
};
```

#### **3.5.4 Page Galerie des Réalisations**

Fichier `src/pages/realisations/index.astro` :

```astro
---
import { getCollection } from 'astro:content';
import Layout from '../../layouts/Layout.astro';
import RealisationCard from '../../components/RealisationCard.astro';

const realisations = await getCollection('realisations');
const sortedRealisations = realisations.sort(
  (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
);

// Grouper par catégorie pour les filtres
const categories = [...new Set(realisations.map(r => r.data.category))];
---

<Layout 
  title="Nos Réalisations - Plombier Rambouillet"
  description="Découvrez nos interventions de plomberie et chauffage à Rambouillet : débouchage, installation de chaudières, rénovation de salles de bain. Photos avant/après."
>
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-8">
      Nos Réalisations à Rambouillet et Environs
    </h1>
    
    <p class="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
      Découvrez nos interventions récentes en plomberie et chauffage. 
      Chaque chantier est documenté avec photos avant/après pour vous garantir 
      transparence et qualité de service.
    </p>

    <!-- Filtres par catégorie -->
    <div class="flex flex-wrap justify-center gap-4 mb-12" id="category-filters">
      <button class="filter-btn active" data-category="all">
        Toutes ({realisations.length})
      </button>
      {categories.map(cat => (
        <button class="filter-btn" data-category={cat}>
          {cat.charAt(0).toUpperCase() + cat.slice(1)} 
          ({realisations.filter(r => r.data.category === cat).length})
        </button>
      ))}
    </div>

    <!-- Grille des réalisations -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="realisations-grid">
      {sortedRealisations.map(realisation => (
        <RealisationCard 
          realisation={realisation}
          class="realisation-item"
          data-category={realisation.data.category}
        />
      ))}
    </div>
  </main>
</Layout>

<style>
  .filter-btn {
    @apply px-4 py-2 rounded-full border-2 border-blue-600 text-blue-600 
           hover:bg-blue-600 hover:text-white transition-colors;
  }
  .filter-btn.active {
    @apply bg-blue-600 text-white;
  }
</style>

<script>
  // Filtrage côté client (Island Architecture - JavaScript minimal)
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.category;
      
      // Update active state
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Filter items
      document.querySelectorAll('.realisation-item').forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
</script>
```

#### **3.5.5 Page de Détail d'une Réalisation**

Fichier `src/pages/realisations/[slug].astro` :

```astro
---
import { getCollection, getEntry } from 'astro:content';
import { Image } from 'astro:assets';
import Layout from '../../layouts/Layout.astro';

export async function getStaticPaths() {
  const realisations = await getCollection('realisations');
  return realisations.map(entry => ({
    params: { slug: entry.data.slug },
    props: { entry }
  }));
}

const { entry } = Astro.props;
const { Content } = await entry.render();

// Schema.org pour la réalisation (GEO)
const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": entry.data.title,
  "datePublished": entry.data.date.toISOString(),
  "image": entry.data.images.map(img => img.src.src),
  "author": {
    "@type": "Organization",
    "name": "Plomberie Rambouillet Services"
  },
  "publisher": {
    "@id": "https://www.rambouillet-plomberie.fr/#organization"
  },
  "about": {
    "@type": "Service",
    "serviceType": entry.data.category,
    "areaServed": entry.data.location
  }
};
---

<Layout 
  title={`${entry.data.title} - Plombier Rambouillet`}
  description={`Intervention ${entry.data.category} à ${entry.data.location}. Découvrez notre travail en photos.`}
>
  <script type="application/ld+json" set:html={JSON.stringify(schemaOrg)} />
  
  <article class="container mx-auto px-4 py-8 max-w-4xl">
    <header class="mb-8">
      <div class="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
          {entry.data.category}
        </span>
        <span>📍 {entry.data.location}</span>
        <time datetime={entry.data.date.toISOString()}>
          {entry.data.date.toLocaleDateString('fr-FR', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </time>
        {entry.data.duration && <span>⏱️ {entry.data.duration}</span>}
      </div>
      
      <h1 class="text-4xl font-bold mb-4">{entry.data.title}</h1>
    </header>

    <!-- Galerie d'images -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {entry.data.images.map((img, index) => (
        <figure class={index === 0 ? 'md:col-span-2' : ''}>
          <Image 
            src={img.src}
            alt={img.alt}
            width={index === 0 ? 800 : 400}
            height={index === 0 ? 500 : 300}
            class="rounded-lg w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          {img.caption && (
            <figcaption class="text-sm text-gray-500 mt-2 text-center">
              {img.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>

    <!-- Contenu de l'article -->
    <div class="prose prose-lg max-w-none">
      <Content />
    </div>

    <!-- Témoignage client -->
    {entry.data.testimonial && (
      <blockquote class="mt-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
        <p class="text-lg italic text-gray-700">"{entry.data.testimonial.text}"</p>
        <footer class="mt-4 flex items-center justify-between">
          <cite class="font-semibold text-gray-900">— {entry.data.testimonial.author}</cite>
          <div class="flex text-yellow-400">
            {Array.from({ length: entry.data.testimonial.rating }).map(() => (
              <span>⭐</span>
            ))}
          </div>
        </footer>
      </blockquote>
    )}

    <!-- CTA -->
    <div class="mt-12 p-8 bg-blue-600 text-white rounded-xl text-center">
      <h2 class="text-2xl font-bold mb-4">Un projet similaire ?</h2>
      <p class="mb-6">Contactez-nous pour un devis gratuit et sans engagement.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="tel:+3313483XXXX" class="btn-white">
          📞 Appeler maintenant
        </a>
        <a href="/contact" class="btn-outline-white">
          📝 Demander un devis
        </a>
      </div>
    </div>
  </article>
</Layout>
```

#### **3.5.6 Script de Génération Automatique de la Galerie (Optionnel)**

Pour faciliter l'ajout de nouvelles réalisations, un script helper peut être fourni :

Fichier `scripts/generate-gallery.mjs` :

```javascript
#!/usr/bin/env node
/**
 * Script pour générer automatiquement un fichier de réalisation
 * à partir d'un dossier d'images.
 * 
 * Usage: node scripts/generate-gallery.mjs "Titre de l'intervention" urgence "Rambouillet"
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (prompt) => new Promise(resolve => rl.question(prompt, resolve));

async function main() {
  console.log('🔧 Générateur de fiche de réalisation\n');

  const title = await question('Titre de l\'intervention: ');
  const category = await question('Catégorie (urgence/chauffage/plomberie/renovation): ');
  const location = await question('Lieu (ex: Rambouillet Centre): ');
  const duration = await question('Durée (optionnel, ex: 2 heures): ');
  const imageFolder = await question('Nom du dossier d\'images (sera créé dans _images/): ');

  const date = new Date().toISOString().split('T')[0];
  const slug = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    + '-' + date.replace(/-/g, '');

  // Créer le dossier d'images
  const imagesDir = `src/content/realisations/_images/${imageFolder}`;
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
    console.log(`\n📁 Dossier créé: ${imagesDir}`);
    console.log('   → Placez vos images (avant.jpg, apres.jpg, etc.) dans ce dossier\n');
  }

  // Générer le fichier MDX
  const mdxContent = `---
title: "${title}"
slug: "${slug}"
date: ${date}
category: "${category}"
location: "${location}"
${duration ? `duration: "${duration}"` : '# duration: ""'}
tags: ["${category}", "${location.toLowerCase().split(' ')[0]}"]
images:
  - src: "./_images/${imageFolder}/avant.jpg"
    alt: "État avant intervention"
    caption: "Situation initiale"
  - src: "./_images/${imageFolder}/apres.jpg"
    alt: "Résultat après intervention"
    caption: "Travail terminé"
featured: false
# testimonial:
#   text: "Témoignage du client..."
#   author: "Nom du client"
#   rating: 5
---

## Contexte de l'intervention

[Décrivez le contexte : appel client, problème rencontré, urgence ou non...]

## Diagnostic

[Décrivez ce que vous avez identifié comme problème principal]

## Solution apportée

[Détaillez les travaux réalisés, les techniques utilisées, les matériaux...]

## Conseils donnés au client

- [Conseil 1]
- [Conseil 2]
- [Conseil 3]
`;

  const mdxPath = `src/content/realisations/${slug}.md`;
  fs.writeFileSync(mdxPath, mdxContent);
  
  console.log(`✅ Fichier créé: ${mdxPath}`);
  console.log('\n📋 Prochaines étapes:');
  console.log(`   1. Ajoutez vos photos dans ${imagesDir}/`);
  console.log(`   2. Modifiez ${mdxPath} pour compléter le contenu`);
  console.log('   3. Commitez et pushez sur GitHub');
  console.log('   4. Cloudflare Pages déploiera automatiquement!\n');

  rl.close();
}

main().catch(console.error);
```

### **3.6 Structure des Dossiers du Projet (Mise à jour)**

```
rambouillet-plomberie/
├── .github/
│   └── CODEOWNERS                    # Optionnel: propriétaires du code
├── CLAUDE.md                         # ⭐ Configuration Claude Code
├── scripts/
│   └── generate-gallery.mjs          # Helper pour créer des réalisations
├── src/
│   ├── components/
│   │   ├── global/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── SEOHead.astro
│   │   │   └── StickyBottomBar.astro
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   └── Modal.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── TrustBar.astro
│   │   │   ├── ServiceGrid.astro
│   │   │   └── Reviews.astro
│   │   └── gallery/
│   │       ├── RealisationCard.astro
│   │       ├── ImageLightbox.astro   # Composant React pour zoom
│   │       └── FilterButtons.astro
│   ├── content/
│   │   ├── config.ts                 # Schémas des collections
│   │   ├── services/                 # Pages de services (MDX)
│   │   │   ├── fuite-eau.mdx
│   │   │   ├── debouchage-wc.mdx
│   │   │   └── entretien-chaudiere.mdx
│   │   ├── cities/                   # Pages de zones (MDX)
│   │   │   ├── rambouillet.mdx
│   │   │   ├── gazeran.mdx
│   │   │   └── le-perray-en-yvelines.mdx
│   │   └── realisations/             # ⭐ NOUVEAU: Galerie
│   │       ├── _images/              # Photos des interventions
│   │       │   ├── 2024-01-debouchage/
│   │       │   └── 2024-02-chaudiere/
│   │       ├── debouchage-urgent.md
│   │       └── installation-chaudiere.md
│   ├── layouts/
│   │   ├── Layout.astro
│   │   └── ServiceLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── contact.astro
│       ├── realisations/             # ⭐ NOUVEAU: Galerie
│       │   ├── index.astro           # Liste des réalisations
│       │   └── [slug].astro          # Détail d'une réalisation
│       ├── urgence/
│       │   └── [service].astro
│       ├── chauffage/
│       │   └── [slug].astro
│       ├── plomberie/
│       │   └── [slug].astro
│       └── zone-intervention/
│           └── [city].astro
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── badges/                   # RGE, Qualibat, etc.
│   │   └── partners/                 # Logos marques
│   ├── favicon.ico
│   └── robots.txt
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
└── README.md
```

---

## **4. Architecture Sémantique et Ontologie (Le Cœur du GEO)**

L'optimisation pour les moteurs génératifs (GEO) repose sur la capacité à structurer l'information sous forme d'entités connectées.

### **4.1 La Stratégie des "Silos Sémantiques"**

Le site ne doit pas être une liste plate de services. Il doit être organisé en "Silos" étanches qui renforcent l'autorité thématique.

#### **Silo 1 : Urgences et Dépannage (L'Intention "Do")**

Ce silo cible les utilisateurs en détresse immédiate.

- **URL :** `/urgence/`
- **Sous-pages :**
  - `/urgence/fuite-eau` (Détection et réparation)
  - `/urgence/debouchage-wc` (Débouchage haute pression)
  - `/urgence/panne-chaudiere` (Mise en sécurité et réparation)
  - `/urgence/degat-des-eaux` (Gestion de crise et coupure d'eau)

#### **Silo 2 : Chauffage et Performance Énergétique (L'Intention "Know" & "Buy")**

Ce silo vise les installations et l'entretien préventif.

- **URL :** `/chauffage/`
- **Sous-pages :**
  - `/chauffage/installation-chaudiere-gaz` (Condensation, THPE)
  - `/chauffage/entretien-chaudiere` (Obligation légale, contrat annuel)
  - `/chauffage/pompe-a-chaleur` (PAC Air/Eau - Mention RGE obligatoire)
  - `/chauffage/detartrage` (Page critique pour Rambouillet à cause du TH 25°f)

#### **Silo 3 : Plomberie Sanitaire et Traitement de l'Eau**

- **URL :** `/plomberie/`
- **Sous-pages :**
  - `/plomberie/adoucisseur-eau` (Vente et installation pour lutter contre le calcaire)
  - `/plomberie/renovation-salle-de-bain` (Focus design et PMR)
  - `/plomberie/recherche-fuite-non-destructive` (Expertise technique avancée)

#### **Silo 4 : Ancrage Local (Zone d'Intervention)**

Pour le SEO Local, chaque commune majeure autour de Rambouillet doit avoir une page dédiée, mais avec un contenu unique (pas de duplication massive).

- **URL :** `/zone-intervention/`
- **Sous-pages :**
  - `/plombier-rambouillet` (Page pilier)
  - `/plombier-gazeran`
  - `/plombier-le-perray-en-yvelines`
  - `/plombier-sonchamp`
  - `/plombier-clairefontaine-en-yvelines`

#### **Silo 5 : Galerie de Réalisations (Preuve Sociale et E-E-A-T)**

Ce nouveau silo renforce l'autorité et la confiance via la preuve visuelle.

- **URL :** `/realisations/`
- **Sous-pages dynamiques :** `/realisations/[slug]` (générées automatiquement)
- **Objectifs GEO :**
  - Démontrer l'expertise réelle (photos avant/après)
  - Ancrer géographiquement chaque intervention (quartiers de Rambouillet)
  - Collecter et afficher les témoignages clients authentiques
  - Alimenter les données structurées (Article, ImageObject, Review)

### **4.2 Données Structurées (Schema.org) : Le Langage des IA**

C'est ici que se joue la bataille du GEO. L'IA de développement doit injecter des blocs JSON-LD spécifiques sur chaque page. Il ne faut pas se contenter du type générique LocalBusiness, mais utiliser Plumber et Service.

#### **4.2.1 Schema Plumber (Sur la page d'accueil et le Footer)**

```json
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "@id": "https://www.rambouillet-plomberie.fr/#organization",
  "name": "Plomberie Rambouillet Services",
  "description": "Artisan plombier chauffagiste à Rambouillet. Spécialiste urgence fuite, entretien chaudière et traitement de l'eau (adoucisseur). Intervention 24/7.",
  "image": "https://www.rambouillet-plomberie.fr/images/logo-artisan.png",
  "telephone": "+3313483XXXX",
  "url": "https://www.rambouillet-plomberie.fr/",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 Rue du Général de Gaulle",
    "addressLocality": "Rambouillet",
    "postalCode": "78120",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.6439,
    "longitude": 1.8330
  },
  "areaServed": [
    { "@type": "City", "name": "Rambouillet", "sameAs": "https://fr.wikipedia.org/wiki/Rambouillet" },
    { "@type": "City", "name": "Gazeran" },
    { "@type": "City", "name": "Le Perray-en-Yvelines" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59",
      "description": "Service d'urgence uniquement"
    }
  ],
  "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
  "knowsAbout": ["Plomberie", "Chauffage", "Adoucisseur d'eau", "Détartrage"]
}
```

#### **4.2.2 Schema ImageGallery (Sur la page Réalisations)**

```json
{
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Galerie des réalisations - Plomberie Rambouillet",
  "description": "Photos avant/après de nos interventions de plomberie et chauffage à Rambouillet",
  "about": {
    "@id": "https://www.rambouillet-plomberie.fr/#organization"
  },
  "image": [
    {
      "@type": "ImageObject",
      "contentUrl": "https://www.rambouillet-plomberie.fr/images/realisations/...",
      "caption": "Installation chaudière Frisquet à Rambouillet",
      "creditText": "Plomberie Rambouillet Services"
    }
  ]
}
```

---

## **5. Stratégie de Contenu et "Prompt Engineering" pour l'IA**

L'IA générative (comme Claude ou GPT) a tendance à produire du contenu générique ("Nous sommes les meilleurs plombiers..."). Pour réussir, nous devons utiliser des prompts structurés qui forcent l'IA à adopter une posture d'expert local.

### **5.1 System Prompt Global (Le "Cerveau" du site)**

Ce prompt doit être inséré dans le fichier `CLAUDE.md` à la racine du projet. Ce fichier est automatiquement lu par Claude Code au démarrage d'une session et définit le contexte de travail.

```
Rôle : Tu es un Expert Plombier-Chauffagiste Senior opérant dans les Yvelines (78), spécialisé dans le SEO Local et la rédaction technique.
Contexte : Tu développes le site web d'un artisan à Rambouillet.
Règles de Connaissances (Knowledge Graph) :

1. Géographie : Tu connais Rambouillet, ses quartiers (Groussay, La Clairière, Centre-Ville, Grenonvilliers) et les communes voisines (Gazeran, Sonchamp).
2. Technique Eau : Tu sais que l'eau est dure (TH ~25°f) et tu recommandes systématiquement la surveillance du tartre.
3. Réglementation : Tu respectes les normes DTU 60.1 (Plomberie) et DTU 65.10 (Chauffage). Tu sais que le centre est un secteur sauvegardé (ABF) et que les ventouses en façade sont souvent interdites.
4. Ton : Professionnel, rassurant, transparent, orienté solution. Pas de jargon marketing vide. Utilise le "Nous".
5. Conversion : Chaque section doit inciter à l'action (Appel ou Devis).
6. Infrastructure : Le site est hébergé sur Cloudflare Pages, déployé depuis GitHub, utilisant Astro 5.0 avec génération statique.
```

### **5.2 Prompts Spécifiques par Page**

#### **Prompt pour la Page "Recherche de Fuite"**

```
Rédige le contenu pour la page '/plomberie/recherche-de-fuite'.
Structure :
1. H1 : Recherche de Fuite Non Destructive à Rambouillet (78).
2. Problématique : Signes d'une fuite invisible (facture d'eau qui grimpe, taches d'humidité, compteur qui tourne).
3. Technologies : Décris l'utilisation de la Caméra Thermique, du Gaz Traceur et de l'Écoute Électro-acoustique. Insiste sur le fait que nous ne cassons pas les murs au hasard.
4. Assurance : Explique que nos rapports de recherche de fuite sont agréés par les assurances habitation et que l'intervention est souvent remboursée.
5. CTA : 'Intervention d'urgence sous 1h à Rambouillet'.
```

#### **Prompt pour la Page "Entretien Chaudière"**

```
Rédige le contenu pour la page '/chauffage/entretien-chaudiere'.
Points Clés :
- Rappelle l'obligation légale de l'entretien annuel (Décret n° 2009-649).
- Mentionne les marques supportées : Elm Leblanc, Frisquet, Viessmann, Saunier Duval, Atlantic.
- Explique le déroulé : Nettoyage corps de chauffe, vérification des sécurités, mesure du taux de CO.
- Spécificité Locale : Ajoute un paragraphe sur l'importance du contrôle de l'entartrage dû à l'eau calcaire de Rambouillet.
```

---

## **6. UX/UI et Éléments de Conversion**

L'interface utilisateur (UI) doit être conçue pour la conversion, en s'inspirant des meilleures pratiques observées lors du benchmarking.

### **6.1 Design Mobile-First et "Thumb Zone"**

La majorité des recherches de plomberie d'urgence se font sur mobile. L'IA doit générer une mise en page où les éléments critiques sont accessibles au pouce.

- **Sticky Bottom Bar :** Sur mobile, une barre fixe en bas de l'écran doit contenir deux boutons larges :
  1. Bouton "Appeler Maintenant" (Vert ou Orange vif) - lance l'appel téléphonique
  2. Bouton "Devis WhatsApp" (Vert WhatsApp) - ouvre une conversation pré-remplie

### **6.2 Signaux de Confiance (Trust Signals)**

L'IA doit intégrer visuellement les éléments suivants au-dessus de la ligne de flottaison :

- **Badges de Certification :** RGE, Qualibat, Professionnel du Gaz, Handibat
- **Preuve Sociale :** Widget d'avis Google (Note > 4.5/5) avec le nombre d'avis
- **Transparence Prix :** Mention "Devis Gratuit et Détaillé avant travaux"
- **Galerie de Réalisations :** Lien visible vers `/realisations/` avec aperçu des dernières interventions
- **Ancienneté :** "Installé à Rambouillet depuis X années"

### **6.3 Composants Interactifs (Islands)**

L'utilisation d'Astro permet d'intégrer des composants React légers pour engager l'utilisateur sans alourdir la page.

- **Calculateur de Coût Estimatif :** Un formulaire interactif simple
- **Lightbox Galerie :** Zoom sur les photos de réalisations (composant React minimal)
- **Filtres de catégorie :** Pour la galerie de réalisations (JavaScript vanilla ou React)

---

## **7. Feuille de Route d'Implémentation avec Claude Code**

Voici la séquence d'instructions à exécuter avec **Claude Code** pour construire le site. Claude Code permet d'exécuter ces commandes directement depuis le terminal avec une approche conversationnelle.

### **Étape 1 : Initialisation du Projet et Configuration GitHub/Cloudflare**

```bash
# 1. Créer le repository GitHub
gh repo create rambouillet-plomberie --private --clone

# 2. Initialiser le projet Astro
cd rambouillet-plomberie
npm create astro@latest . -- --template minimal --typescript strict

# 3. Installer les dépendances
npm install @astrojs/react @astrojs/tailwind @astrojs/sitemap react react-dom sharp
npm install -D tailwindcss

# 4. Configurer Tailwind
npx tailwindcss init

# 5. Créer la structure des dossiers
mkdir -p src/content/realisations/_images
mkdir -p src/components/{global,ui,sections,gallery}
mkdir -p scripts
```

### **Étape 2 : Configuration Cloudflare Pages**

1. Aller sur `dash.cloudflare.com` → Pages → Create a project
2. Connecter le repository GitHub `rambouillet-plomberie`
3. Configurer :
   - **Production branch:** `main`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION` = `20`
4. Déployer

### **Étape 3 : Création du Layout et du Header**

```
Instruction Claude Code :
"Create a responsive Header component for Astro.
Desktop: Show Logo, Nav Links (Urgences, Chauffage, Plomberie, Réalisations, Contact), and a big 'Urgence 01...' button.
Mobile: Hamburger menu + Sticky Bottom Bar with 'Call' and 'WhatsApp'.
Use semantic HTML (<header>, <nav>).
Ensure accessibility (ARIA labels).
The site is deployed on Cloudflare Pages."
```

### **Étape 4 : Implémentation de la Galerie de Réalisations**

```
Instruction Claude Code :
"Create a complete gallery system for 'Réalisations' (completed projects).
Requirements:
1. Content collection in src/content/realisations/ with MDX files
2. Images stored in src/content/realisations/_images/ subdirectories
3. Schema includes: title, slug, date, category, location, images array, testimonial
4. List page at /realisations/ with category filters
5. Detail page at /realisations/[slug] with image lightbox
6. Schema.org markup for ImageGallery and Article
7. Responsive grid layout with Tailwind
8. Lazy loading for images
9. The site uses Astro 5 with static generation for Cloudflare Pages"
```

### **Étape 5 : Développement de la Page D'accueil**

```
Instruction Claude Code :
"Build the Homepage using a modular approach.
1. Hero Section: Background image of a friendly plumber, headline 'Plombier Rambouillet (78) - Dépannage 24/7', subhead 'Arrivée en 30 min. Agréé Assurances'.
2. Trust Bar: Display logos (RGE, Qualibat, Atlantic, Grohe).
3. Service Grid: 3 cards (Fuite, Chauffage, Débouchage) with icons.
4. Recent Realisations: 3 latest projects from the gallery with photos.
5. Local Section: A map showing intervention area (Rambouillet + 15km).
6. Reviews Section: A carousel of testimonial cards."
```

### **Étape 6 : Injection du Contenu et Schema**

Utiliser les prompts de rédaction définis en section 5 pour générer les fichiers Markdown dans `/src/content/services/`. Demander ensuite à l'IA :

```
"For each service page, generate a dynamic JSON-LD script using the 'Service' and 'FAQPage' schema.
Populate the 'areaServed' with 'Rambouillet' and surrounding cities.
Ensure the price ranges are realistic for the French market.
Add ImageGallery schema for pages with multiple images."
```

### **Étape 7 : Optimisation Performance et Déploiement Final**

```
"Optimize images using Astro's <Image> component for WebP format.
Ensure lazy loading for off-screen components.
Configure Cloudflare Pages caching headers.
Run a simulated Lighthouse check and fix any CLS issues.
Generate sitemap.xml and robots.txt for SEO."
```

---

## **8. Workflow de Mise à Jour pour l'Artisan**

### **8.1 Ajouter une Nouvelle Réalisation (Processus Simplifié)**

Pour permettre à l'artisan d'ajouter facilement ses interventions :

1. **Option A - Via GitHub Web Interface (recommandé pour non-développeurs)**
   - Aller sur github.com → repository → src/content/realisations/
   - Cliquer "Add file" → "Create new file"
   - Copier le template MDX et remplir
   - Uploader les images dans le dossier `_images/`
   - Commit → Cloudflare déploie automatiquement

2. **Option B - Via le Script Helper**
   ```bash
   npm run generate-gallery
   # Suivre les instructions interactives
   ```

3. **Option C - Via Cloudflare Pages CMS (futur)**
   - Intégration possible avec Decap CMS (ex-Netlify CMS) pour une interface visuelle

### **8.2 Bonnes Pratiques pour les Photos**

- **Format recommandé :** JPEG ou WebP
- **Résolution :** Minimum 1200x800px pour les photos principales
- **Poids maximum :** 500 Ko par image (Astro optimisera automatiquement)
- **Nommage :** `avant.jpg`, `apres.jpg`, `detail-1.jpg`, `detail-2.jpg`
- **Contenu :** Éviter les visages reconnaissables sans autorisation

---

## **9. Récapitulatif Technique**

| Composant | Technologie | Justification |
|-----------|-------------|---------------|
| **Outil de dev** | Claude Code | Développement agentique, exécution de commandes, génération de code |
| **Framework** | Astro 5.0 | Vitesse extrême, génération statique native |
| **Hébergement** | Cloudflare Pages | CDN mondial, SSL gratuit, déploiement auto |
| **Versioning** | GitHub | Standard industrie, intégration Cloudflare native |
| **Build** | `npm run build` → `dist/` | Script standard exécuté par Cloudflare |
| **Images** | `src/content/realisations/_images/` | Versionnées avec le code, optimisées au build |
| **Galerie** | Collection Astro + pages dynamiques | SEO-friendly, photos avant/après |
| **Styling** | Tailwind CSS | Génération IA optimale |
| **Sémantique** | Schema.org (Plumber, Service, ImageGallery) | Visibilité GEO/AI |
| **Config projet** | `CLAUDE.md` | Contexte métier et technique pour Claude Code |

---

## **10. Conclusion**

Cette spécification définit une infrastructure numérique complète, optimisée pour :

1. **La performance** : Astro génère du HTML statique ultra-rapide, hébergé sur le CDN mondial de Cloudflare
2. **La maintenabilité** : Code versionné sur GitHub, déploiement automatique, workflow simple pour l'artisan
3. **La productivité** : Claude Code permet un développement agentique rapide avec le fichier `CLAUDE.md` comme contexte métier
4. **La preuve sociale** : Galerie de réalisations avec photos avant/après, témoignages clients intégrés
5. **Le référencement IA (GEO)** : Données structurées riches, contenu hyper-local, autorité technique démontrée

Le site sera prêt pour le futur de la recherche, où les utilisateurs demanderont à leur assistant vocal : "Siri, trouve-moi un plombier à Rambouillet qui peut détartrer ma chaudière Frisquet cet après-midi", et où seule une réponse structurée et autoritaire sera sélectionnée.
