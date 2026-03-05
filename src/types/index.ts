/* Menu Types */
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  isSpecialty?: boolean;
  isAvailable?: boolean;
  allergens?: string[];
  prepTime?: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  description?: string;
  order: number;
}

export interface Menu {
  id: string;
  name: string;
  description?: string;
  items: MenuItem[];
  isActive: boolean;
  startDate?: Date;
  endDate?: Date;
}

/* Reservation Types */
export interface Reservation {
  id: string;
  guestName: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  partySize: number;
  specialRequests?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}

/* Testimonial Types */
export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  content: string;
  rating: number;
  image?: string;
  date: Date;
  isPublished: boolean;
}

/* Image Types */
export interface ImageAsset {
  id: string;
  url: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
}

/* Event Types */
export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  startTime: string;
  endTime?: string;
  image?: string;
  featured: boolean;
}

/* Contact Types */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

/* Newsletter Types */
export interface NewsletterSubscription {
  email: string;
  subscribedAt: Date;
  isActive: boolean;
}

/* Restaurant Info Types */
export interface RestaurantInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  openingHours: {
    [key: string]: {
      open: string;
      close: string;
      closed?: boolean;
    };
  };
  description: string;
  logo?: string;
  banner?: string;
}
