'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';

export default function TestimonialSection() {
  const googleReviewsUrl = 'https://www.google.com/search?q=Pizza+d%27Issy+reviews';

  return (
    <section className="py-20 md:py-28 bg-white">
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
            Avis Clients
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Découvrez les Avis sur Google
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pizza-600 to-wine-600 mx-auto" />
        </motion.div>

        {/* Google Reviews Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pizza-600 to-wine-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
          >
            <span>Voir les avis sur Google</span>
            <FiExternalLink className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
