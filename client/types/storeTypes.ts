export interface singleResult {
  productName: string;
  imageUrl: string;
  price: string;
  information: string;
  season?: string[];
  category: string[];
  quantity: string;
}

export interface inventory {
  searchInput: string;
  singleResult: singleResult;
  store: singleResult[];
  currentProduct: string;
  favorites: singleResult[];
}

export type Stores = singleResult[];

export interface layout {
  currentCategory: string;
  heartedFavs: string[];
}

export interface favoriteType {
  productName: string;
}
