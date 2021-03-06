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
  shoppingCart: productInCart[];
  total: number;
}

export interface productInCart {
  productName: string;
  price: string;
  imageUrl: string;
}

export type Stores = singleResult[];

export interface layout {
  currentCategory: string;
  heartedFavs: string[];
}

export interface favoriteType {
  productName: string;
}

export interface addToCartBtnProps {
  text: string;
  productName: string;
  price: string;
  imageUrl: string;
}

export interface shoppingCartProps {
  productName: string;
  price: string;
  imageUrl: string;
}

export interface productDetailsProps {
  productInfo?: singleResult;
}
