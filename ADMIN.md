# 👨‍💼 Guide d'Administration - Pizza d'Issy

Ce guide est destiné à l'administrateur du restaurant qui souhaite gérer le contenu sans connaissances techniques.

## 🎯 Vue d'ensemble

Le site Pizza d'Issy utilise **Sanity.io** comme système de gestion de contenu (CMS) pour gérer facilement :
- ✅ Le menu (plats, prix, descriptions)
- ✅ Les événements spéciaux
- ✅ Les témoignages clients
- ✅ Les informations du restaurant

## 🔑 Accès au CMS

### 1. Se connecter à Sanity
1. Aller sur: https://sanity-studio.pizzadissy.fr
2. Entrer vos identifiants email/mot de passe
3. Cliquer "Connexion"

### 2. Récupérer ses identifiants
Si vous avez perdu vos identifiants:
- Contacter: tech@pizzadissy.fr
- Cliquer "Mot de passe oublié" sur la page de connexion

## 📋 Gestion du Menu

### Ajouter un nouveau plat

1. **Dans le CMS Sanity:**
   - Cliquer sur "Content" dans le menu de gauche
   - Cliquer "+ Create" 
   - Sélectionner "Menu Item" (Article de menu)

2. **Remplir les informations:**

   **Nom** (requis)
   - Exemple: "Spaghetti Carbonara"

   **Description** (requis)
   - Exemple: "La recette romaine authentique : guanciale, œuf, fromage"

   **Prix** (requis)
   - Entrer le montant en euros
   - Exemple: 18

   **Catégorie** (requis)
   - Sélectionner dans la liste:
     - Antipasti
     - Primi
     - Pizzas
     - Secondi
     - Dolci
     - Vini

   **Photo** (optionnel)
   - Cliquer "Upload" et sélectionner une photo du plat
   - La photo doit être en haute résolution (min. 800x600px)
   - Formatos acceptés: JPG, PNG, WebP

   **Est une spécialité?**
   - Cocher la case si ce plat doit être mis en avant
   - Les spécialités apparaissent avec un badge ⭐

   **Allergènes** (optionnel)
   - Ajouter les allergènes: "dairy", "nuts", "gluten", etc.

3. **Publier:**
   - Cliquer le bouton "Publish" (Publier)
   - Le plat apparaîtra sur le site en quelques secondes

### Modifier un plat existant

1. Aller dans "Content"
2. Cliquer sur le plat à modifier
3. Éditer les informations
4. Cliquer "Publish"

### Supprimer un plat

1. Ouvrir le plat
2. Cliquer le menu "..." en haut à droite
3. Sélectionner "Delete" (Supprimer)
4. Confirmer la suppression

## 🎪 Gestion des Événements

### Créer un événement spécial

1. Dans le CMS: Content > Create > Event
2. Remplir les informations:
   - **Titre**: Nom de l'événement
   - **Description**: Détails de l'événement
   - **Date**: Date de l'événement
   - **Heure de début**: HH:MM (ex: 19:00)
   - **Heure de fin**: HH:MM (optionnel)
   - **Photo**: Image de l'événement
   - **À la Une**: Cocher pour afficher en évidence

3. Cliquer "Publish"

### Exemples d'événements
- Soirée Truffes Noires
- Dégustations de Vins
- Menu Dégustation Spécial
- Fête de la Gastronomie

## ⭐ Gestion des Témoignages

### Ajouter un avis client

1. Aller dans: Content > Create > Testimonial

2. Remplir les informations:
   - **Auteur**: Nom du client
   - **Rôle** (optionnel): Ex: "Cliente régulière"
   - **Avis**: Texte du témoignage
   - **Note**: Évaluation 1-5 étoiles
   - **Photo** (optionnel): Photo du client
   - **Publié**: Cocher pour l'afficher sur le site

3. Cliquer "Publish"

### Modérer les avis

- Tous les avis doivent être vérifiés avant publication
- Cliquer "Unpublish" pour masquer un avis
- Supprimer les avis spam ou inappropriés

## 🏢 Informations du Restaurant

### Mettre à jour les infos

1. Aller dans: Content > Restaurant Information

2. Modifier si nécessaire:
   - Nom du restaurant
   - Description
   - Adresse
   - Téléphone
   - Email
   - Logo
   - Photo de couverture

3. Cliquer "Publish"

### Horaires d'ouverture

Les horaires sont à configurer dans le fichier d'environnement (`.env.local`).

Pour modifier:
1. Contacter le support technique
2. Il éditera le fichier de configuration
3. Les horaires seront mises à jour sur le site

**Horaires actuels:**
- Lundi-Jeudi: 11h30-14h00 / 19h00-23h00
- Vendredi: 11h30-23h00
- Samedi: 11h30-23h30
- Dimanche: 12h00-22h00

