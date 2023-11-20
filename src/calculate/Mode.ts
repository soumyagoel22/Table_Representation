import { flavanoidsValuesArray, gammaValuesArray } from "./FilteredData";
import { maxValue } from "./AlcoholDetails";

const calculateModeValue = (values: number[]): string => {
  const frequencyMap = {};
  values.forEach((value) => {
    frequencyMap[value] = (frequencyMap[value] || 0) + 1;
  });

  let mode: string;
  let maxFrequency = 0;

  for (const value in frequencyMap) {
    if (frequencyMap[value] > maxFrequency) {
      mode = value;
      maxFrequency = frequencyMap[value];
    }
  }

  return mode;
};

const numAlcohols: number = maxValue;

const calculateFlavanoidsMode = [];
for (let i = 0; i < numAlcohols; i++) {
  const calculateModeNumbers = calculateModeValue(flavanoidsValuesArray[i]);
  calculateFlavanoidsMode.push(calculateModeNumbers);
}

const calculateGammaMode = [];
for (let i = 0; i < numAlcohols; i++) {
  const calculateModeNumbers = calculateModeValue(gammaValuesArray[i]);
  calculateGammaMode.push(calculateModeNumbers);
}

export { calculateFlavanoidsMode, calculateGammaMode };
