import { MenuItem } from '@/types';
import { motion } from 'framer-motion';
import { FiAlertCircle } from 'react-icons/fi';

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="card group"
    >
      {/* Badge */}
      {item.isSpecialty && (
        <div className="absolute -top-3 -right-3 bg-pizza-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-soft">
          ⭐ Spécialité
        </div>
      )}

      {/* Content */}
      <div className="mb-4">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h4 className="font-display text-lg font-bold text-slate-900 flex-1">
            {item.name}
          </h4>
          <p className="font-display font-bold text-pizza-600 text-lg whitespace-nowrap">
            {item.price.toFixed(2)}€
          </p>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          {item.description}
        </p>

        {/* Allergens */}
        {item.allergens && item.allergens.length > 0 && (
          <div className="flex items-center gap-2 text-xs text-wine-600 pt-3 border-t border-slate-200">
            <FiAlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{item.allergens.join(', ')}</span>
          </div>
        )}
      </div>

      {/* Status */}
      {!item.isAvailable && (
        <div className="text-center py-2 bg-slate-100 rounded text-sm font-medium text-slate-600">
          Non disponible
        </div>
      )}
    </motion.div>
  );
}
