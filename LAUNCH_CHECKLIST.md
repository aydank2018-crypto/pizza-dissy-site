# ✅ Checklist de Pré-Lancement - Pizza d'Issy

Utilisez cette checklist avant de mettre le site en production.

## 🔧 Configuration Technique

### Environment & Variables
- [ ] Variables d'environnement `.env.local` configurées localement
- [ ] Variables d'environnement configurées sur Vercel
- [ ] `NEXT_PUBLIC_SANITY_PROJECT_ID` configuré
- [ ] `NEXT_PUBLIC_SANITY_DATASET` configuré
- [ ] Email service configuré (Sendgrid/autre)
- [ ] Google Maps API Key configuré (si utilisé)
- [ ] Google Analytics ID configuré

### Build & Deployment
- [ ] `npm run build` exécuté sans erreurs localement
- [ ] `npm run type-check` passé sans erreurs
- [ ] `npm run lint` passé sans warings majeurs
- [ ] Code poussé sur GitHub
- [ ] Vercel linked au repository GitHub
- [ ] Prévu un test de déploiement sur staging

### Domaines & DNS
- [ ] Domaine enregistré (pizzadissy.fr)
- [ ] Nameservers dirigés vers Vercel
- [ ] DNS records configurés correctement
- [ ] SSL certificate activé (automatique)
- [ ] Domaine testé et accessible

## 📝 Contenu

### Menu
- [ ] Tous les plats ajoutés à Sanity CMS
- [ ] Catégories correctement organisées
- [ ] Prix vérifiés et exacts
- [ ] Descriptions complètes et appétissantes
- [ ] Photos de plats en haute résolution
- [ ] Allergens identifiés pour chaque plat
- [ ] Spécialités marquées

### Informations Restaurant
- [ ] Nom du restaurant correct
- [ ] Adresse à jour
- [ ] Téléphone correct
- [ ] Email correct
- [ ] Horaires d'ouverture à jour
- [ ] Coordonnées GPS correctes
- [ ] Logo en haute résolution
- [ ] Photos de l'intérieur du restaurant
- [ ] Description complète de la philosophie

### Événements & Promotions
- [ ] Événements spéciaux programmés
- [ ] Photos des événements
- [ ] Descriptions attrayantes
- [ ] Menus saisonniers configurés

### Textes Statiques
- [ ] Politique de confidentialité complète
- [ ] Conditions générales complètes
- [ ] Mentions légales complètes
- [ ] Description "À propos" révisée
- [ ] Messages d'erreur personalisés

## 🖼️ Design & UX

### Images
- [ ] Photo hero de qualité professionnelle
- [ ] Photos de plats: min. 8-10 images
- [ ] Photos d'ambiance: min. 3-5 images
- [ ] Logo du restaurant optimisé
- [ ] Favicon mis à jour
- [ ] OG image (partage réseaux sociaux) créée

### Responsive Design
- [ ] Testé sur mobile (iPhone, Android)
- [ ] Testé sur tablette
- [ ] Testé sur desktop
- [ ] Navigation mobile fonctionnelle
- [ ] Tous les formulaires responsive
- [ ] Images responsive

### Performances
- [ ] Core Web Vitals mesurés
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Images optimisées (lazy loading)
- [ ] Code splitting validé
- [ ] Bundle size acceptable

## 🔐 Sécurité

### Forms & APIs
- [ ] Validation input côté client
- [ ] Validation input côté serveur
- [ ] CSRF tokens en place
- [ ] Rate limiting configuré
- [ ] Données sensibles protégées
- [ ] Pas de secrets en code

### Headers & Security
- [ ] X-Content-Type-Options configuré
- [ ] X-Frame-Options configuré
- [ ] Content-Security-Policy configuré
- [ ] HTTPS forcé
- [ ] Cookies sécurisés
- [ ] HSTS configuré

## 📧 Email & Notifications

### Confirmation Emails
- [ ] Template email contact configuré
- [ ] Template email réservation configuré
- [ ] Depuis address configurable
- [ ] Emails envoyés au restaurant
- [ ] Emails envoyés au client
- [ ] Pas de typos dans les emails

### Notifications
- [ ] Admin reçoit les réservations
- [ ] Admin reçoit les contacts
- [ ] Admin reçoit les newsletters
- [ ] Alertes bien formatées

## 📊 Analytics & Monitoring

### Google Analytics
- [ ] GA4 ID configuré
- [ ] Tracking code chargé
- [ ] Test de tracking réussi
- [ ] Conversions configurées
- [ ] Events configurés

### Monitoring
- [ ] Uptime monitoring setup (Uptime Robot)
- [ ] Error tracking setup (Sentry si utilisé)
- [ ] Performance monitoring active
- [ ] Logs disponibles

## 🧪 Tests

### Fonctionnalité
- [ ] Affichage du menu fonctionne
- [ ] Filtrage des plats fonctionne
- [ ] Galerie fonctionne (lightbox)
- [ ] Formulaire contact fonctionne
- [ ] Formulaire réservation fonctionne
- [ ] Newsletter signup fonctionne
- [ ] Tous les liens internes valides
- [ ] Tous les liens externes accessibles

### Navigateurs
- [ ] Chrome (desktop + mobile)
- [ ] Firefox (desktop + mobile)
- [ ] Safari (desktop + mobile)
- [ ] Edge (desktop)
- [ ] Zoom 150% testé
- [ ] Dark mode (si supporté)

### Accessibility
- [ ] WCAG 2.1 AA compliance
- [ ] Navigation au clavier
- [ ] Screen reader compatible
- [ ] Contraste des couleurs OK
- [ ] Alt text sur toutes images
- [ ] Focus visible

## 🚀 Pré-Lancement

### Préparation
- [ ] Équipe informée de la date de lancement
- [ ] Support client préparé (email, phone)
- [ ] FAQ préparée
- [ ] Backup de tous les données
- [ ] Plan de rollback préparé

### Communications
- [ ] Email d'annonce préparé
- [ ] Posts réseaux sociaux préparés
- [ ] Communiqué de presse (optionnel)
- [ ] Local listings mise à jour

### Monitoring Post-Launch
- [ ] Équipe en alerte les 24h après lancement
- [ ] Monitoring actif
- [ ] Support à disposition
- [ ] Bugfix rapide si nécessaire

## 🎯 Post-Lancement (Semaine 1)

- [ ] Analytics vérifiées
- [ ] Pas d'erreurs dans les logs
- [ ] Réservations reçues testées
- [ ] Emails de confirmation reçus
- [ ] Performance monitoring validée
- [ ] Feedback client recueilli

## ⚠️ Points de Risque

- [ ] Base de données accessible
- [ ] API endpoints sécurisées
- [ ] Pas de données sensibles en public
- [ ] SSL certificate valide
- [ ] Rate limiting fonctionne
- [ ] Backup automatique en place

## 📋 Contacts Importants

| Rôle | Contact | Téléphone |
|------|---------|-----------|
| Responsable Technique | tech@pizzadissy.fr | +33 1 XX XX XX XX |
| Support Vercel | vercel.com/support | - |
| Support Sanity | sanity.io/support | - |
| Support Email Service | [Service] | - |

## 📝 Notes

**À compléter avant lancement:**


[Espace pour notes]


## 🎉 Lancement !

Date de lancement prévue: ________________

Sign-off (Chef de Projet): ________________ Date: ________________

Sign-off (Tech Lead): ________________ Date: ________________

Sign-off (Client): ________________ Date: ________________

---

**Dernier hébergement**: _________________

**Dernière mise à jour de cette checklist**: _________________
