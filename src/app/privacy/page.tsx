import Link from 'next/link';

export const metadata = {
  title: 'Politique de Confidentialité - Pizza d\'Issy',
  description: 'Politique de confidentialité du restaurant Pizza d\'Issy',
};

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="text-pizza-600 hover:text-pizza-700">
            ← Accueil
          </Link>
        </div>

        <h1 className="font-display text-5xl font-bold mb-8 text-slate-900">
          Politique de Confidentialité
        </h1>

        <div className="prose prose-slate max-w-none">
          <h2 className="font-display text-2xl font-bold mt-8 mb-4">
            1. Introduction
          </h2>
          <p>
            Pizza d'Issy s'engage à protéger votre vie privée. Cette politique de
            confidentialité explique comment nous collectons, utilisons et
            protégeons vos données personnelles.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">
            2. Données Collectées
          </h2>
          <p>Nous collectons les données suivantes :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Informations de réservation (nom, email, téléphone, date)</li>
            <li>Informations de contact (email, téléphone)</li>
            <li>Données de navigation (cookies)</li>
          </ul>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">
            3. Utilisation des Données
          </h2>
          <p>Vos données sont utilisées pour :</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Traiter vos réservations</li>
            <li>Vous envoyer des confirmations</li>
            <li>Améliorer notre service</li>
            <li>Vous informer de nos promotions (avec consentement)</li>
          </ul>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">
            4. Protection des Données
          </h2>
          <p>
            Nous utilisons des mesures de sécurité appropriées pour protéger vos
            données contre les accès non autorisés, les modifications ou les
            divulgations.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">
            5. Vos Droits
          </h2>
          <p>
            Vous avez le droit d'accéder, de corriger ou de supprimer vos données
            personnelles. Veuillez nous contacter pour exercer ces droits.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">
            6. Contact
          </h2>
          <p>
            Pour toute question concernant cette politique, veuillez nous contacter
            à contact@pizzadissy.fr
          </p>
        </div>
      </div>
    </main>
  );
}
