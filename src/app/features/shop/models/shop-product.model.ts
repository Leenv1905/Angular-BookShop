export interface ShopProduct {
  id: number;
  name: string;
  author: string;
  price: number;
  salePrice?: number;
  category: string;
  language: string;
  rating: number;
  image: string;
}
