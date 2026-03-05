import { Testimonial } from '@/types';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="card bg-gradient-premium relative overflow-hidden"
    >
      {/* Quote Mark */}
      <div className="absolute top-4 right-4 text-gold-200 text-4xl font-bold opacity-20">
        &ldquo;
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <FiStar
              key={i}
              className="w-5 h-5 fill-gold-400 text-gold-400"
            />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-slate-700 italic mb-6 leading-relaxed">
          "{testimonial.content}"
        </p>

        {/* Author Info */}
        <div className="pt-4 border-t border-slate-200">
          <p className="font-display font-bold text-slate-900">
            {testimonial.author}
          </p>
          {testimonial.role && (
            <p className="text-sm text-slate-600">{testimonial.role}</p>
          )}
          <p className="text-xs text-slate-500 mt-1">
            {testimonial.date.toLocaleDateString('fr-FR')}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
