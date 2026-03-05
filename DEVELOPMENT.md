# Guide de Développement - Pizza d'Issy

## 📚 Vue d'ensemble

Ce document guide vous aidera à comprendre l'architecture du projet et à effectuer des modifications.

## 🏗️ Architecture du Projet

### Next.js 14 avec App Router

Le projet utilise le nouvel App Router de Next.js 14, qui offre:
- Routing basé sur des dossiers
- Layouts imbriqués
- Routes API
- Streaming et Suspense

### Dossier `src/app`

```
app/
├── layout.tsx           # Layout racine
├── page.tsx             # Page d'accueil
├── api/
│   ├── contact/route.ts
│   └── reservations/route.ts
├── privacy/page.tsx
├── terms/page.tsx
└── legal/page.tsx
```

## 🧩 Composants

Tous les composants réutilisables se trouvent dans `src/components/`.

### Structure type d'un composant

```tsx
'use client'; // Si utilisation de hooks client

import { motion } from 'framer-motion';

interface ComponentProps {
  // Props types
}

export default function ComponentName({ prop }: ComponentProps) {
  return (
    // JSX
  );
}
```

### Composants principaux

| Composant | Description |
|-----------|-------------|
| Header | Navigation avec menu hamburger |
| Footer | Pied de page avec liens |
| HeroSection | Section d'accueil |
| MenuSection | Affichage du menu |
| GallerySection | Galerie d'images |
| TestimonialSection | Témoignages clients |
| ReservationSection | Formulaire de réservation |
| ContactSection | Formulaire de contact |

## 🎨 Styling

### Tailwind CSS

Le projet utilise Tailwind CSS avec une palette personnalisée dans `tailwind.config.ts`.

#### Couleurs
- `pizza-*`: Palette orange/brun
- `wine-*`: Palette rouge
- `olive-*`: Palette vert olive
- `cream-*`: Palette crème
- `gold-*`: Palette doré

#### Utilisation

```tsx
<div className="bg-pizza-600 text-white p-4 rounded-lg shadow-soft hover:shadow-premium">
  Contenu
</div>
```

### CSS personnalisé

Des styles supplémentaires sont disponibles dans `src/styles/globals.css`:
- Animations (`fadeInUp`, `slideInLeft`, etc.)
- Classes utilitaires (`.btn-primary`, `.card`, `.glass`, etc.)
- Typographie

## 🔧 Formulaires

Le projet utilise `react-hook-form` pour la gestion des formulaires.

```tsx
import { useForm } from 'react-hook-form';

export default function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    // Traiter les données
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} />
      <button type="submit">Envoyer</button>
    </form>
  );
}
```

## 📊 Données

### Mock Data

Pendant le développement, utilisez `src/lib/mockData.ts`:

```tsx
import { mockMenuItems, mockTestimonials } from '@/lib/mockData';
```

### Connexion à Sanity CMS

```tsx
import { client } from '@/lib/sanity';

const menuItems = await client.fetch(`*[_type == "menuItem"]`);
```

## 🔄 API Routes

### Créer une nouvelle route API

```tsx
// src/app/api/my-endpoint/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Votre logique ici
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur' },
      { status: 500 }
    );
  }
}
```

## 🎬 Animations

Le projet utilise Framer Motion pour les animations.

### Exemples

```tsx
import { motion } from 'framer-motion';

// Animation au chargement
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Contenu
</motion.div>

// Animation au survol
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Cliquez-moi
</motion.button>

// Animation au scroll
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  Visible au scroll
</motion.div>
```

## 🔍 SEO

### Métadonnées

Définissez les métadonnées dans le fichier de page:

```tsx
export const metadata = {
  title: 'Titre de la page',
  description: 'Description',
  keywords: 'mots-clés',
};
```

### Open Graph

```tsx
export const metadata = {
  openGraph: {
    title: 'Title',
    description: 'Description',
    images: ['/og-image.jpg'],
  },
};
```

## 🧪 Bonnes pratiques

### Performance

- Utilisez `Image` de Next.js pour les images optimisées
- Lazy loading pour les composants lourds
- Code splitting automatique avec Next.js

### Accessibilité

- Utiliser des labels avec les inputs
- ARIA attributes quand nécessaire
- Navigable au clavier
- Contraste des couleurs ≥ 4.5:1

### TypeScript

- Toujours typer les props
- Créer des interfaces dans `src/types/`
- Utiliser `as const` pour les types littéraux

```tsx
interface Props {
  status: 'pending' | 'completed' | 'error';
}
```

## 📦 Ajout de dépendances

```bash
npm install nom-du-package
npm install --save-dev nom-du-package
```

## 🚀 Déploiement

### Sur Vercel

```bash
vercel deploy
```

### Variables d'environnement

Ajoutez dans le dashboard Vercel:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- etc.

## 🐛 Débogage

### Mode développement

```bash
npm run dev
```

Accédez à http://localhost:3000

### Logs

```tsx
console.log('Debug:', data);
```

### DevTools

- React DevTools
- Next.js DevTools

## 📝 Conventions de code

- **Composants**: PascalCase (e.g., `MenuItemCard.tsx`)
- **Variables**: camelCase (e.g., `menuItems`)
- **Constantes**: UPPER_SNAKE_CASE (e.g., `MAX_ITEMS = 10`)
- **Fichiers**: kebab-case sauf composants

## 🤝 Contribution

1. Créez une branche: `git checkout -b feature/mon-feature`
2. Committez: `git commit -am 'Ajout feature'`
3. Push: `git push origin feature/mon-feature`
4. Pull Request

## 📚 Ressources utiles

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)

## ❓ FAQ

**Q: Comment ajouter une page?**  
A: Créez un dossier dans `src/app/` avec un fichier `page.tsx`.

**Q: Comment intégrer Sanity CMS?**  
A: Installez `next-sanity` et configurez `sanity.config.ts`.

**Q: Comment modifier les couleurs?**  
A: Éditez `tailwind.config.ts` et `src/styles/globals.css`.

**Q: Comment ajouter des images?**  
A: Placez-les dans `public/` et utilisez le composant `Image` de Next.js.

---

Pour plus de questions, contactez contact@pizzadissy.fr
