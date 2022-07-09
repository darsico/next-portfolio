export const cleanAndCapitalize = (word) => {
  const cleanWord = word.replace('-icon', '');
  const capitalized = cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1);
  return capitalized;
};
