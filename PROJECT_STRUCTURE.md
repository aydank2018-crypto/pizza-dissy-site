# 📋 Fichiers du Projet - Guide de Référence

## 📁 Structure Complète

```
pizza-dissy/
├── public/                          # Fichiers statiques
│   ├── robots.txt                   # SEO robots indexing
│   ├── favicon.ico                  # Icône du site
│   └── og-image.jpg                 # Image partage réseaux sociaux
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── layout.tsx               # Layout racine + métadonnées
│   │   ├── page.tsx                 # Page d'accueil
│   │   ├── sitemap.ts               # Sitemap pour SEO
│   │   ├── api/
│   │   │   ├── contact/route.ts     # Endpoint formulaire contact
│   │   │   └── reservations/route.ts # Endpoint réservations
│   │   ├── privacy/page.tsx         # Politique de confidentialité
│   │   ├── terms/page.tsx           # Conditions générales
│   │   └── legal/page.tsx           # Mentions légales
│   │
│   ├── components/                  # Composants React réutilisables
│   │   ├── index.ts                 # Exports centralisés
│   │   ├── Header.tsx               # Navigation principale
│   │   ├── Footer.tsx               # Pied de page
│   │   ├── HeroSection.tsx          # Section accueil
│   │   ├── AboutSection.tsx         # Section à propos
│   │   ├── MenuSection.tsx          # Section menu
│   │   ├── MenuItemCard.tsx         # Carte article menu
│   │   ├── GallerySection.tsx       # Galerie photos
│   │   ├── TestimonialSection.tsx   # Section témoignages
│   │   ├── TestimonialCard.tsx      # Carte témoignage
│   │   ├── ReservationSection.tsx   # Section réservation
│   │   ├── ReservationForm.tsx      # Formulaire réservation
│   │   └── ContactSection.tsx       # Section contact
│   │
│   ├── lib/                         # Utilitaires et configuration
│   │   ├── mockData.ts              # Données de développement
│   │   └── utils.ts                 # Fonctions utilitaires
│   │
│   ├── styles/
│   │   └── globals.css              # Styles globaux + animations
│   │
│   └── types/
│       └── index.ts                 # Types TypeScript
│
├── .github/
│   └── copilot-instructions.md      # Instructions Copilot
│
├── Configuration Files
├── .env.local                       # Variables d'environnement (local)
├── .env.example                     # Template variables
├── .eslintrc.json                   # Configuration ESLint
├── .gitignore                       # Fichiers à ignorer git
├── next.config.ts                   # Configuration Next.js
├── postcss.config.js                # Configuration PostCSS
├── tailwind.config.ts               # Configuration Tailwind + thème
├── tsconfig.json                    # Configuration TypeScript
├── vercel.json                      # Configuration Vercel
├── sanity.config.ts                 # Configuration Sanity CMS
│
├── Documentation
├── README.md                        # Guide d'utilisation
├── DEVELOPMENT.md                   # Guide développement
├── DEPLOYMENT.md                    # Guide déploiement
├── ADMIN.md                         # Guide administration
│
├── package.json                     # Dépendances du projet
└── package-lock.json                # Lock file npm
```

## 📄 Description des Fichiers Clés

### Configuration

| Fichier | Purpose | Modifiable |
|---------|---------|-----------|
| `package.json` | Dépendances NPM | ⚠️ Avec soin |
| `next.config.ts` | Config Next.js | ✅ Oui |
| `tailwind.config.ts` | Palette couleurs & thème | ✅ Oui |
| `tsconfig.json` | Config TypeScript | ⚠️ Avec soin |
| `.env.local` | Variables locales | ✅ Oui |
| `vercel.json` | Config Vercel | ✅ Oui |

### Pages & Routes

| Fichier | Route | Purpose |
|---------|-------|---------|
| `src/app/page.tsx` | `/` | Page d'accueil |
| `src/app/privacy/page.tsx` | `/privacy` | Politique de confidentialité |
| `src/app/terms/page.tsx` | `/terms` | Conditions générales |
| `src/app/legal/page.tsx` | `/legal` | Mentions légales |
| `src/app/api/contact/route.ts` | `/api/contact` | API contact |
| `src/app/api/reservations/route.ts` | `/api/reservations` | API réservations |

### Composants Principaux

| Composant | Emplacement | Purpose |
|-----------|-----------|---------|
| Header | `Header.tsx` | Navigation + logo |
| Footer | `Footer.tsx` | Liens footer + infos |
| Hero | `HeroSection.tsx` | Section d'accueil |
| About | `AboutSection.tsx` | Histoire du restaurant |
| Menu | `MenuSection.tsx` | Affichage menu |
| Gallery | `GallerySection.tsx` | Galerie photos |
| Testimonials | `TestimonialSection.tsx` | Avis clients |
| Reservation | `ReservationSection.tsx` | Formulaire réservation |
| Contact | `ContactSection.tsx` | Formulaire contact |

### Données & Types

| Fichier | Contient | Usage |
|---------|----------|-------|
| `mockData.ts` | Menu, témoignages, événements | Développement |
| `utils.ts` | Fonctions helpers | Utilitaires |
| `types/index.ts` | Interfaces TypeScript | Types |

### Styles

| Fichier | Contient | Modifiable |
|---------|----------|-----------|
| `globals.css` | Styles globaux, animations | ✅ Oui |
| `tailwind.config.ts` | Configuration Tailwind | ✅ Oui |

## 🔄 Flux de Modification

### Pour modifier le menu:
1. Éditer `src/lib/mockData.ts` (dev)
2. Ou connecter Sanity CMS et utiliser le Dashboard

### Pour modifier les couleurs:
1. Éditer palette dans `tailwind.config.ts`
2. Éditer fichier `globals.css` si nécessaire

### Pour ajouter une section:
1. Créer nouveau composant dans `src/components/`
2. Importer dans `src/app/page.tsx`
3. Ajouter aux exports `src/components/index.ts`

### Pour ajouter une page:
1. Créer dossier dans `src/app/nom-page/`
2. Créer `page.tsx` dans ce dossier
3. Route disponible à `/nom-page`

## 🚀 Optimisations Futures

### À faire:
- [ ] Mode sombre
- [ ] Multi-langue (FR/EN)
- [ ] Blog intégré
- [ ] Newsletter automatique
- [ ] Intégration OpenTable
- [ ] Système de payment pour commandes en ligne
- [ ] Customer Reviews API
- [ ] Chat en direct

## ℹ️ Notes Importantes

- **NE JAMAIS** modifier `tsconfig.json` sans raison valide
- **NE JAMAIS** commit `.env.local` (fichier secret)
- **TOUJOURS** tester localement avant de push
- **TOUJOURS** faire un build complet test avant production
- **UTILISER** des types TypeScript pour la sécurité

---

Pour plus de détails, consultez:
- README.md - Guide d'utilisation général
- DEVELOPMENT.md - Guide développement technique
- DEPLOYMENT.md - Guide déploiement
