import { DifficultyEnum } from "$types/enums";
import type { FormOptions } from "$types/formOptions.types";

export const difficultyOptions: FormOptions[] = [
  {
    value: DifficultyEnum.Beginner,
    label: 'Beginner'
  },
  {
    value: DifficultyEnum.Intermediate,
    label: 'Intermediate'
  },
  {
    value: DifficultyEnum.Advanced,
    label: 'Advanced'
  }
];
