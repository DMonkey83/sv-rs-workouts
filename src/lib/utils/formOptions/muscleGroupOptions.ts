import { MuscleGroupEnum } from "$types/enums";
import type { FormOptions } from "$types/formOptions.types";

export const muscleGroupOptions: FormOptions[] = [
	{
		value: MuscleGroupEnum.Abs,
		label: 'Abs'
	},
	{
		value: MuscleGroupEnum.Chest,
		label: 'Chest'
	},
	{
		value: MuscleGroupEnum.Quads,
		label: 'Quads'
	},
	{
		value: MuscleGroupEnum.Traps,
		label: 'Traps'
	},
	{
		value: MuscleGroupEnum.Biceps,
		label: 'Biceps'
	},
	{
		value: MuscleGroupEnum.Triceps,
		label: 'Triceps'
	},
	{
		value: MuscleGroupEnum.Calves,
		label: 'Calves'
	},
	{
		value: MuscleGroupEnum.Cardio,
		label: 'Cardio'
	},
	{
		value: MuscleGroupEnum.Forearms,
		label: 'Forearms'
	},
	{
		value: MuscleGroupEnum.LowerBack,
		label: 'Lower Back'
	},
	{
		value: MuscleGroupEnum.UpperBack,
		label: 'Upper Back'
	},
	{
		value: MuscleGroupEnum.Obliques,
		label: 'Obliques'
	},
	{
		value: MuscleGroupEnum.Lats,
		label: 'Latissimus Dorsi'
	},
	{
		value: MuscleGroupEnum.Hamstrings,
		label: 'Hamstrings'
	},
	{
		value: MuscleGroupEnum.Shoulders,
		label: 'Shoulders'
	},
	{
		value: MuscleGroupEnum.Compound,
		label: 'Compound'
	}
];
