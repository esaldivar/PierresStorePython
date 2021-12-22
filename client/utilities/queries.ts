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

export const getUser = (client: string, password: string): string => {
  return `query fetchUser {
    user(emailAddress:"${client}", password:"${password}") {
      success
      errors
      user { 
      userId
      firstName
      lastName
      phoneNumber
      emailAddress
      }
    }
  }`;
};

export const getAllUsers = (): string => {
  return `query fetchAllUsers {
    users {
      success
      errors
      users { 
      id
      firstName
      lastName
      phoneNumber
      emailAddress
      password
      }
    }
  }`;
};
