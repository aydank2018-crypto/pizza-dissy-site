'use client';

import { motion } from 'framer-motion';
import { FiPhone, FiMapPin, FiExternalLink } from 'react-icons/fi';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Téléphone',
      value: '01 75 32 35 74',
      link: 'tel:+33175323574',
    },
    {
      icon: FiMapPin,
      title: 'Adresse',
      value: '8 Rue Jeanne-d\'Arc, 92130 Issy-les-Moulineaux',
      link: 'https://maps.app.goo.gl/W91byEV2QPN3dMZV9',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
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
            Nous vous écoutons
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Nous Contacter
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pizza-600 to-wine-600 mx-auto" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    className="p-4 rounded-lg hover:bg-cream-50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <Icon className="w-6 h-6 text-pizza-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-slate-900">{info.title}</p>
                        <p className="text-slate-600 text-sm">{info.value}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              {/* Call Button */}
              <motion.a
                href="tel:+33175323574"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pizza-600 to-wine-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
              >
                <FiPhone className="w-5 h-5" />
                📞 Appeler : 01 75 32 35 74
              </motion.a>

              {/* Directions Button */}
              <motion.a
                href="https://maps.app.goo.gl/W91byEV2QPN3dMZV9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
              >
                <FiMapPin className="w-5 h-5" />
                📍 Itinéraire Google Maps
                <FiExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right - Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-premium h-96 lg:h-full min-h-96"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.8984522869746!2d2.27099!3d48.82577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66dc8a91e0001%3A0x1234567890ab!2s8%20Rue%20Jeanne-d'Arc%2C%2092130%20Issy-les-Moulineaux!5e0!3m2!1sfr!2sfr!4v1234567890"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
