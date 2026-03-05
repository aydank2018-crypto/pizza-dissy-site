import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import TestimonialSection from '@/components/TestimonialSection';
import ReservationSection from '@/components/ReservationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Pizza d\'Issy - Restaurant Italien Authentique',
  description:
    'Découvrez la véritable saveur de l\'Italie. Cuisine authentique, ingrédients frais, ambiance chaleureuse. Réservez votre table dès maintenant.',
  keywords:
    'restaurant italien, pizza, pâtes, cuisine italienne, Issy-les-Moulineaux',
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <TestimonialSection />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
