import { HeightUnitEnum } from "$types/enums";
import type { FormOptions } from "$types/formOptions.types";

export const HeightUnitOptions: FormOptions[] = [
  {
    value: HeightUnitEnum.Centimeters,
    label: 'Centimeters'
  },
  {
    value: HeightUnitEnum.FeetInches,
    label: 'Feet and Inches'
  }
];
