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
