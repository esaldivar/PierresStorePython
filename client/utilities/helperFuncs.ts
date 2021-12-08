import { Stores, singleResult } from '../types/storeTypes';

export const alphabetize = (action: any, state: Stores) => {
  action(
    [...state].sort((a: singleResult, b: singleResult) => {
      const nameA = a.productName.toUpperCase();
      const nameB = b.productName.toUpperCase();
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
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
