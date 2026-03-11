export interface ShopFilter {
  // sort?: 'priceAsc' | 'priceDesc' | 'nameAsc' | 'nameDesc';
  sort?: string;
  category?: string;
  language?: string;
  priceRange?: 'low' | 'medium' | 'high';
  searchQuery?: string;
}
