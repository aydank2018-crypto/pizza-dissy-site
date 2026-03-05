/* Format Price */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
};

/* Format Date */
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

/* Format Time */
export const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':');
  return `${hours}h${minutes}`;
};

/* Validate Email */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/* Validate Phone */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
};

/* Generate Reservation ID */
export const generateReservationId = (): string => {
  return `RES-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/* Debounce Function */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/* Throttle Function */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let lastRun = 0;

  return (...args: Parameters<T>) => {
    const now = Date.now();

    if (now - lastRun >= limit) {
      func(...args);
      lastRun = now;
    }
  };
};

/* Truncate Text */
export const truncate = (text: string, length: number): string => {
  return text.length > length ? `${text.slice(0, length)}...` : text;
};

/* Get Initials */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};
