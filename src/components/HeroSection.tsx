'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative h-screen md:h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"%3E%3Crect fill="%23c87d42" width="1200" height="800"/%3E%3Cpath fill="%238f4723" d="M0 0Q300 150 600 0T1200 0V800Q900 650 600 800T0 800Z" opacity="0.3"/%3E%3C/svg%3E')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-10" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 right-10 w-40 h-40 bg-gold-400/10 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-48 h-48 bg-wine-600/10 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-gold-400 font-display text-lg md:text-xl font-light tracking-widest uppercase mb-4"
        >
          Bienvenue à
        </motion.p>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Pizza d'Issy
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Découvrez la véritable saveur de l'Italie. Cuisine authentique, ingrédients frais, ambiance chaleureuse.
        </motion.p>



        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center md:gap-6"
        >
          <Link href="#menu" className="btn-primary px-8 py-4 text-lg">
            Consulter le Menu
          </Link>
          <Link href="#reservation" className="btn-secondary px-8 py-4 text-lg">
            Réserver une Table
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/70 text-sm font-light">Scroll pour explorer</p>
          <FiArrowDown className="text-gold-400 w-6 h-6" />
        </div>
      </motion.div>
    </section>
  );
}
