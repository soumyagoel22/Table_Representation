const findMaxOccurrence = (array: number[], property: string): number => {
  const maxAlcohol = Math.max(...array.map((obj) => obj[property]));
  return maxAlcohol;
};

export default findMaxOccurrence;
