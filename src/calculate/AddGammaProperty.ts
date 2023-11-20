import wineDataset from "../data/WineData";
import GammaData from "./GammaDetails";

const addGammaProperty = () => {
  const data = wineDataset;
  const gammaValue = GammaData;
  return data.map((entry, index) => ({
    ...entry,
    Gamma: gammaValue[index][0]
  }));
};

export default addGammaProperty;
