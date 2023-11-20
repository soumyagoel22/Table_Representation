import { flavanoidsValuesArray, gammaValuesArray } from "./FilteredData";
import { maxValue } from "./AlcoholDetails";

const calculateMeanValue = (values: number[]): string =>
  (values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(3);

const numAlcohols = maxValue;

const calculateFlavanoidsMean = [];
for (let i = 0; i < numAlcohols; i++) {
  const calculateMeanNumbers = calculateMeanValue(flavanoidsValuesArray[i]);
  calculateFlavanoidsMean.push(calculateMeanNumbers);
}

const calculateGammaMean = [];
for (let i = 0; i < numAlcohols; i++) {
  const calculateMeanNumbers = calculateMeanValue(gammaValuesArray[i]);
  calculateGammaMean.push(calculateMeanNumbers);
}

export { calculateFlavanoidsMean, calculateGammaMean };
