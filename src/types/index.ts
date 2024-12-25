export interface Market {
  id: string;
  crop: string;
  price: number;
  marketName: string;
  location: string;
  imagePath: string;
}

export interface MarketFormData {
  crop: string;
  price: number;
  marketName: string;
  location: string;
  imagePath: string;
}