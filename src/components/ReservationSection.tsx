'use client';

import { motion } from 'framer-motion';
import { FiPhone, FiMapPin, FiClock } from 'react-icons/fi';
import { mockOpeningHours } from '@/lib/mockData';

export default function ReservationSection() {
  return (
    <section id="reservation" className="py-20 md:py-28 bg-gradient-to-br from-cream-50 to-pizza-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-pizza-600 font-display text-lg font-light tracking-widest uppercase mb-2">
            Nous vous attendons
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Réservez Votre Table
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pizza-600 to-wine-600 mx-auto" />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Phone Button */}
            <div>
              <div className="bg-white rounded-lg p-8 shadow-premium text-center">
                <motion.a
                  href="tel:+33175323574"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pizza-600 to-wine-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow text-lg"
                >
                  <FiPhone className="w-6 h-6" />
                  📞 Réserver par téléphone
                </motion.a>
                <p className="text-slate-600 text-sm mt-4">
                  Pour réserver une table, merci de nous appeler directement.
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-lg p-6 shadow-soft">
              <div className="flex items-center gap-2 mb-4">
                <FiClock className="w-5 h-5 text-pizza-600" />
                <h3 className="font-display font-bold text-slate-900">
                  Horaires d'ouverture
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                {Object.entries(mockOpeningHours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-slate-600 capitalize">
                      {day === 'monday' && 'Lundi'}
                      {day === 'tuesday' && 'Mardi'}
                      {day === 'wednesday' && 'Mercredi'}
                      {day === 'thursday' && 'Jeudi'}
                      {day === 'friday' && 'Vendredi'}
                      {day === 'saturday' && 'Samedi'}
                      {day === 'sunday' && 'Dimanche'}
                    </span>
                    <span className="font-medium text-slate-900">
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Location */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Location */}
            <div className="bg-white rounded-lg p-6 shadow-soft">
              <div className="flex items-start gap-3 mb-4">
                <FiMapPin className="w-5 h-5 text-pizza-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-slate-900">
                    Localisation
                  </h3>
                  <p className="text-sm text-slate-600 mt-2">
                    8 Rue Jeanne-d'Arc<br />
                    92130 Issy-les-Moulineaux<br />
                    France
                  </p>
                  <a href="https://maps.app.goo.gl/W91byEV2QPN3dMZV9" target="_blank" rel="noopener noreferrer" className="link-underline text-sm mt-3 inline-block">
                    Voir sur Google Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
