import Link from 'next/link';

export const metadata = {
  title: 'Mentions Légales - Pizza d\'Issy',
  description: 'Mentions légales du restaurant Pizza d\'Issy',
};

export default function LegalPage() {
  return (
    <main className="pt-32 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="text-pizza-600 hover:text-pizza-700">
            ← Accueil
          </Link>
        </div>

        <h1 className="font-display text-5xl font-bold mb-8 text-slate-900">
          Mentions Légales
        </h1>

        <div className="prose prose-slate max-w-none space-y-6">
          <div>
            <h2 className="font-display text-2xl font-bold mb-4">
              1. Éditeur du Site
            </h2>
            <p>
              <strong>Pizza d'Issy SARL</strong>
              <br />
              123 Avenue de la Paix<br />
              92130 Issy-les-Moulineaux<br />
              France<br />
              <br />
              SIRET : [À remplir]<br />
              TVA : [À remplir]<br />
              Email : contact@pizzadissy.fr<br />
              Téléphone : +33 1 46 42 XX XX
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-4">
              2. Directeur de la Publication
            </h2>
            <p>
              Giuseppe Rossi<br />
              Directeur du restaurant Pizza d'Issy
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-4">
              3. Hébergeur
            </h2>
            <p>
              Ce site est hébergé par Vercel Inc.
              <br />
              440 N Barranca Ave<br />
              Covina, CA 91723<br />
              États-Unis
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-4">
              4. Propriété Intellectuelle
            </h2>
            <p>
              Le contenu de ce site est protégé par les droits d'auteur. Toute
              reproduction ou utilisation sans autorisation est interdite.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-4">
              5. Limitation de Responsabilité
            </h2>
            <p>
              Le contenu du site est fourni à titre informatif. Pizza d'Issy
              décline toute responsabilité pour les erreurs, omissions ou
              informations obsolètes.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-4">
              6. Liens Externes
            </h2>
            <p>
              Pizza d'Issy ne peut être tenue responsable du contenu des sites
              externes auxquels renvoient les liens présents sur ce site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold mb-4">
              7. Droit Applicable
            </h2>
            <p>
              Ces mentions légales sont régies par la loi française. Tout litige
              sera soumis aux tribunaux compétents de la région Île-de-France.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
