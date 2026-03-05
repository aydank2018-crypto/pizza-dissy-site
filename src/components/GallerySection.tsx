'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Mock gallery images - in production these would come from Sanity CMS
  const galleryImages = [
    { id: 1, alt: 'Spaghetti Carbonara', category: 'plat' },
    { id: 2, alt: 'Intérieur du restaurant', category: 'ambiance' },
    { id: 3, alt: 'Pizza Quattro Stagioni', category: 'plat' },
    { id: 4, alt: 'Chef à l\'œuvre', category: 'ambiance' },
    { id: 5, alt: 'Pappardelle au Ragù', category: 'plat' },
    { id: 6, alt: 'Tiramisu fait maison', category: 'dessert' },
    { id: 7, alt: 'Table dressée', category: 'ambiance' },
    { id: 8, alt: 'Risotto à la Milanaise', category: 'plat' },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-cream-50">
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
            Ambiance & Cuisine
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Galerie Photographique
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pizza-600 to-wine-600 mx-auto" />
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              onClick={() => setSelectedIndex(index)}
              whileHover={{ scale: 1.02 }}
              className="relative h-56 md:h-64 rounded-xl overflow-hidden cursor-pointer group"
            >
              {/* Placeholder Image */}
              <div className="w-full h-full bg-gradient-to-br from-pizza-400 to-wine-500 flex items-center justify-center">
                <p className="text-white font-display font-bold text-center px-4">
                  {image.alt}
                </p>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

              {/* Hover Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-white text-center">
                  <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mx-auto">
                    <span className="text-xl">🔍</span>
                  </div>
                </div>
              </motion.div>

              {/* Category Badge */}
              <div className="absolute top-3 right-3 bg-pizza-600 text-white text-xs font-bold px-3 py-1 rounded-full capitalize">
                {image.category}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-10 right-0 text-white hover:text-gold-400 transition-colors"
              >
                <FiX className="w-8 h-8" />
              </button>

              {/* Image Container */}
              <div className="bg-gradient-to-br from-pizza-600 to-wine-600 rounded-lg overflow-hidden">
                <div className="w-full h-96 md:h-[500px] flex items-center justify-center">
                  <p className="text-white font-display font-bold text-center px-8">
                    {galleryImages[selectedIndex].alt}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={() =>
                    setSelectedIndex(
                      selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1
                    )
                  }
                  className="text-white hover:text-gold-400 transition-colors"
                >
                  <FiChevronLeft className="w-8 h-8" />
                </button>
                <p className="text-white text-sm">
                  {selectedIndex + 1} / {galleryImages.length}
                </p>
                <button
                  onClick={() =>
                    setSelectedIndex(
                      selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1
                    )
                  }
                  className="text-white hover:text-gold-400 transition-colors"
                >
                  <FiChevronRight className="w-8 h-8" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
