'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiCalendar, FiClock, FiUsers, FiUser, FiPhone, FiMail, FiMessageSquare } from 'react-icons/fi';

interface ReservationFormData {
  date: string;
  time: string;
  partySize: number;
  name: string;
  phone: string;
  email: string;
  specialRequests?: string;
}

export default function ReservationForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ReservationFormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: ReservationFormData) => {
    try {
      // In a real app, this would send to an API
      console.log('Form submitted:', data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 shadow-premium"
    >
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center font-medium"
        >
          ✓ Réservation effectuée avec succès ! Nous vous confirmerons sous peu.
        </motion.div>
      )}

      <h3 className="font-display text-2xl font-bold mb-8 text-slate-900">
        Réserver maintenant
      </h3>

      {/* Date & Time Row */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            <FiCalendar className="w-4 h-4 inline mr-2" />
            Date
          </label>
          <input
            type="date"
            {...register('date', { required: 'La date est requise' })}
            className={`form-input ${errors.date ? 'border-red-500' : ''}`}
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>

        {/* Time */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            <FiClock className="w-4 h-4 inline mr-2" />
            Heure
          </label>
          <input
            type="time"
            {...register('time', { required: 'L\'heure est requise' })}
            className={`form-input ${errors.time ? 'border-red-500' : ''}`}
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
          )}
        </div>
      </div>

      {/* Party Size */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          <FiUsers className="w-4 h-4 inline mr-2" />
          Nombre de convives
        </label>
        <select
          {...register('partySize', { required: 'Le nombre de convives est requis' })}
          className={`form-input ${errors.partySize ? 'border-red-500' : ''}`}
        >
          <option value="">Sélectionnez un nombre</option>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? 'personne' : 'personnes'}
            </option>
          ))}
        </select>
        {errors.partySize && (
          <p className="text-red-500 text-sm mt-1">{errors.partySize.message}</p>
        )}
      </div>

      {/* Name & Email Row */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            <FiUser className="w-4 h-4 inline mr-2" />
            Nom
          </label>
          <input
            type="text"
            {...register('name', { required: 'Le nom est requis' })}
            placeholder="Votre nom"
            className={`form-input ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            <FiMail className="w-4 h-4 inline mr-2" />
            Email
          </label>
          <input
            type="email"
            {...register('email', {
              required: 'L\'email est requis',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Veuillez entrer un email valide',
              },
            })}
            placeholder="votre@email.com"
            className={`form-input ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          <FiPhone className="w-4 h-4 inline mr-2" />
          Téléphone
        </label>
        <input
          type="tel"
          {...register('phone', { required: 'Le téléphone est requis' })}
          placeholder="+33 1 XX XX XX XX"
          className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      {/* Special Requests */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          <FiMessageSquare className="w-4 h-4 inline mr-2" />
          Demandes spéciales (optionnel)
        </label>
        <textarea
          {...register('specialRequests')}
          placeholder="Allergie, célébration, etc..."
          rows={4}
          className="form-textarea"
        />
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="btn-primary w-full py-4 text-lg font-bold"
      >
        Confirmer la Réservation
      </motion.button>

      {/* Note */}
      <p className="text-xs text-slate-500 text-center mt-4">
        Nous vous enverrons une confirmation par email et SMS
      </p>
    </motion.form>
  );
}