## 📊 Tableau de Bord

### Vue d'ensemble

Le dashboard Sanity affiche:
- Nombre de plats au menu
- Nombre d'événements programmés
- Avis clients en attente de modération
- Réservations reçues

### Statistiques

Pour voir les statistiques du site:
1. Aller sur: https://pizzadissy.fr/admin/analytics (si configuré)
2. Voir:
   - Visiteurs par jour
   - Pages les plus consultées
   - Réservations générées
   - Demandes de contact

## 🔐 Sécurité

### Règles importantes

✅ **À FAIRE:**
- Changer votre mot de passe régulièrement
- Utiliser un mot de passe fort (min. 12 caractères)
- Se déconnecter après utilisation
- Vérifier les avis avant publication
- Supprimer les événements passés

❌ **NE PAS FAIRE:**
- Partager votre mot de passe
- Mettre à jour 100 plats en même temps
- Ajouter les mêmes photos trop souvent
- Cliquer sur des liens externes en CMS
- Utiliser des noms de fichiers avec des caractères spéciaux

## 🆘 Dépannage

### Le site ne met pas à jour après changement

- Attendre 2-3 secondes (mis en cache)
- Rafraîchir le navigateur (Ctrl+F5 ou Cmd+Shift+R)
- Vider le cache du navigateur

### Je ne vois pas mes changements

1. Vérifier que vous avez cliqué "Publish"
2. Vérifier votre connexion Internet
3. Essayer depuis un autre navigateur
4. Contacter le support

### Le CMS est lent

- Vérifier votre connexion Internet
- Essayer d'avoir moins d'onglets ouverts
- Redémarrer votre navigateur

## 📞 Support Client

### Formulaires du site

Les clients peuvent:
- **Réserver une table** via le formulaire de réservation
- **Poser une question** via le formulaire de contact
- **S'inscrire à la newsletter** en bas du site

### Email des clients

Vous recevrez un email pour:
- Chaque nouvelle réservation
- Chaque message de contact
- Chaque nouvelle inscription newsletter

Adresses de réception:
- Réservations: reservations@pizzadissy.fr
- Contact: contact@pizzadissy.fr

## 📱 Pages à Mettre à Jour Régulièrement

### Hebdomadaire
- ✅ Ajouter/modifier les spécialités du jour
- ✅ Vérifier et valider les avis
- ✅ Répondre aux demandes de contact

### Mensuellement
- ✅ Ajouter des photographes de nouveaux plats
- ✅ Mettre à jour les événements spéciaux
- ✅ Analyser les réservations

### Annuellement
- ✅ Revoir tous les prix
- ✅ Actualiser la description du restaurant
- ✅ Mettre à jour les mentions légales

## 🎓 Tutoriels Rapides

### Ajouter une catégorie de menu

Si vous besoin une nouvelle catégorie (ex: Boissons):
1. Content > Create > Menu Category
2. Nom: "Boissons"
3. Ordre: 7 (position dans le menu)
4. Publish

### Archiver un plat

Pour masquer un plat sans le supprimer:
1. Ouvrir le plat
2. Cliquer "Unpublish"
3. Le plat disparaît du site mais reste dans le CMS

### Créer un menu saisonnier

1. Créer les plats normalement
2. Ajouter "Menus Saisonniers" dans la description
3. Ajouter des photos avec les couleurs de la saison
4. Publier

## 💡 Conseils pour le Succès

1. **Photos** - Utilisez toujours de bonnes images en haute résolution
2. **Description** - Soyez descriptif et appétissant
3. **Prix** - Gardez à jour avec vos tarifs réels
4. **Événements** - Mettez à jour régulièrement
5. **Avis** - Encouragez les clients à laisser des avis
6. **Mise à jour** - Mettez à jour le site au moins une fois par semaine

## ❓ Questions Fréquentes

**Q: Puis-je modifier les couleurs du site?**  
A: Non, contactez support@pizzadissy.fr pour les changements de design

**Q: Combien de plats puis-je ajouter?**  
A: Illimité! Ajoute autant que tu veux

**Q: Mes changements apparaissent-ils immédiatement?**  
A: Oui, après rafraîchissement du navigateur (2-3 sec max)

**Q: Puis-je ajouter des promotions?**  
A: Oui, modifiez le prix ou ajoutez dans la description

**Q: Comment augmenter les réservations?**  
A: Mettez à jour régulièrement le site, posez de bonnes photos, encouragez les avis

---

**Pour toute aide supplémentaire:**
- Email: support@pizzadissy.fr
- Téléphone: +33 1 46 42 XX XX
- Horaires: Lun-Ven 9h-17h

**Dernière mise à jour:** Mars 2024
