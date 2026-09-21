export interface MenuItem {
  id: string;
  name: string;
  chineseName?: string;
  category: string;
  price: number;
  description: string;
  image: string;
  isBestseller?: boolean;
  isChefSpecial?: boolean;
  spiceLevel: 0 | 1 | 2 | 3; // 0 = mild, 1 = medium, 2 = hot, 3 = fiery
  portion: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  spicePreference?: string;
  notes?: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewDate: string;
  comment: string;
  favoriteDish: string;
  verifiedCustomer: boolean;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'mains' | 'noodles' | 'appetizers' | 'sizzlers';
  image: string;
  caption: string;
}
