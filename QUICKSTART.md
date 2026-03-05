# 🚀 Guide de Démarrage Rapide - Pizza d'Issy

Lancez le site en moins de 5 minutes !

## 📋 Prérequis

- Node.js 18+ installé
- npm installé
- Éditeur de code (VS Code recommandé)

## ⚡ Démarrage (5 minutes)

### 1. Installation (1 min)

```bash
cd /chemin/vers/pizza-dissy
npm install
```

### 2. Configuration (1 min)

```bash
# Copier le template d'environnement
cp .env.example .env.local

# Éditer .env.local avec tes infos
nano .env.local
```

Exemple `.env.local`:
```env
NEXT_PUBLIC_RESTAURANT_NAME=Pizza d'Issy
NEXT_PUBLIC_RESTAURANT_EMAIL=contact@pizzadissy.fr
NEXT_PUBLIC_RESTAURANT_PHONE=+33 1 46 42 XX XX
```

### 3. Lancer le serveur (1 min)

```bash
npm run dev
```

### 4. Vérifier

Ouvrir: http://localhost:3000

Vous devriez voir le site en direct! 🎉

## 🛠️ Commandes Utiles

```bash
# Lancer le serveur de dev
npm run dev

# Builder pour production
npm run build

# Lancer la version prod localement
npm start

# Vérifier les erreurs TypeScript
npm run type-check

# Vérifier le code avec ESLint
npm run lint

# Formater le code
npm run format (si configuré)
```

## 📝 Première Modification

### Modifier l'accueil

1. Ouvrir `src/app/page.tsx`
2. Chercher "Découvrez la véritable saveur de l'Italie"
3. Changer le texte
4. Sauvegarder (Ctrl+S)
5. Le site met à jour automatiquement! ⚡

### Ajouter un plat au menu

1. Ouvrir `src/lib/mockData.ts`
2. Ajouter dans `mockMenuItems`:

```typescript
{
  id: 'pizza-4',
  name: 'Votre Pizza',
  description: 'Description délicieuse',
  price: 15,
  category: { id: 'cat-3', name: 'Pizzas', order: 3 },
  isSpecialty: false,
  isAvailable: true,
}
```

3. Sauvegarder
4. Rafraîchir le site

## 🎨 Modifier les Couleurs

Éditer `tailwind.config.ts`:

```typescript
colors: {
  'pizza': {
    600: '#VOTRE_COULEUR', // Rouge brique original
  },
  // ...
}
```

## 🌐 Personnaliser le Contenu

### Infos du restaurant

Éditer `.env.local`:
```env
NEXT_PUBLIC_RESTAURANT_NAME=Votre Nom
NEXT_PUBLIC_RESTAURANT_EMAIL=votre@email.fr
NEXT_PUBLIC_RESTAURANT_PHONE=+33 1 XX XX XX XX
NEXT_PUBLIC_RESTAURANT_ADDRESS=Votre Adresse
```

### Pages légales

- Politique: `src/app/privacy/page.tsx`
- Conditions: `src/app/terms/page.tsx`
- Légal: `src/app/legal/page.tsx`

## 📁 Structure Simple

```
src/
├── app/           # Pages et layouts
├── components/    # Composants réutilisables
├── lib/          # Utilitaires et données
├── styles/       # CSS global
└── types/        # Types TypeScript
```

## ❓ Questions FAQ

**Q: Où sauvegarder les images?**  
A: Dans `public/` (p.ex: `public/dishes/pizza.jpg`)

**Q: Comment ajouter une nouvelle page?**  
A: Créer `src/app/nom-page/page.tsx`

**Q: Où modifier le menu?**  
A: `src/lib/mockData.ts` ou Sanity CMS

**Q: Comment déployer?**  
A: Voir `DEPLOYMENT.md` pour guide complet

**Q: Quand je modifie, pourquoi ça ne change pas?**  
A: 
- Vérifier d'avoir sauvegardé (Ctrl+S)
- Rafraîchir le navigateur (F5)
- Vérifier les erreurs dans le terminal

## 🔗 Liens Importants

- [Next.js Docs](https://nextjs.org/docs) - Documentation officielle
- [Tailwind CSS](https://tailwindcss.com) - Utilitaires CSS
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Sanity CMS](https://www.sanity.io) - Gestion de contenu

## 💡 Tips du Développement

- Utiliser VS Code avec extensions:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS Intellisense
  - Prettier

- Toujours vérifier la console navigateur pour les erreurs (F12)

- Utiliser React DevTools pour déboguer les composants

- Faire régulièrement `npm run type-check` pour éviter les erreurs

## 🚀 Prochaines Étapes

1. **Lire la doc** - `README.md` pour vue complète
2. **Explorer les composants** - Voir comment ils fonctionnent
3. **Ajouter ton contenu** - Personnaliser pour ton restaurant
4. **Configurer Sanity** - Pour gestion de contenu facile
5. **Déployer** - Voir `DEPLOYMENT.md`

## 🆘 Besoin d'Aide?

- Erreur de build? → Check `npm run build` output
- TypeScript errors? → Vérifier types dans `src/types/`
- Questions? → Consulter les guides:
  - `DEVELOPMENT.md` - Guide téchnique
  - `ADMIN.md` - Guide administrateur
  - `DEPLOYMENT.md` - Guide déploiement

## ✨ Fonctionnalités Incluses

- ✅ Menu dynamique
- ✅ Réservations en ligne
- ✅ Galerie d'images
- ✅ Formulaires de contact
- ✅ Animations élégantes
- ✅ Responsive design
- ✅ SEO optimisé
- ✅ Prêt pour production

---

**C'est tout! 🎉 Ton site Pizza d'Issy est prêt à être développé!**

Pour questions plus avancées, consulte les autres guides.
