'use client';

import { motion } from 'framer-motion';
import { FiAward, FiHeart, FiFeather } from "react-icons/fi";

export default function AboutSection() {

  const values = [
    {
      icon: FiAward,
      title: 'Qualité',
      description: 'Produits sélectionnés avec soin',
    },
    {
      icon: FiFeather,
      title: 'Fraîcheur',
      description: 'Préparation minute sur place',
    },
    {
      icon: FiHeart,
      title: 'Convivialité',
      description: 'Une ambiance chaleureuse et authentique',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >

          {/* Texte */}
          <div>

            <p className="text-pizza-600 font-display text-lg font-light tracking-widest uppercase mb-2">
              À propos
            </p>

            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              Pizza d'Issy
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
              <p>
                Pizza d’Issy vous accueille à Issy-les-Moulineaux
                pour une cuisine italienne généreuse et conviviale.
              </p>

              <p>
                Sur place, à emporter et avec terrasse,
                notre équipe prépare vos pizzas et plats
                avec des produits soigneusement sélectionnés.
              </p>

              <p>
                Notre objectif : vous faire passer un bon moment
                avec des saveurs italiennes simples et authentiques.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="card text-center p-4">
                    <Icon className="w-8 h-8 text-pizza-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-sm mb-1 text-slate-900">
                      {value.title}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-premium">
              <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-pizza-600 to-wine-600 flex items-center justify-center">
                <p className="text-white text-center px-8">
                  <span className="text-2xl font-display font-bold">
                    Pizza d'Issy
                  </span>
                  <br />
                  <span className="text-sm font-light">
                    8 Rue Jeanne-d'Arc<br />
                    92130 Issy-les-Moulineaux
                  </span>
                </p>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}