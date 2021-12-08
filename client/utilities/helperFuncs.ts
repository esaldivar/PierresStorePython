import { Stores, singleResult } from '../types/storeTypes';

export const initialAlpha = (inventory: Stores): Stores => {
  return [...inventory].sort((a: singleResult, b: singleResult) => {
    const nameA = a.productName.toUpperCase();
    const nameB = b.productName.toUpperCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  });
};

export const alphabetize = (action: any, state: Stores): void => {
  action(
    [...state].sort((a: singleResult, b: singleResult) => {
      const nameA = a.productName.toUpperCase();
      const nameB = b.productName.toUpperCase();
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
    })
  );
};

export const reverseAlpha = (action: any, state: Stores): void => {
  action(
    [...state].sort((a: singleResult, b: singleResult) => {
      const nameA = a.productName.toUpperCase();
      const nameB = b.productName.toUpperCase();
      return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
    })
  );
};

export const lowPrice = (action: any, state: Stores): void => {
  action(
    [...state].sort((a: singleResult, b: singleResult) => {
      const priceA = parseInt(a.price);
      const priceB = parseInt(b.price);
      return priceA < priceB ? -1 : priceA > priceB ? 1 : 0;
    })
  );
};

export const highPrice = (action: any, state: Stores): void => {
  action(
    [...state].sort((a: singleResult, b: singleResult) => {
      const priceA = parseInt(a.price);
      const priceB = parseInt(b.price);
      return priceA > priceB ? -1 : priceA < priceB ? 1 : 0;
    })
  );
};

export const upperCaseFirstChar = (word: string): string => {
  const upperCaseWord = word
    .split('')
    .map((el: string, index: number): string => {
      if (index === 0) {
        return el.toUpperCase();
      }
      return el;
    })
    .join('');

  return upperCaseWord;
};
