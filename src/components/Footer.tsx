import Link from "next/link";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const restaurant = {
    name: "Pizza d'Issy",
    phoneDisplay: "01 75 32 35 74",
    phoneHref: "+33175323574",
    // Si tu n'as pas d'email officiel, laisse vide: ""
    email: "",
    addressLines: ["8 Rue Jeanne-d'Arc", "92130 Issy-les-Moulineaux"],
    googleMapsUrl: "https://maps.app.goo.gl/W91byEV2QPN3dMZV9",
    services: ["Terrasse", "Sur place", "Vente à emporter"],
  };

  const quickLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Réservations", href: "#reservation" },
    { label: "À propos", href: "#about" },
  ];

  // Horaires réels (selon ce que tu m'as donné)
  const hours = [
    { day: "Lundi", time: "12:00–15:00" },
    { day: "Mardi", time: "12:00–15:00 / 19:00–23:00" },
    { day: "Mercredi", time: "12:00–15:00 / 19:00–23:00" },
    { day: "Jeudi", time: "12:00–15:00 / 19:00–23:00" },
    { day: "Vendredi", time: "12:00–15:00 / 19:00–23:00" },
    { day: "Samedi", time: "18:00–23:00" },
    { day: "Dimanche", time: "Fermé" },
  ];

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4 text-gold-400">
              {restaurant.name}
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Cuisine italienne à Issy-les-Moulineaux — sur place, à emporter, avec terrasse.
            </p>

            <ul className="flex flex-wrap gap-2">
              {restaurant.services.map((s) => (
                <li
                  key={s}
                  className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4 text-gold-400">
              Liens rapides
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-gold-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4 text-gold-400">
              Nous contacter
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <FiPhone className="w-4 h-4 text-pizza-500" />
                <a
                  href={`tel:${restaurant.phoneHref}`}
                  className="hover:text-gold-400 transition-colors"
                >
                  {restaurant.phoneDisplay}
                </a>
              </li>

              {/* Email (affiché seulement si tu en as un) */}
              {restaurant.email ? (
                <li className="flex items-center gap-2">
                  <FiMail className="w-4 h-4 text-pizza-500" />
                  <a
                    href={`mailto:${restaurant.email}`}
                    className="hover:text-gold-400 transition-colors"
                  >
                    {restaurant.email}
                  </a>
                </li>
              ) : null}

              <li className="flex items-start gap-2">
                <FiMapPin className="w-4 h-4 text-pizza-500 mt-1 flex-shrink-0" />
                <div>
                  <p>
                    {restaurant.addressLines[0]}
                    <br />
                    {restaurant.addressLines[1]}
                  </p>
                  <a
                    href={restaurant.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    Voir sur Google Maps →
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg font-bold mb-4 text-gold-400">
              Horaires
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span className="font-medium">{h.day}</span>
                  <span className="text-right">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} {restaurant.name}. Tous droits réservés.
            </p>

            {/* Si tes pages /privacy /terms /legal n'existent pas, supprime cette partie */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-gold-400 transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-gold-400 transition-colors">
                Conditions générales
              </Link>
              <Link href="/legal" className="text-slate-400 hover:text-gold-400 transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}