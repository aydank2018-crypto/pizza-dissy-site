import Link from 'next/link';

export const metadata = {
  title: 'Conditions Générales - Pizza d\'Issy',
  description: 'Conditions générales du restaurant Pizza d\'Issy',
};

export default function TermsPage() {
  return (
    <main className="pt-32 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="text-pizza-600 hover:text-pizza-700">
            ← Accueil
          </Link>
        </div>

        <h1 className="font-display text-5xl font-bold mb-8 text-slate-900">
          Conditions Générales
        </h1>

        <div className="prose prose-slate max-w-none">
          <h2 className="font-display text-2xl font-bold mt-8 mb-4">
            1. Objet
          </h2>
          <p>
            Ces conditions générales régissent l'accès et l'utilisation du site
            web pizzadissy.fr et les services proposés par Pizza d'Issy.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">
            2. Réservations
          </h2>
          <p>
            Les réservations doivent être effectuées avec un délai d'au moins 24
            heures. Pizza d'Issy se réserve le droit d'annuler une réservation en
            cas de non-respect de ce délai ou de conditions spéciales.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">
            3. Politique d'Annulation
          </h2>
          <p>
            Les annulations doivent être effectuées au moins 24 heures avant l'heure
            de réservation. Une annulation tardive peut être sujette à des frais.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">
            4. Tarifs et Paiements
          </h2>
          <p>
            Tous les tarifs sont en euros TTC. Pizza d'Issy accepte les paiements
            par carte bancaire et en espèces sur place.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">
            5. Responsabilité
          </h2>
          <p>
            Pizza d'Issy ne pourra être tenu responsable des dommages directs ou
            indirects résultant de l'utilisation du site ou des services proposés.
          </p>

          <h2 className="font-display text-2xl font-bold mt-8 mb-4">
            6. Contact
          </h2>
          <p>
            Pour toute question, veuillez nous contacter à contact@pizzadissy.fr
          </p>
        </div>
      </div>
    </main>
  );
}
