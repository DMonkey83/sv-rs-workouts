import { CompletionEnum } from '$types/enums';
import type { FormOptions } from '$types/formOptions.types';

export const completionOptions: FormOptions[] = [
  {
    value: CompletionEnum.Completed,
    label: 'Completed'
  },
  {
    value: CompletionEnum.Incomplete,
    label: 'Incomplete'
  },
  {
    value: CompletionEnum.NotStarted,
    label: 'Not Started'
  }
];
