import { WineEntry, SpecificPropertiesProps } from "../interface";

const ExtractSpecificProperties = (
  dataset: WineEntry
): SpecificPropertiesProps => {
  return dataset.map(
    ({
      Ash,
      Alcohol,
      Hue,
      Magnesium,
      Flavanoids
    }: SpecificPropertiesProps) => ({
      Ash,
      Alcohol,
      Hue,
      Magnesium,
      Flavanoids
    })
  );
};

export default ExtractSpecificProperties;
