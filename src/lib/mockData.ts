import { MenuItem, Testimonial, Event } from '@/types';

/* Mock Menu Data */
export const mockMenuItems: MenuItem[] = [
  /* Antipasti */
  {
    id: 'antipasti-1',
    name: 'Caprese Authentique',
    description:
      'Tomates mozzarella fraîche, basilic frais, huile d\'olive extra vierge',
    price: 12,
    category: { id: 'cat-1', name: 'Antipasti', order: 1 },
    isSpecialty: true,
    isAvailable: true,
    allergens: ['dairy'],
  },
  {
    id: 'antipasti-2',
    name: 'Bruschette al Pomodoro',
    description:
      'Pain grillé, tomates, ail, basilic, huile d\'olive pressée à froid',
    price: 8,
    category: { id: 'cat-1', name: 'Antipasti', order: 1 },
    isAvailable: true,
  },
  {
    id: 'antipasti-3',
    name: 'Arancini Siciliani',
    description:
      'Boulettes de riz farcies au ragù, mozzarella et petits pois',
    price: 10,
    category: { id: 'cat-1', name: 'Antipasti', order: 1 },
    isAvailable: true,
    allergens: ['dairy'],
  },

  /* Primi */
  {
    id: 'primi-1',
    name: 'Spaghetti Carbonara',
    description: 'La recette romaine authentique : guanciale, œuf, fromage',
    price: 18,
    category: { id: 'cat-2', name: 'Primi', order: 2 },
    isSpecialty: true,
    isAvailable: true,
    allergens: ['dairy', 'eggs'],
  },
  {
    id: 'primi-2',
    name: 'Pappardelle al Ragù di Cinghiale',
    description:
      'Large pâtes plates avec un ragù lent de sanglier et tomates San Marzano',
    price: 22,
    category: { id: 'cat-2', name: 'Primi', order: 2 },
    isSpecialty: true,
    isAvailable: true,
  },
  {
    id: 'primi-3',
    name: 'Risotto alla Milanese',
    description:
      'Riz Carnaroli crémeux infusé au safran avec vin blanc et fromage Parmigiano',
    price: 20,
    category: { id: 'cat-2', name: 'Primi', order: 2 },
    isAvailable: true,
    allergens: ['dairy'],
  },
  {
    id: 'primi-4',
    name: 'Lasagne della Nonna',
    description:
      'Couches alternées de pâtes maison, ragù, béchamel et fromage',
    price: 16,
    category: { id: 'cat-2', name: 'Primi', order: 2 },
    isAvailable: true,
    allergens: ['dairy', 'eggs'],
  },

  /* Pizzas */
  {
    id: 'pizza-1',
    name: 'Pizza Margherita',
    description: 'Sauce tomate, mozzarella fraîche, basilic, huile d\'olive',
    price: 14,
    category: { id: 'cat-3', name: 'Pizzas', order: 3 },
    isAvailable: true,
    allergens: ['dairy'],
  },
  {
    id: 'pizza-2',
    name: 'Pizza Quattro Stagioni',
    description:
      'Quatre saisons : artichaut, œuf, jambon, champignons, olives',
    price: 18,
    category: { id: 'cat-3', name: 'Pizzas', order: 3 },
    isSpecialty: true,
    isAvailable: true,
    allergens: ['dairy', 'eggs'],
  },
  {
    id: 'pizza-3',
    name: 'Pizza Diavola',
    description: 'Sauce épicée, mozzarella, pepperoni, piment rouge',
    price: 16,
    category: { id: 'cat-3', name: 'Pizzas', order: 3 },
    isAvailable: true,
    allergens: ['dairy'],
  },

  /* Secondi */
  {
    id: 'secondi-1',
    name: 'Branzino al Forno',
    description:
      'Daurade dorée au four avec citron frais, herbes et légumes de saison',
    price: 24,
    category: { id: 'cat-4', name: 'Secondi', order: 4 },
    isSpecialty: true,
    isAvailable: true,
    allergens: ['fish'],
  },
  {
    id: 'secondi-2',
    name: 'Osso Buco à la Milanaise',
    description:
      'Jarret de veau braisé avec vin blanc, tomates et gremolata',
    price: 26,
    category: { id: 'cat-4', name: 'Secondi', order: 4 },
    isAvailable: true,
  },

  /* Dolci */
  {
    id: 'dolci-1',
    name: 'Tiramisu Authentique',
    description:
      'Mascarpone crémeux, biscuits Savoiardi imbibés de café, cacao',
    price: 9,
    category: { id: 'cat-5', name: 'Dolci', order: 5 },
    isAvailable: true,
    allergens: ['dairy', 'eggs'],
  },
  {
    id: 'dolci-2',
    name: 'Panna Cotta aux Fruits Rouges',
    description:
      'Crème de mascarpone légère garnie de fruits rouges frais et coulis',
    price: 8,
    category: { id: 'cat-5', name: 'Dolci', order: 5 },
    isAvailable: true,
    allergens: ['dairy'],
  },
  {
    id: 'dolci-3',
    name: 'Panettone Maison',
    description:
      'Gâteau traditionnel italien avec fruits confits et raisins secs',
    price: 7,
    category: { id: 'cat-5', name: 'Dolci', order: 5 },
    isAvailable: true,
    allergens: ['dairy', 'eggs'],
  },

  /* Vins */
  {
    id: 'wine-1',
    name: 'Chianti Classico DOCG',
    description: 'Toscane - Vin rouge sec et élégant, parfait pour les plats',
    price: 32,
    category: { id: 'cat-6', name: 'Vins', order: 6 },
    isAvailable: true,
  },
  {
    id: 'wine-2',
    name: 'Barolo DOCG',
    description: 'Piémont - Vin rouge robuste et structuré, excellent pour la viande',
    price: 42,
    category: { id: 'cat-6', name: 'Vins', order: 6 },
    isAvailable: true,
  },
];

