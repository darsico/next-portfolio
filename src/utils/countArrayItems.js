export const countArrayItems = (array) => {
  const arrayCounted = array.reduce((accumulator, value) => {
    return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
  }, {});
  return arrayCounted;
};
