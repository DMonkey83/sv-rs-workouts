import { EquipmentEnum } from "$types/enums";
import type { FormOptions } from "$types/formOptions.types";

export const equipmentOptions: FormOptions[] = [
  {
    value: EquipmentEnum.Barbell,
    label: 'Barbell'
  },
  {
    value: EquipmentEnum.Bar,
    label: 'Bar'
  },
  {
    value: EquipmentEnum.Bands,
    label: 'Bands'
  },
  {
    value: EquipmentEnum.Cable,
    label: 'Cable'
  },
  {
    value: EquipmentEnum.EZBar,
    label: 'EZ Bar'
  },
  {
    value: EquipmentEnum.Other,
    label: 'Other'
  },
  {
    value: EquipmentEnum.Machine,
    label: 'Machine'
  },
  {
    value: EquipmentEnum.SmithMachine,
    label: 'Smith Machine'
  },
  {
    value: EquipmentEnum.Bodyweight,
    label: 'Bodyweight'
  },
  {
    value: EquipmentEnum.Dumbbell,
    label: 'Dumbbell'
  }
];
