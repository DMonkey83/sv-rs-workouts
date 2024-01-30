import { RoleCodeEnum } from "$types/enums";
import type { FormOptions } from "$types/formOptions.types";

export const roleCodeOptions: FormOptions[] = [
  {
    value: RoleCodeEnum.Admin,
    label: 'Admin'
  },
  {
    value: RoleCodeEnum.User,
    label: 'User'
  }
];
