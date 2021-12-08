export const findProduct = (product: string): string => {
  return `query fetchProduct {
        product(productName: "${product}") {
          success
          errors
          product { 
            productName
            imageUrl
            price
            information
            season
            category
            quantity
          }
        }
      }`;
};

export const getAllProducts = (): string => {
  return `query fetchProducts {
  products {
    success
    errors
    products {
    productName
    imageUrl
    price
    information
    season
    category
    quantity
    }
  }
}`;
};
