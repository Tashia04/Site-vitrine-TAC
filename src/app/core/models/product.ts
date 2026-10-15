export interface Product {
  id: number;
  name: string;
  slug?: string;
  category: string;
  shortDescription?: string;
  description: string;
  image: string;
  images?: string[]; // Galerie d'images supplémentaires pour la page de détail
  price?: string;
  badge?: string;
  features?: string[];
  contents?: string[];
  available?: boolean;
  featured?: boolean;
}

