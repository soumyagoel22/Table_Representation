import ExtractSpecificProperties from "../data/ExtractSpecificProperties";
import wineDataset from "../data/WineData";
import { WineEntry } from "../interface";
import findMaxOccurrence from "./MaxValue";

const dataSet: WineEntry[] = ExtractSpecificProperties(wineDataset);
const maxValue: number = findMaxOccurrence(dataSet, "Alcohol");

const alcoholCount: number[] = [];
for (let i = 1; i <= maxValue; i++) {
  alcoholCount.push(i);
}

export { maxValue, alcoholCount };
