export interface WineEntry {
  Alcohol: number;
  "Malic Acid": number;
  Ash: number;
  "Alcalinity of ash": number;
  Magnesium: number;
  "Total phenols": number;
  Flavanoids: number;
  "Nonflavanoid phenols": number;
  Proanthocyanins: string;
  "Color intensity": number;
  Hue: number;
  "OD280/OD315 of diluted wines": number;
  Unknown: number;
}

export interface SpecificPropertiesProps {
  Ash: number;
  Alcohol: number;
  Hue: number;
  Magnesium: number;
  Flavanoids: number;
}
