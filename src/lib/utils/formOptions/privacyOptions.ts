import { VisibilityEnum } from "$types/enums";
import type { FormOptions } from "$types/formOptions.types";

export const VisibilityOptions: FormOptions[] = [
  {
    value: VisibilityEnum.Public,
    label: 'Public'
  },
  {
    value: VisibilityEnum.Private,
    label: 'Private'
  }
];
