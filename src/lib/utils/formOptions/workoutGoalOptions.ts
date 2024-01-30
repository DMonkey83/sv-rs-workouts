import { WorkoutgoalEnum } from "$types/enums";
import type { FormOptions } from "$types/formOptions.types";

export const WorkoutGoalOptions: FormOptions[] = [
  { value: WorkoutgoalEnum.BuildMuscle, label: 'Build Muscle' },
  { value: WorkoutgoalEnum.LoseWeight, label: 'Lose Weight' },
  { value: WorkoutgoalEnum.ToneBody, label: 'Tone Body' },
  { value: WorkoutgoalEnum.ImprovePower, label: 'Improve Power' },
  { value: WorkoutgoalEnum.ImproveSpeed, label: 'Improve Speed' },
  { value: WorkoutgoalEnum.BuildStrength, label: 'Build Strength' },
  { value: WorkoutgoalEnum.ImproveHealth, label: 'Improve Health' },
  { value: WorkoutgoalEnum.TrainForEvent, label: 'Train For Event' },
  { value: WorkoutgoalEnum.ImproveBalance, label: 'Improve Balance' },
  { value: WorkoutgoalEnum.ImprovePosture, label: 'Improve Posture' },
  { value: WorkoutgoalEnum.MaintainFitness, label: 'Maintain Fitness' },
  { value: WorkoutgoalEnum.ImproveEndurance, label: 'Improve Endurance' },
  { value: WorkoutgoalEnum.ImproveFlexibility, label: 'Improve Flexibility' },
  { value: WorkoutgoalEnum.ImproveCoordination, label: 'Improve Coordination' },
  { value: WorkoutgoalEnum.Custom, label: 'Custom' }
];
