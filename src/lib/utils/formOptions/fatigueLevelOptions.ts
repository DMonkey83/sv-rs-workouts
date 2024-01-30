import { FatigueLevelEnum } from "$types/enums";
import type { FormOptions } from "$types/formOptions.types";

export const fatigueLevelOptions: FormOptions[] = [
  {
    value: FatigueLevelEnum.Light,
    label: 'Light'
  },
  {
    value: FatigueLevelEnum.Moderate,
    label: 'Moderate'
  },
  {
    value: FatigueLevelEnum.Heavy,
    label: 'Heavy'
  },
  {
    value: FatigueLevelEnum.VeryHeavy,
    label: 'Very Heavy'
  },
  {
    value: FatigueLevelEnum.VeryLight,
    label: 'Very Light'
  }
];
