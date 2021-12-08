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
}

export type Stores = singleResult[];
