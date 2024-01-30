import { RatingEnum } from "$types/enums";
import type { FormOptions } from "$types/formOptions.types";

export const ratingOptions: FormOptions[] = [
  {
    value: RatingEnum.Rating1,
    label: 'One'
  },
  {
    value: RatingEnum.Rating2,
    label: 'Two'
  },
  {
    value: RatingEnum.Rating3,
    label: 'Three'
  },
  {
    value: RatingEnum.Rating4,
    label: 'Four'
  },
  {
    value: RatingEnum.Rating5,
    label: 'Five'
  }
];
