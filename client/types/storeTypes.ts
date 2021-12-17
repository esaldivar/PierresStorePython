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
}

export type Stores = singleResult[];

export interface layout {
  showCats: boolean;
}
