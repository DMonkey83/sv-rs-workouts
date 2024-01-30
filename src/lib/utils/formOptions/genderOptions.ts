import { GenderEnum } from "$types/enums";
import type { FormOptions } from "$types/formOptions.types";

export const genderOptions: FormOptions[] = [
  {
    value: GenderEnum.Male,
    label: 'Male'
  },
  {
    value: GenderEnum.Female,
    label: 'Female'
  }
];
