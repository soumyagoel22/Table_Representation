import wineDataset from "../data/WineData";
import addGammaProperty from "./AddGammaProperty";
import { maxValue } from "./AlcoholDetails";

const numAlcohols = maxValue;
const gammaProperty = addGammaProperty();

const filteredDataArray = [];
for (let i = 1; i <= numAlcohols; i++) {
  const filteredData = wineDataset.filter((entry) => entry.Alcohol === i);
  filteredDataArray.push(filteredData);
}

const filteredGammaDataArray = [];
for (let i = 1; i <= numAlcohols; i++) {
  const filteredData = gammaProperty.filter((entry) => entry.Alcohol === i);
  filteredGammaDataArray.push(filteredData);
}

const flavanoidsValuesArray = [];
for (let i = 0; i < numAlcohols; i++) {
  const flavanoidsValues = filteredDataArray[i].map((entry) =>
    parseFloat(entry.Flavanoids)
  );
  flavanoidsValuesArray.push(flavanoidsValues);
}

const gammaValuesArray = [];
for (let i = 0; i < numAlcohols; i++) {
  const gammaValues = filteredGammaDataArray[i].map((entry) =>
    parseFloat(entry.Gamma)
  );
  gammaValuesArray.push(gammaValues);
}

export { flavanoidsValuesArray, gammaValuesArray };
