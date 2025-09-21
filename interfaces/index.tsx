// For property listings
export interface Property {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
}

// For Pill component
export interface PillProps {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

// For PropertyCard component
export interface PropertyCardProps {
  image: string;
  name: string;
  price: string;
  rating: number;
}

// For images constants (optional, if you want strict typing)
export interface Images {
  HERO_BG: string;
}
