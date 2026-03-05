export type MenuItem = {
  name: string;
  description?: string;
  price?: number;
  priceNote?: string; // ex: "dès 6,00 €"
};

export type MenuSection = {
  id: string; // utilisé pour l'ancre #menu
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export const MENU: MenuSection[] = [
  {
    id: "salades",
    title: "Salades",
    subtitle: "Accompagnées de petit pain frais maison",
    items: [
      { name: "Salade Antipasti", price: 13.5 },
      { name: "Salade Burrata", price: 16.9 },
      { name: "Focaccia", price: 17.9 },
      { name: "Salade Burrata à la Truffe", price: 18.9 },
      { name: "Salade au Jambon Blanc", price: 15.9 },
      { name: "Salade au Jambon de Parme", price: 17.9 },
      { name: "Salade d’Issy", price: 19.9 },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    items: [
      { name: "Alla Norma", price: 12.9 },
      { name: "Végétarienne", price: 14.9 },
      { name: "Pâtes al Pesto", price: 14.9 },
      { name: "Tartufata", price: 14.9 },
      { name: "Quatre Fromages", price: 15.9 },
      { name: "Pollo", price: 15.9 },
      { name: "Salmone", price: 16.9 },
      { name: "Alla Nduja", price: 16.9 },
      { name: "Tartufata à la Burrata", price: 17.9 },
    ],
  },
  {
    id: "pizzas",
    title: "Nos Pizzas",
    subtitle: "Pâte à pizza fait maison",
    items: [
      { name: "Baby Pizza", price: 9.0, description: "Uniquement destinée aux enfants, jusqu’à 12 ans" },
      { name: "Margherita", price: 12.0 },
      { name: "Végétarienne", price: 14.5 },
      { name: "Campione", price: 15.9 },
      { name: "Regina", price: 15.9 },
      { name: "Sicilienne", price: 15.9 },
      { name: "Napolitaine", price: 15.9 },
      { name: "Pollo", price: 15.9 },
      { name: "Quatre Fromages", price: 15.9 },
      { name: "Quatre Saisons", price: 16.9 },
      { name: "Calzone", price: 16.9 },

      { name: "Pizza d’Issy", price: 16.9 },
      { name: "Salmone", price: 16.9 },
      { name: "Campione Fumée", price: 16.9 },
      { name: "N’Duja", price: 16.9 },
      { name: "Diavola", price: 16.9 },
      { name: "Pizza de Voisin d’Issy", price: 17.5 },
      { name: "Reine Truffée", price: 17.9 },
      { name: "Parma", price: 17.9 },
      { name: "Tartufata à la Burrata", price: 18.9 },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "Desserts maison",
    items: [
      { name: "Tiramisu", price: 7.0 },
      { name: "Panna Cotta", price: 7.0 },
      { name: "Mousse au chocolat", price: 7.0 },
      { name: "Cheese cake", price: 7.0 },
      { name: "Calzone Nutella banane", price: 9.0 },
      { name: "Pizza aux fruits de saisons", price: 9.0 },
    ],
  },
  {
    id: "boissons",
    title: "Boissons",
    subtitle: "Sélection (prix indicatifs)",
    items: [
      { name: "Softs (Coca, Coca Zero, Perrier, Fuze Tea, Schweppes, Orangina, Limonade, Jus de fruits)", price: 4.6 },
      { name: "Evian / San Pellegrino (50 cl)", price: 5.0 },
      { name: "Evian / San Pellegrino (1 L)", price: 7.0 },
      { name: "Orange ou citron pressé", price: 5.5 },
      { name: "Cocktails", price: 8.0 },
      { name: "Bières (bouteille)", priceNote: "4,00 € à 6,50 €" },
      { name: "Bières (pression)", priceNote: "dès 4,00 €" },
      { name: "Vins (rouge / blanc / rosé)", priceNote: "verre, 25cl, 50cl, bouteille" },
    ],
  },
];

export function formatPriceEUR(value: number) {
  return value.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
}