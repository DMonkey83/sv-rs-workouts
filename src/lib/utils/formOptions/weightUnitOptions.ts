import { WeightUnitEnum } from "$types/enums";
import type { FormOptions } from "$types/formOptions.types";


export const WeightUnitOptions: FormOptions[] = [
  {
    value: WeightUnitEnum.Kg,
    label: 'Kilograms'
  },
  {
    value: WeightUnitEnum.Lb,
    label: 'Pounds'
  }
];
