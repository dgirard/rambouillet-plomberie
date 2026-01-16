# Projet : Site Web Plomberie Rambouillet

## Stack Technique
- Framework : Astro 5.0 (génération statique)
- Styling : Tailwind CSS 4
- Composants interactifs : React (Islands Architecture)
- Hébergement : Cloudflare Pages
- Versioning : GitHub

## Coordonnées de l'entreprise
- **Téléphone** : 06 27 31 38 70
- **Email** : S.depannage.plomberie@gmail.com
- **Snapchat** : souleydepannage
- **Zone** : Rambouillet et Yvelines (78)
- **Horaires** : 24h/7j

## Contexte Métier
Tu développes le site d'un artisan plombier-chauffagiste à Rambouillet (78120).

### Connaissances Locales
- Eau dure (TH ~25°f) → Prioriser contenus sur détartrage et adoucisseurs
- Centre-ville classé SPR (Architectes des Bâtiments de France)
- Quartiers : Groussay, La Clairière, Centre-Ville, Grenonvilliers
- Communes voisines : Gazeran, Sonchamp, Le Perray-en-Yvelines, Clairefontaine-en-Yvelines

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
```
src/
├── components/     # Composants réutilisables
│   ├── global/     # Header, Footer, StickyBottomBar
│   ├── ui/         # Button, Card, Badge
│   ├── sections/   # Hero, TrustBar, ServiceGrid
│   └── gallery/    # RealisationCard, Lightbox
├── content/        # Collections MDX (services, réalisations, cities)
├── layouts/        # Layouts Astro
├── pages/          # Pages du site
└── styles/         # CSS global
```

## Objectifs SEO/GEO
- Chaque page doit avoir un Schema.org approprié (Plumber, Service, FAQPage)
- Optimisation pour les moteurs IA (Google SGE, ChatGPT Search)
- Contenu hyper-local et technique (pas de marketing générique)

## Commandes Utiles
- `npm run dev` : Serveur de développement
- `npm run build` : Build de production (output: dist/)
- `npm run preview` : Preview du build
