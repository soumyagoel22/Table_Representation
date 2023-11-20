import { flavanoidsValuesArray, gammaValuesArray } from "./FilteredData";
import { maxValue } from "./AlcoholDetails";

const calculateMedianValue = (values: number[]): string => {
  const sortedValues = values.sort((a, b) => a - b);
  const mid = Math.floor(sortedValues.length / 2);

  if (sortedValues.length % 2 === 0) {
    return ((sortedValues[mid - 1] + sortedValues[mid]) / 2).toFixed(3);
  } else {
    return sortedValues[mid].toFixed(3);
  }
};

const numAlcohols = maxValue;

const calculateFlavanoidsMedian = [];
for (let i = 0; i < numAlcohols; i++) {
  const calculateMedianNumbers = calculateMedianValue(flavanoidsValuesArray[i]);
  calculateFlavanoidsMedian.push(calculateMedianNumbers);
}

const calculateGammaMedian = [];
for (let i = 0; i < numAlcohols; i++) {
  const calculateMedianNumbers = calculateMedianValue(gammaValuesArray[i]);
  calculateGammaMedian.push(calculateMedianNumbers);
}

export { calculateFlavanoidsMedian, calculateGammaMedian };
