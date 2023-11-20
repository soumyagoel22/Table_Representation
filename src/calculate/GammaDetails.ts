import wineDataset from "../data/WineData";
import { WineEntry } from "../interface";

const GammaData: number[][] = wineDataset.map((item: WineEntry) => {
  const GammaArray: number[] = [];
  const GammaValue: number = (item.Ash * item.Hue) / item.Magnesium;
  GammaArray.push(Number(GammaValue.toFixed(3)));
  return GammaArray;
});

export default GammaData;