/* Mock Testimonials */
export const mockTestimonials: Testimonial[] = [
  {
    id: 'testi-1',
    author: 'Marie Dupont',
    role: 'Cliente régulière',
    content:
      'Une authentique expérience italienne ! Les pâtes sont délicieuses et l\'atmosphère est très accueillante. Je reviens toujours avec plaisir.',
    rating: 5,
    date: new Date('2024-01-15'),
    isPublished: true,
  },
  {
    id: 'testi-2',
    author: 'Jean-Claude Bernard',
    role: 'Critique gastronomique',
    content:
      'Enfin un vrai restaurant italien à Issy ! La cuisine est préparée avec passion et les ingrédients sont de première qualité.',
    rating: 5,
    date: new Date('2024-02-10'),
    isPublished: true,
  },
  {
    id: 'testi-3',
    author: 'Sophie Martin',
    content:
      'Excellent accueil, service rapide et nourriture succulente. Le tiramisu est à essayer absolument !',
    rating: 5,
    date: new Date('2024-01-20'),
    isPublished: true,
  },
  {
    id: 'testi-4',
    author: 'Pierre Leclerc',
    content:
      'Bravo pour la qualité des plats et la convivialité. C\'est devenu notre restaurant préféré.',
    rating: 5,
    date: new Date('2024-02-05'),
    isPublished: true,
  },
];

/* Mock Events */
export const mockEvents: Event[] = [
  {
    id: 'event-1',
    title: 'Soirée Truffe Noire',
    description:
      'Menu spécial mettant à l\'honneur la truffe noire d\'Italie avec accords mets-vins',
    date: new Date('2024-03-15'),
    startTime: '19:00',
    endTime: '23:00',
    featured: true,
  },
  {
    id: 'event-2',
    title: 'Dîner en Famille Italienne',
    description: 'Menu famille multi-services avec ambiance conviviale et chaleureuse',
    date: new Date('2024-03-22'),
    startTime: '19:30',
    endTime: '23:30',
    featured: true,
  },
];

/* Mock Opening Hours */
export const mockOpeningHours = {
  monday: '12:00–15:00',
  tuesday: '12:00–15:00 / 19:00–23:00',
  wednesday: '12:00–15:00 / 19:00–23:00',
  thursday: '12:00–15:00 / 19:00–23:00',
  friday: '12:00–15:00 / 19:00–23:00',
  saturday: '18:00–23:00',
  sunday: 'Fermé',
};

/* Mock Restaurant Info */
export const mockRestaurantInfo = {
  name: 'Pizza d\'Issy Restaurant Italien',
  email: 'contact@pizzadissy.fr',
  phone: '+33 1 46 42 XX XX',
  address: '123 Avenue de la Paix, 92130 Issy-les-Moulineaux, France',
  coordinates: {
    lat: 48.8246,
    lng: 2.2699,
  },
  description:
    'Découvrez la véritable saveur de l\'Italie. Pizza d\'Issy propose une cuisine authentique italienne préparée avec passion et des ingrédients frais importés directement d\'Italie. Nos chefs maîtres-pizzaiolos et cuisiniers apportent au restaurant l\'âme véritable de la cuisine italienne traditionnelle.',
  openingHours: mockOpeningHours,
};
