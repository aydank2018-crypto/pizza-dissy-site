# 🚀 Guide de Déploiement - Pizza d'Issy

Ce guide vous expliquera comment déployer le site web du restaurant Pizza d'Issy en production.

## 📋 Table des matières

1. [Configuration locale](#configuration-locale)
2. [Préparation au déploiement](#préparation-au-déploiement)
3. [Déploiement sur Vercel](#déploiement-sur-vercel)
4. [Configuration DNS](#configuration-dns)
5. [Intégrations et services](#intégrations-et-services)
6. [Maintenance et monitoring](#maintenance-et-monitoring)

## 🏠 Configuration locale

### Prérequis
- Node.js 18+ installé
- Git configuré
- Compte GitHub (pour Vercel)
- Compte Vercel

### Installation

```bash
# Cloner le repository
git clone https://github.com/votre-username/pizza-dissy.git
cd pizza-dissy

# Installer les dépendances
npm install

# Créer le fichier .env.local
cp .env.example .env.local

# Éditer .env.local avec vos variables
nano .env.local
```

### Variables d'environnement essentielles

```env
# Restaurant Info
NEXT_PUBLIC_RESTAURANT_NAME=Pizza d'Issy Restaurant Italien
NEXT_PUBLIC_RESTAURANT_EMAIL=contact@pizzadissy.fr
NEXT_PUBLIC_RESTAURANT_PHONE=+33 1 XX XX XX XX
NEXT_PUBLIC_RESTAURANT_ADDRESS=123 Avenue de la Paix, Issy-les-Moulineaux, 92130
NEXT_PUBLIC_RESTAURANT_LAT=48.8246
NEXT_PUBLIC_RESTAURANT_LNG=2.2699

# Sanity CMS (optionnel)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Email Service
SMTP_HOST=votre-service-email.com
SMTP_PORT=587
SMTP_USER=votre-email@example.com
SMTP_PASS=votre-mot-de-passe

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Test local

```bash
# Lancer le server de développement
npm run dev

# Vérifier les erreurs de build
npm run build

# Vérifier le linting
npm run lint

# Vérifier les types TypeScript
npm run type-check
```

## 📦 Préparation au déploiement

### 1. Vérifications avant déploiement

```bash
# Vérifier que tout build correctement
npm run build

# Vérifier qu'il n'y a pas d'erreurs TypeScript
npm run type-check

# Vérifier que le linting passe
npm run lint
```

### 2. Updates des dépendances

```bash
# Vérifier les mises à jour disponibles
npm outdated

# Mettre à jour si nécessaire
npm update
```

### 3. Créer un commit de préparation

```bash
git add .
git commit -m "🚀 Préparation déploiement production"
git push origin main
```

## 🎯 Déploiement sur Vercel

### Méthode 1 : Via GitHub (Recommandé)

1. **Créer un repository GitHub**
   ```bash
   # Initialiser le repo local
   git init
   git add .
   git commit -m "Initial commit"
   
   # Créer le repo sur GitHub et pousser
   git remote add origin https://github.com/votre-username/pizza-dissy.git
   git branch -M main
   git push -u origin main
   ```

2. **Connecter à Vercel**
   - Aller sur https://vercel.com
   - Cliquer "New Project"
   - Importer votre repository GitHub
   - Configurer les paramètres du projet
   - Cliquer "Deploy"

### Méthode 2 : Déploiement en ligne de commande

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel --prod
```

### Configuration sur le Dashboard Vercel

1. **Aller sur Settings > Environment Variables**

2. **Ajouter les variables d'environnement production:**
   ```
   NEXT_PUBLIC_RESTAURANT_NAME = Pizza d'Issy Restaurant Italien
   NEXT_PUBLIC_SANITY_PROJECT_ID = your_id
   NEXT_PUBLIC_SANITY_DATASET = production
   SANITY_API_TOKEN = your_token
   SMTP_HOST = votre-host
   SMTP_PORT = 587
   SMTP_USER = votre-email
   SMTP_PASS = votre-mot-de-passe
   ```

3. **Aller sur Settings > Domains**

4. **Ajouter votre domaine personnalisé**
   - Ajouter `pizzadissy.fr`
   - Configurer les DNS records

## 🌐 Configuration DNS

### Ajouter le domaine chez Vercel

1. Dans Vercel Dashboard → Settings → Domains
2. Ajouter votre domaine (ex: pizzadissy.fr)
3. Vercel affiche les nameservers à utiliser
4. Aller chez votre registrar (GoDaddy, OVH, etc.)
5. Remplacer les nameservers actuels par ceux de Vercel

### Records DNS typiques

Si vous n'utilisez pas les nameservers de Vercel:

```
Type    Name            Value
A       @               76.76.19.165
CNAME   www             cname.vercel-dns.com.
MX      @               10 aspmx.l.google.com.
TXT     @               v=spf1 include:vercel.com ~all
```

## 🔗 Intégrations et Services

### Configuration Sanity CMS

```bash
# Installer Sanity CLI
npm install -g @sanity/cli

# Se connecter
sanity login

# Initialiser Sanity
sanity init

# Déployer Sanity
sanity deploy
```

### Configuration Email (Sendgrid Exemple)

1. Créer un compte sur [Sendgrid](https://sendgrid.com)
2. Générer une API key
3. Ajouter les variables d'environnement:
   ```env
   SENDGRID_API_KEY=your_api_key
   SENDGRID_FROM_EMAIL=noreply@pizzadissy.fr
   ```

4. Mettre à jour les API routes pour utiliser Sendgrid

### Configuration Google Business/Maps

1. Créer une fiche Google Business
2. Obtenir les coordonnées GPS
3. Ajouter les variables d'environnement:
   ```env
   NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_api_key
   NEXT_PUBLIC_RESTAURANT_LAT=48.8246
   NEXT_PUBLIC_RESTAURANT_LNG=2.2699
   ```

### Configuration Analytics

1. Créer un compte [Google Analytics](https://analytics.google.com)
2. Ajouter le property ID:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. Créer un fichier `src/lib/gtag.ts`:
   ```tsx
   export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

   export const pageView = (url: string) => {
     window.gtag?.('config', GA_ID, {
       page_path: url,
     });
   };
   ```

4. Ajouter à `src/app/layout.tsx`:
   ```tsx
   import Script from 'next/script';

   export default function RootLayout() {
     return (
       <html>
         <head>
           <Script
             src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
             strategy="afterInteractive"
           />
           <Script
             id="gtag-init"
             strategy="afterInteractive"
             dangerouslySetInnerHTML={{
               __html: `
                 window.dataLayer = window.dataLayer || [];
                 function gtag(){dataLayer.push(arguments);}
                 gtag('js', new Date());
                 gtag('config', '${GA_ID}');
               `,
             }}
           />
         </head>
         <body>{/* ... */}</body>
       </html>
     );
   }
   ```

## 📊 Monitoring et Maintenance

### Uptime Monitoring

Utiliser [Uptime Robot](https://uptimerobot.com):
1. Créer un compte gratuit
2. Ajouter votre URL: https://pizzadissy.fr
3. Configurer les alertes email

### Performance Monitoring

Utiliser [Vercel Analytics](https://vercel.com/features/observability):
- Inclus automatiquement avec Vercel
- Monitore les Core Web Vitals
- Disponible dans Vercel Dashboard > Analytics

### Logs et Debugging

- Vérifier les logs dans Vercel Dashboard > Deployments
- Activer les logs détaillés en mode développement:
  ```bash
  VERCEL_DEBUG=1 npm run dev
  ```

### Updates régulières

```bash
# Vérifier les mises à jour
npm outdated

# Mettre à jour
npm update

# Mettre à jour les dépendances majeures
npm install npm-check-updates -g
ncu --upgrade
npm install
```

## 🔒 Sécurité

### HTTPS
- Automatique avec Vercel ✓

### Certificat SSL
- Vercel fournit automatiquement ✓

### Rate Limiting
Ajouter dans `vercel.json`:
```json
{
  "functions": {
    "src/app/api/**/*.ts": {
      "maxDuration": 10,
      "memory": 1024
    }
  }
}
```

### Headers de Sécurité
Dans `next.config.ts`:
```ts
headers: async () => {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          key: 'Referrer-Policy',
          value: 'strict-origin-when-cross-origin'
        }
      ]
    }
  ];
}
```

## 🐛 Troubleshooting

### Le site ne se déploie pas

```bash
# Vérifier les logs
vercel logs

# Vérifier le build local
npm run build

# Vérifier les erreurs TypeScript
npm run type-check
```

### Les variables d'environnement ne sont pas chargées

- Vérifier qu'elles sont dans Vercel Dashboard
- Vérifier qu'elles commencent par `NEXT_PUBLIC_` si côté client
- Redéployer après modification

### Performance lente

- Vérifier les Core Web Vitals dans Vercel Analytics
- Optimiser les images
- Utiliser le cache Vercel
- Vérifier la taille du bundle

## 📞 Support

Pour l'assistance Vercel: https://vercel.com/support

---

**Version**: 1.0  
**Dernière mise à jour**: Mars 2024  
**Prochaines étapes**: Monitoring et optimisations post-déploiement
